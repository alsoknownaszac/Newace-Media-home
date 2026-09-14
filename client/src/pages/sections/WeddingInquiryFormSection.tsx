import { CalendarIcon } from "lucide-react";
import * as React from "react";

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
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const textFields = [
  {
    id: "full-name",
    label: "FULL NAME",
    placeholder: "Your full name",
    required: true,
    type: "text",
  },
  {
    id: "email-address",
    label: "EMAIL ADDRESS",
    placeholder: "your@email.com",
    required: true,
    type: "email",
  },
  {
    id: "phone-number",
    label: "PHONE NUMBER",
    placeholder: "0000 000 000",
    required: true,
    type: "tel",
  },
  {
    id: "location",
    label: "LOCATION",
    placeholder: "Enter location",
    required: true,
    type: "text",
  },
] as const;

const formatDate = (date: Date | undefined) =>
  date
    ? date.toLocaleDateString(undefined, {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : "Pick date";

export const WeddingInquiryFormSection = (): JSX.Element => {
  const [eventDateOne, setEventDateOne] = React.useState<Date | undefined>();
  const [eventDateTwo, setEventDateTwo] = React.useState<Date | undefined>();

  const fullName = textFields[0];
  const email = textFields[1];
  const phone = textFields[2];
  const location = textFields[3];

  return (
    <section className="flex w-full flex-col items-stretch gap-10 bg-primary-systembeige px-6 py-16 sm:px-10 lg:flex-row lg:gap-20 lg:px-20 lg:py-[120px]">
      <div className="flex min-w-0 flex-1 flex-col gap-10 lg:max-w-[500px]">
        <header className="flex flex-col gap-6">
          <div className="flex flex-col items-start gap-4">
            <p className="[font-family:'Geist',Helvetica] text-xs font-semibold tracking-[2px] text-[#a69b8d]">
              START A CONVERSATION
            </p>
            <h2 className="max-w-[392px] font-web-display-XL text-[length:var(--web-display-XL-font-size)] font-[number:var(--web-display-XL-font-weight)] leading-[var(--web-display-XL-line-height)] tracking-[var(--web-display-XL-letter-spacing)] text-primary-systemcoal [font-style:var(--web-display-XL-font-style)]">
              Let Us Craft Your Visual Story
            </h2>
            <p className="[font-family:'Geist',Helvetica] text-base font-normal leading-[25.6px] text-[#77736d]">
              Please take a few moments to complete this form. Once submitted,
              you&apos;ll be able to choose a date and time that works best for
              your consultation call.
            </p>
          </div>
          <p className="[font-family:'Geist',Helvetica] text-sm font-normal text-[#a69b8d]">
            Secure your date today.
          </p>
        </header>
        <img
          className="min-h-[320px] w-full flex-1 object-cover"
          alt="Rectangle"
          src="/figmaAssets/rectangle-1-6.png"
        />
      </div>
      <form
        className="flex min-w-0 flex-1 flex-col gap-10 bg-primary-systemivory p-6 sm:p-10 lg:max-w-[700px] lg:p-12"
        onSubmit={(event) => event.preventDefault()}
      >
        <header className="flex flex-col gap-2">
          <h2 className="font-web-heading-h2 text-[length:var(--web-heading-h2-font-size)] font-[number:var(--web-heading-h2-font-weight)] leading-[var(--web-heading-h2-line-height)] tracking-[var(--web-heading-h2-letter-spacing)] text-primary-systemcoal [font-style:var(--web-heading-h2-font-style)]">
            Begin a Conversation
          </h2>
          <p className="font-web-caption text-[length:var(--web-caption-font-size)] font-[number:var(--web-caption-font-weight)] leading-[var(--web-caption-line-height)] tracking-[var(--web-caption-letter-spacing)] text-primary-systemmid-gray [font-style:var(--web-caption-font-style)]">
            We respond within 24 hours, or less.
          </p>
        </header>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <label
              className="flex items-center gap-1 font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemmid-gray [font-style:var(--web-label-s-font-style)]"
              htmlFor={fullName.id}
            >
              {fullName.label}
              <span className="[font-family:'Inter',Helvetica] text-sm font-semibold leading-[19.6px] text-editorial-accentsburgundy">
                *
              </span>
            </label>
            <Input
              id={fullName.id}
              name={fullName.id}
              required={fullName.required}
              type={fullName.type}
              placeholder={fullName.placeholder}
              className="h-[34px] rounded-none border-0 border-b border-[#a69b8d] bg-transparent px-0 py-0 font-web-body-XS text-[length:var(--web-body-XS-font-size)] font-[number:var(--web-body-XS-font-weight)] leading-[var(--web-body-XS-line-height)] tracking-[var(--web-body-XS-letter-spacing)] text-primary-systemcoal placeholder:text-primary-systemwarm-gray focus-visible:ring-0 [font-style:var(--web-body-XS-font-style)]"
            />
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {[email, phone].map((field) => (
              <div className="flex flex-col gap-2" key={field.id}>
                <label
                  className="flex items-center gap-1 font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemmid-gray [font-style:var(--web-label-s-font-style)]"
                  htmlFor={field.id}
                >
                  {field.label}
                  <span className="[font-family:'Inter',Helvetica] text-sm font-semibold leading-[19.6px] text-editorial-accentsburgundy">
                    *
                  </span>
                </label>
                <Input
                  id={field.id}
                  name={field.id}
                  required={field.required}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="h-[34px] rounded-none border-0 border-b border-[#a69b8d] bg-transparent px-0 py-0 font-web-body-XS text-[length:var(--web-body-XS-font-size)] font-[number:var(--web-body-XS-font-weight)] leading-[var(--web-body-XS-line-height)] tracking-[var(--web-body-XS-letter-spacing)] text-primary-systemcoal placeholder:text-primary-systemwarm-gray focus-visible:ring-0 [font-style:var(--web-body-XS-font-style)]"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-1 font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemmid-gray [font-style:var(--web-label-s-font-style)]">
              EVENT TYPE
              <span className="[font-family:'Inter',Helvetica] text-sm font-semibold leading-[19.6px] text-editorial-accentsburgundy">
                *
              </span>
            </label>
            <Select>
              <SelectTrigger
                aria-label="Event type"
                className="h-[34px] rounded-none border-0 border-b border-[#a69b8d] bg-transparent px-0 py-0 font-web-body-XS text-[length:var(--web-body-XS-font-size)] font-[number:var(--web-body-XS-font-weight)] leading-[var(--web-body-XS-line-height)] tracking-[var(--web-body-XS-letter-spacing)] text-primary-systemwarm-gray focus:ring-0 [font-style:var(--web-body-XS-font-style)] [&>svg]:mr-3 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-primary-systemcoal"
              >
                <SelectValue placeholder="Select options" />
              </SelectTrigger>
              <SelectContent />
            </Select>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-1 font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemmid-gray [font-style:var(--web-label-s-font-style)]">
                EVENT DATE 1
                <span className="[font-family:'Inter',Helvetica] text-sm font-semibold leading-[19.6px] text-editorial-accentsburgundy">
                  *
                </span>
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="ghost"
                    className="h-auto justify-between rounded-none border-0 border-b border-[#a69b8d] bg-transparent px-0 pb-3 pt-0 font-web-body-XS text-[length:var(--web-body-XS-font-size)] font-[number:var(--web-body-XS-font-weight)] leading-[var(--web-body-XS-line-height)] tracking-[var(--web-body-XS-letter-spacing)] text-primary-systemwarm-gray hover:bg-transparent hover:text-primary-systemwarm-gray [font-style:var(--web-body-XS-font-style)]"
                  >
                    {formatDate(eventDateOne)}
                    <CalendarIcon className="mr-3 h-4 w-4 text-primary-systemcoal" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={eventDateOne}
                    onSelect={setEventDateOne}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemmid-gray [font-style:var(--web-label-s-font-style)]">
                EVENT DATE 2
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="ghost"
                    className="h-auto justify-between rounded-none border-0 border-b border-[#a69b8d] bg-transparent px-0 pb-3 pt-0 font-web-body-XS text-[length:var(--web-body-XS-font-size)] font-[number:var(--web-body-XS-font-weight)] leading-[var(--web-body-XS-line-height)] tracking-[var(--web-body-XS-letter-spacing)] text-primary-systemwarm-gray hover:bg-transparent hover:text-primary-systemwarm-gray [font-style:var(--web-body-XS-font-style)]"
                  >
                    {formatDate(eventDateTwo)}
                    <CalendarIcon className="mr-3 h-4 w-4 text-primary-systemcoal" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={eventDateTwo}
                    onSelect={setEventDateTwo}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="flex items-center gap-1 font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemmid-gray [font-style:var(--web-label-s-font-style)]"
              htmlFor={location.id}
            >
              {location.label}
              <span className="[font-family:'Inter',Helvetica] text-sm font-semibold leading-[19.6px] text-editorial-accentsburgundy">
                *
              </span>
            </label>
            <Input
              id={location.id}
              name={location.id}
              required={location.required}
              type={location.type}
              placeholder={location.placeholder}
              className="h-[34px] rounded-none border-0 border-b border-[#a69b8d] bg-transparent px-0 py-0 font-web-body-XS text-[length:var(--web-body-XS-font-size)] font-[number:var(--web-body-XS-font-weight)] leading-[var(--web-body-XS-line-height)] tracking-[var(--web-body-XS-letter-spacing)] text-primary-systemcoal placeholder:text-primary-systemwarm-gray focus-visible:ring-0 [font-style:var(--web-body-XS-font-style)]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-1 font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemmid-gray [font-style:var(--web-label-s-font-style)]">
              HOW DID YOU HEAR ABOUT US?
              <span className="[font-family:'Inter',Helvetica] text-sm font-semibold leading-[19.6px] text-editorial-accentsburgundy">
                *
              </span>
            </label>
            <Select>
              <SelectTrigger
                aria-label="How did you hear about us?"
                className="h-[34px] rounded-none border-0 border-b border-[#a69b8d] bg-transparent px-0 py-0 font-web-body-XS text-[length:var(--web-body-XS-font-size)] font-[number:var(--web-body-XS-font-weight)] leading-[var(--web-body-XS-line-height)] tracking-[var(--web-body-XS-letter-spacing)] text-primary-systemwarm-gray focus:ring-0 [font-style:var(--web-body-XS-font-style)] [&>svg]:mr-3 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-primary-systemcoal"
              >
                <SelectValue placeholder="Write here" />
              </SelectTrigger>
              <SelectContent />
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemmid-gray [font-style:var(--web-label-s-font-style)]"
              htmlFor="message"
            >
              YOUR MESSAGE
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us more about vision or project"
              className="min-h-[80px] resize-none rounded-none border-0 border-b border-[#a69b8d] bg-transparent px-0 py-0 font-web-body-XS text-[length:var(--web-body-XS-font-size)] font-[number:var(--web-body-XS-font-weight)] leading-[var(--web-body-XS-line-height)] tracking-[var(--web-body-XS-letter-spacing)] text-primary-systemcoal placeholder:text-primary-systemwarm-gray focus-visible:ring-0 [font-style:var(--web-body-XS-font-style)]"
            />
          </div>
        </div>
        <Button
          type="submit"
          className="h-11 w-full rounded-none bg-primary-systemcoal px-8 py-4 font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemivory hover:bg-primary-systemcoal [font-style:var(--web-label-s-font-style)]"
        >
          SCHEDULE A CONSULTATION
        </Button>
      </form>
    </section>
  );
};
