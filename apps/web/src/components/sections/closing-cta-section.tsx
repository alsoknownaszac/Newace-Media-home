import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { closingCta } from "@/content/home";

/**
 * Full-bleed closing CTA - Figma node 66:152 "hero-section".
 * All-white heading + Cormorant summary + beige "capture my moments" button.
 */
export function ClosingCtaSection() {
  return (
    <section className="relative grid h-[520px] w-full overflow-hidden lg:h-[700px]">
      <Image
        src={closingCta.image.src}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-6 text-center lg:gap-[58px]">
        <div className="flex flex-col items-center gap-6 lg:gap-[29px]">
          <h2 className="max-w-[581px] font-display text-[32px] font-normal not-italic leading-none tracking-[-0.32px] text-white lg:text-[64px] lg:leading-[64px] lg:tracking-[-0.64px]">
            {closingCta.heading}
          </h2>
          <p className="max-w-[635px] font-display text-[18px] font-normal not-italic leading-[1.3] text-white lg:text-[24px] lg:leading-[31.2px]">
            {closingCta.summary}
          </p>
        </div>
        <Button
          asChild
          className="h-11 rounded-none bg-[#e7e3dc] px-8 font-body text-xs font-medium text-primary-systemcoal hover:bg-primary-systemivory"
        >
          <Link href={closingCta.action.href}>{closingCta.action.label}</Link>
        </Button>
      </div>
    </section>
  );
}
