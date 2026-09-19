"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Controller, useForm, type Control } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  contactFormCopy,
  eventTypes,
  referralSources,
} from "@/content/contact";
import {
  inquirySchema,
  type InquiryInput,
  type InquiryFormValues,
  type InquiryPayload,
} from "@/lib/inquiries";
import { cn } from "@/lib/utils";

/**
 * Inquiry form.
 *
 * The Vite implementation validated the form and then faked the submission with
 * a 1-second setTimeout, so nothing was ever sent anywhere. This posts to
 * /api/inquiries, which validates the same Zod schema server-side and delivers
 * the inquiry (Resend when configured - see src/lib/inquiries.ts).
 */
const labelClassName =
  "flex items-center gap-1 font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemmid-gray [font-style:var(--web-label-s-font-style)]";

const fieldClassName =
  "h-[34px] rounded-none border-0 border-b bg-transparent px-0 py-0 font-web-body-XS text-[length:var(--web-body-XS-font-size)] font-[number:var(--web-body-XS-font-weight)] leading-[var(--web-body-XS-line-height)] tracking-[var(--web-body-XS-letter-spacing)] text-primary-systemcoal placeholder:text-primary-systemwarm-gray transition-colors focus-visible:ring-0 focus-visible:border-primary-systemcoal [font-style:var(--web-body-XS-font-style)]";

const triggerClassName = `${fieldClassName} [&>svg]:mr-3 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-primary-systemcoal`;

function RequiredMark() {
  return (
    <span
      aria-hidden="true"
      className="font-['Inter',Helvetica] text-sm font-semibold leading-[19.6px] text-editorial-accentsburgundy"
    >
      {contactFormCopy.requiredMark}
    </span>
  );
}

function formatDate(date: Date | undefined): string {
  return date
    ? date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : contactFormCopy.placeholders.date;
}

export function InquiryForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<InquiryFormValues, unknown, InquiryInput>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      eventType: "",
      howDidYouHear: "",
      message: "",
      company: "",
    },
  });

  const onSubmit = async (values: InquiryInput) => {
    setSubmitError(null);

    const payload: InquiryPayload = {
      fullName: values.fullName,
      email: values.email,
      phone: values.phone,
      location: values.location,
      eventType: values.eventType,
      eventDateOne: values.eventDateOne.toISOString(),
      eventDateTwo: values.eventDateTwo?.toISOString(),
      howDidYouHear: values.howDidYouHear,
      message: values.message,
      company: values.company,
    };

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error("[inquiry-form] submission failed", error);
      setSubmitError(contactFormCopy.error);
    }
  };

  return (
    <form
      className="relative flex min-w-0 flex-1 flex-col gap-10 bg-primary-systemivory p-6 sm:p-10 lg:max-w-[760px] lg:p-14"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      {isSuccess && (
        <div className="absolute inset-0 z-10 flex animate-fade-in flex-col items-center justify-center gap-6 bg-primary-systemivory p-10 text-center">
          <CheckCircle2
            aria-hidden="true"
            className="h-16 w-16 text-primary-systemcoal"
          />
          <h3 className="font-web-heading-h2 text-[length:var(--web-heading-h2-font-size)] font-[number:var(--web-heading-h2-font-weight)] leading-[var(--web-heading-h2-line-height)] tracking-[var(--web-heading-h2-letter-spacing)] text-primary-systemcoal [font-style:var(--web-heading-h2-font-style)]">
            {contactFormCopy.success.heading}
          </h3>
          <p className="max-w-[400px] font-web-body-m text-[length:var(--web-body-m-font-size)] text-primary-systemmid-gray">
            {contactFormCopy.success.body}
          </p>
          <Button
            type="button"
            onClick={() => setIsSuccess(false)}
            className="mt-4 h-11 rounded-none bg-primary-systemcoal px-8 py-4 font-web-label-s text-[length:var(--web-label-s-font-size)] text-primary-systemivory hover:bg-primary-systemcoal/90"
          >
            {contactFormCopy.success.action}
          </Button>
        </div>
      )}

      <header className="flex flex-col gap-2">
        <h2 className="font-web-heading-h2 text-[length:var(--web-heading-h2-font-size)] font-[number:var(--web-heading-h2-font-weight)] leading-[var(--web-heading-h2-line-height)] tracking-[var(--web-heading-h2-letter-spacing)] text-primary-systemcoal [font-style:var(--web-heading-h2-font-style)]">
          {contactFormCopy.heading}
        </h2>
        <p className="font-web-caption text-[length:var(--web-caption-font-size)] font-[number:var(--web-caption-font-weight)] leading-[var(--web-caption-line-height)] tracking-[var(--web-caption-letter-spacing)] text-primary-systemmid-gray [font-style:var(--web-caption-font-style)]">
          {contactFormCopy.note}
        </p>
      </header>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <label className={labelClassName} htmlFor="fullName">
            {contactFormCopy.labels.fullName}
            <RequiredMark />
          </label>
          <Input
            id="fullName"
            type="text"
            autoComplete="name"
            placeholder={contactFormCopy.placeholders.fullName}
            aria-invalid={Boolean(errors.fullName)}
            {...register("fullName")}
            className={cn(
              fieldClassName,
              errors.fullName
                ? "border-editorial-accentsburgundy"
                : "border-[#a69b8d]",
            )}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-editorial-accentsburgundy">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className={labelClassName} htmlFor="email">
              {contactFormCopy.labels.email}
              <RequiredMark />
            </label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              placeholder={contactFormCopy.placeholders.email}
              aria-invalid={Boolean(errors.email)}
              {...register("email")}
              className={cn(
                fieldClassName,
                errors.email
                  ? "border-editorial-accentsburgundy"
                  : "border-[#a69b8d]",
              )}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-editorial-accentsburgundy">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className={labelClassName} htmlFor="phone">
              {contactFormCopy.labels.phone}
              <RequiredMark />
            </label>
            <Input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder={contactFormCopy.placeholders.phone}
              aria-invalid={Boolean(errors.phone)}
              {...register("phone")}
              className={cn(
                fieldClassName,
                errors.phone
                  ? "border-editorial-accentsburgundy"
                  : "border-[#a69b8d]",
              )}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-editorial-accentsburgundy">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClassName} id="eventType-label">
            {contactFormCopy.labels.eventType}
            <RequiredMark />
          </label>
          <Controller
            name="eventType"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger
                  aria-labelledby="eventType-label"
                  aria-invalid={Boolean(errors.eventType)}
                  className={cn(
                    triggerClassName,
                    errors.eventType
                      ? "border-editorial-accentsburgundy"
                      : "border-[#a69b8d]",
                  )}
                >
                  <SelectValue
                    placeholder={contactFormCopy.placeholders.select}
                  />
                </SelectTrigger>
                <SelectContent>
                  {eventTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.eventType && (
            <p className="mt-1 text-xs text-editorial-accentsburgundy">
              {errors.eventType.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <DatePickerField
            name="eventDateOne"
            label={contactFormCopy.labels.eventDateOne}
            control={control}
            required
            hasError={Boolean(errors.eventDateOne)}
            errorMessage={errors.eventDateOne?.message}
          />
          <DatePickerField
            name="eventDateTwo"
            label={contactFormCopy.labels.eventDateTwo}
            control={control}
            hasError={Boolean(errors.eventDateTwo)}
            errorMessage={errors.eventDateTwo?.message}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClassName} htmlFor="location">
            {contactFormCopy.labels.location}
            <RequiredMark />
          </label>
          <Input
            id="location"
            type="text"
            autoComplete="address-level2"
            placeholder={contactFormCopy.placeholders.location}
            aria-invalid={Boolean(errors.location)}
            {...register("location")}
            className={cn(
              fieldClassName,
              errors.location
                ? "border-editorial-accentsburgundy"
                : "border-[#a69b8d]",
            )}
          />
          {errors.location && (
            <p className="mt-1 text-xs text-editorial-accentsburgundy">
              {errors.location.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClassName} id="howDidYouHear-label">
            {contactFormCopy.labels.howDidYouHear}
            <RequiredMark />
          </label>
          <Controller
            name="howDidYouHear"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger
                  aria-labelledby="howDidYouHear-label"
                  aria-invalid={Boolean(errors.howDidYouHear)}
                  className={cn(
                    triggerClassName,
                    errors.howDidYouHear
                      ? "border-editorial-accentsburgundy"
                      : "border-[#a69b8d]",
                  )}
                >
                  <SelectValue
                    placeholder={contactFormCopy.placeholders.select}
                  />
                </SelectTrigger>
                <SelectContent>
                  {referralSources.map((source) => (
                    <SelectItem key={source} value={source}>
                      {source}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.howDidYouHear && (
            <p className="mt-1 text-xs text-editorial-accentsburgundy">
              {errors.howDidYouHear.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClassName} htmlFor="message">
            {contactFormCopy.labels.message}
          </label>
          <Textarea
            id="message"
            rows={3}
            placeholder={contactFormCopy.placeholders.message}
            {...register("message")}
            className="min-h-[80px] resize-none rounded-none border-0 border-b border-[#a69b8d] bg-transparent px-0 py-0 font-web-body-XS text-[length:var(--web-body-XS-font-size)] font-[number:var(--web-body-XS-font-weight)] leading-[var(--web-body-XS-line-height)] tracking-[var(--web-body-XS-letter-spacing)] text-primary-systemcoal placeholder:text-primary-systemwarm-gray transition-colors focus-visible:ring-0 focus-visible:border-primary-systemcoal [font-style:var(--web-body-XS-font-style)]"
          />
        </div>

        {/* Honeypot: hidden from people, filled in by bots. The API drops those. */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("company")}
          />
        </div>
      </div>

      {submitError && (
        <p role="alert" className="text-sm text-editorial-accentsburgundy">
          {submitError}
        </p>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="h-11 w-full uppercase rounded-none bg-primary-systemcoal px-8 py-4 font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemivory transition-colors hover:bg-primary-systemcoal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-70 [font-style:var(--web-label-s-font-style)]"
      >
        {isSubmitting ? contactFormCopy.submitting : contactFormCopy.submit}
      </Button>
    </form>
  );
}

/**
 * Date field: a ghost button that opens the shadcn calendar in a popover.
 * Extracted because the design repeats it for EVENT DATE 1 and EVENT DATE 2.
 */
function DatePickerField({
  name,
  label,
  control,
  hasError,
  errorMessage,
  required = false,
}: {
  name: "eventDateOne" | "eventDateTwo";
  label: string;
  control: Control<InquiryFormValues, unknown, InquiryInput>;
  hasError: boolean;
  errorMessage?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className={labelClassName} id={`${name}-label`}>
        {label}
        {required && <RequiredMark />}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                aria-labelledby={`${name}-label`}
                className={cn(
                  "h-auto justify-between rounded-none border-0 border-b bg-transparent px-0 pb-3 pt-0 font-web-body-XS text-[length:var(--web-body-XS-font-size)] font-[number:var(--web-body-XS-font-weight)] leading-[var(--web-body-XS-line-height)] tracking-[var(--web-body-XS-letter-spacing)] transition-colors hover:bg-transparent hover:text-primary-systemcoal focus-visible:border-primary-systemcoal focus-visible:outline-none [font-style:var(--web-body-XS-font-style)]",
                  field.value
                    ? "text-primary-systemcoal"
                    : "text-primary-systemwarm-gray",
                  hasError
                    ? "border-editorial-accentsburgundy"
                    : "border-[#a69b8d]",
                )}
              >
                {formatDate(field.value as Date | undefined)}
                <CalendarIcon
                  aria-hidden="true"
                  className="mr-3 h-4 w-4 text-primary-systemcoal"
                />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value as Date | undefined}
                onSelect={field.onChange}
              />
            </PopoverContent>
          </Popover>
        )}
      />
      {hasError && errorMessage && (
        <p className="mt-1 text-xs text-editorial-accentsburgundy">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
