"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import type { MediaAsset } from "@/content/media";

/**
 * Full-screen photograph viewer - matches Figma nodes 390:4967 (desktop) and
 * 390:5239 (mobile):
 *   - solid black backdrop
 *   - the enlarged photograph, centered
 *   - a pair of square controls below it: coal (#171615) squares with white
 *     chevrons, 70x70 on desktop / 55x55 on mobile, 130px apart
 *
 * Accessibility (no extra dependency): role="dialog" + aria-modal, Escape closes,
 * ArrowLeft/Right step, focus moves to the close button on open and returns to
 * the trigger on close, Tab cycles inside, body scroll locks, horizontal swipe.
 *
 * TODO(design): the Figma overlay shows no close affordance (the dark backdrop
 * click dismisses). A small "X" is added top-right for usability - remove it if
 * the studio prefers to match the frame literally.
 */

export interface LightboxImage extends MediaAsset {
  readonly alt?: string;
  readonly caption?: string;
}

interface PhotoLightboxProps {
  images: readonly LightboxImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function PhotoLightbox({ images, index, onClose, onNavigate }: PhotoLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const isOpen = index !== null;
  const count = images.length;
  const active = index !== null ? images[index] : undefined;

  const go = useCallback(
    (delta: number) => {
      if (index === null || count === 0) return;
      onNavigate((index + delta + count) % count);
    },
    [count, index, onNavigate],
  );

  useEffect(() => {
    if (!isOpen) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        go(1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        go(-1);
      } else if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('button, [href], [tabindex]:not([tabindex="-1"])');
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      previouslyFocused?.focus?.();
    };
  }, [go, isOpen, onClose]);

  if (!isOpen || !active) return null;

  const arrowButtonClassName =
    "flex items-center justify-center rounded-none bg-primary-systemcoal text-primary-systemfairy transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-systemfairy focus-visible:ring-offset-2 focus-visible:ring-offset-black h-[55px] w-[55px] lg:h-[70px] lg:w-[70px]";

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Photograph viewer"
      className="fixed inset-0 z-[100] flex animate-fade-in flex-col bg-black p-4 sm:p-6"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="flex w-full items-center justify-end">
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close photograph viewer"
          className="flex h-11 w-11 items-center justify-center text-primary-systemfairy transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-systemfairy"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      <div
        className="flex min-h-0 flex-1 items-center justify-center"
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) => {
          const start = touchStartX.current;
          const end = event.changedTouches[0]?.clientX ?? null;
          touchStartX.current = null;
          if (start === null || end === null) return;
          const delta = end - start;
          if (Math.abs(delta) < 50) return;
          go(delta < 0 ? 1 : -1);
        }}
      >
        <Image
          key={active.src}
          src={active.src}
          alt={active.alt ?? ""}
          width={active.width}
          height={active.height}
          sizes="(max-width: 1024px) 100vw, 90vw"
          className="max-h-[72vh] w-auto max-w-[92vw] object-contain"
        />
      </div>

      <div className="flex w-full items-center justify-center gap-[130px] pb-4 lg:pb-6">
        <button type="button" onClick={() => go(-1)} aria-label="Previous photograph" className={arrowButtonClassName}>
          <ChevronLeft strokeWidth={3} className="h-6 w-6" />
        </button>
        <button type="button" onClick={() => go(1)} aria-label="Next photograph" className={arrowButtonClassName}>
          <ChevronRight strokeWidth={3} className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

/**
 * State helper:
 *   const lightbox = usePhotoLightbox(count);
 *   <button onClick={() => lightbox.open(i)} />
 *   <PhotoLightbox images={images} index={lightbox.index}
 *     onClose={lightbox.close} onNavigate={lightbox.navigate} />
 */
export function usePhotoLightbox(count: number) {
  const [index, setIndex] = useState<number | null>(null);

  return {
    index,
    isOpen: index !== null,
    open: useCallback((next: number) => setIndex(next), []),
    close: useCallback(() => setIndex(null), []),
    navigate: useCallback(
      (next: number) => setIndex(count > 0 ? ((next % count) + count) % count : null),
      [count],
    ),
  };
}
