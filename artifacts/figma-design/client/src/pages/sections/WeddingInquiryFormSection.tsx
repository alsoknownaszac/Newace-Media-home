import { CalendarIcon, CheckCircle2 } from "lucide-react";
import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

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

const inquirySchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(5, "Phone number is required"),
  location: z.string().min(2, "Location is required"),
  eventType: z.string().min(1, "Event type is required"),
  eventDateOne: z.date({ required_error: "First event date is required" }),
  eventDateTwo: z.date().optional(),
  howDidYouHear: z.string().min(1, "Please tell us how you heard about us"),
  message: z.string().optional(),
});

type InquiryFormValues = z.infer<typeof inquirySchema>;

const formatDate = (date: Date | undefined) =>
  date
    ? date.toLocaleDateString(undefined, {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : "Pick date";

export const WeddingInquiryFormSection = (): JSX.Element => {
  const [isSuccess, setIsSuccess] = React.useState(false);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      eventType: "",
      howDidYouHear: "",
      message: "",
    },
  });

  const onSubmit = (data: InquiryFormValues) => {
    // Simulate API call
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setIsSuccess(true);
        reset();
        resolve();
      }, 1000);
    });
  };

  return (
    <section id="contact" className="flex w-full flex-col items-stretch gap-10 bg-primary-systembeige px-6 py-16 sm:px-10 lg:flex-row lg:gap-20 lg:px-20 lg:py-[120px]">
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
          src="/figmaAssets/rectangle-1-6.webp"
          srcSet="/figmaAssets/rectangle-1-6-960.webp 960w, /figmaAssets/rectangle-1-6.webp 1920w"
          sizes="(max-width: 1024px) 100vw, 500px"
          loading="lazy"
          decoding="async"
        />
      </div>
      <form
        className="flex min-w-0 flex-1 flex-col gap-10 bg-primary-systemivory p-6 sm:p-10 lg:max-w-[700px] lg:p-12 relative"
        onSubmit={handleSubmit(onSubmit)}
        data-testid="inquiry-form"
      >
        {isSuccess && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 bg-primary-systemivory p-10 text-center animate-fade-in">
            <CheckCircle2 className="h-16 w-16 text-primary-systemcoal" />
            <h3 className="font-web-heading-h2 text-[length:var(--web-heading-h2-font-size)] font-[number:var(--web-heading-h2-font-weight)] leading-[var(--web-heading-h2-line-height)] tracking-[var(--web-heading-h2-letter-spacing)] text-primary-systemcoal [font-style:var(--web-heading-h2-font-style)]">
              Thank You
            </h3>
            <p className="font-web-body-m text-[length:var(--web-body-m-font-size)] text-primary-systemmid-gray max-w-[400px]">
              Your inquiry has been received. We will be in touch within 24 hours to schedule your consultation.
            </p>
            <Button
              type="button"
              onClick={() => setIsSuccess(false)}
              className="mt-4 h-11 rounded-none bg-primary-systemcoal px-8 py-4 font-web-label-s text-[length:var(--web-label-s-font-size)] text-primary-systemivory hover:bg-primary-systemcoal/90"
            >
              SEND ANOTHER INQUIRY
            </Button>
          </div>
        )}
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
              htmlFor="fullName"
            >
              FULL NAME
              <span className="[font-family:'Inter',Helvetica] text-sm font-semibold leading-[19.6px] text-editorial-accentsburgundy">
                *
              </span>
            </label>
            <Input
              id="fullName"
              type="text"
              placeholder="Your full name"
              {...register("fullName")}
              className={`h-[34px] rounded-none border-0 border-b ${errors.fullName ? 'border-editorial-accentsburgundy' : 'border-[#a69b8d]'} bg-transparent px-0 py-0 font-web-body-XS text-[length:var(--web-body-XS-font-size)] font-[number:var(--web-body-XS-font-weight)] leading-[var(--web-body-XS-line-height)] tracking-[var(--web-body-XS-letter-spacing)] text-primary-systemcoal placeholder:text-primary-systemwarm-gray focus-visible:ring-0 focus-visible:border-primary-systemcoal transition-colors [font-style:var(--web-body-XS-font-style)]`}
            />
            {errors.fullName && <p className="text-xs text-editorial-accentsburgundy mt-1">{errors.fullName.message}</p>}
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label
                className="flex items-center gap-1 font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemmid-gray [font-style:var(--web-label-s-font-style)]"
                htmlFor="email"
              >
                EMAIL ADDRESS
                <span className="[font-family:'Inter',Helvetica] text-sm font-semibold leading-[19.6px] text-editorial-accentsburgundy">
                  *
                </span>
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                {...register("email")}
                className={`h-[34px] rounded-none border-0 border-b ${errors.email ? 'border-editorial-accentsburgundy' : 'border-[#a69b8d]'} bg-transparent px-0 py-0 font-web-body-XS text-[length:var(--web-body-XS-font-size)] font-[number:var(--web-body-XS-font-weight)] leading-[var(--web-body-XS-line-height)] tracking-[var(--web-body-XS-letter-spacing)] text-primary-systemcoal placeholder:text-primary-systemwarm-gray focus-visible:ring-0 focus-visible:border-primary-systemcoal transition-colors [font-style:var(--web-body-XS-font-style)]`}
              />
              {errors.email && <p className="text-xs text-editorial-accentsburgundy mt-1">{errors.email.message}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="flex items-center gap-1 font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemmid-gray [font-style:var(--web-label-s-font-style)]"
                htmlFor="phone"
              >
                PHONE NUMBER
                <span className="[font-family:'Inter',Helvetica] text-sm font-semibold leading-[19.6px] text-editorial-accentsburgundy">
                  *
                </span>
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="0000 000 000"
                {...register("phone")}
                className={`h-[34px] rounded-none border-0 border-b ${errors.phone ? 'border-editorial-accentsburgundy' : 'border-[#a69b8d]'} bg-transparent px-0 py-0 font-web-body-XS text-[length:var(--web-body-XS-font-size)] font-[number:var(--web-body-XS-font-weight)] leading-[var(--web-body-XS-line-height)] tracking-[var(--web-body-XS-letter-spacing)] text-primary-systemcoal placeholder:text-primary-systemwarm-gray focus-visible:ring-0 focus-visible:border-primary-systemcoal transition-colors [font-style:var(--web-body-XS-font-style)]`}
              />
              {errors.phone && <p className="text-xs text-editorial-accentsburgundy mt-1">{errors.phone.message}</p>}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-1 font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemmid-gray [font-style:var(--web-label-s-font-style)]">
              EVENT TYPE
              <span className="[font-family:'Inter',Helvetica] text-sm font-semibold leading-[19.6px] text-editorial-accentsburgundy">
                *
              </span>
            </label>
            <Controller
              name="eventType"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger
                    aria-label="Event type"
                    className={`h-[34px] rounded-none border-0 border-b ${errors.eventType ? 'border-editorial-accentsburgundy' : 'border-[#a69b8d]'} bg-transparent px-0 py-0 font-web-body-XS text-[length:var(--web-body-XS-font-size)] font-[number:var(--web-body-XS-font-weight)] leading-[var(--web-body-XS-line-height)] tracking-[var(--web-body-XS-letter-spacing)] text-primary-systemcoal focus:ring-0 focus:border-primary-systemcoal transition-colors [font-style:var(--web-body-XS-font-style)] [&>svg]:mr-3 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-primary-systemcoal`}
                  >
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Wedding">Wedding</SelectItem>
                    <SelectItem value="Engagement">Engagement</SelectItem>
                    <SelectItem value="Portrait">Portrait</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.eventType && <p className="text-xs text-editorial-accentsburgundy mt-1">{errors.eventType.message}</p>}
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-1 font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemmid-gray [font-style:var(--web-label-s-font-style)]">
                EVENT DATE 1
                <span className="[font-family:'Inter',Helvetica] text-sm font-semibold leading-[19.6px] text-editorial-accentsburgundy">
                  *
                </span>
              </label>
              <Controller
                name="eventDateOne"
                control={control}
                render={({ field }) => (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        type="button"
                        variant="ghost"
                        className={`h-auto justify-between rounded-none border-0 border-b ${errors.eventDateOne ? 'border-editorial-accentsburgundy' : 'border-[#a69b8d]'} bg-transparent px-0 pb-3 pt-0 font-web-body-XS text-[length:var(--web-body-XS-font-size)] font-[number:var(--web-body-XS-font-weight)] leading-[var(--web-body-XS-line-height)] tracking-[var(--web-body-XS-letter-spacing)] ${field.value ? 'text-primary-systemcoal' : 'text-primary-systemwarm-gray'} hover:bg-transparent hover:text-primary-systemcoal focus-visible:outline-none focus-visible:border-primary-systemcoal transition-colors [font-style:var(--web-body-XS-font-style)]`}
                      >
                        {formatDate(field.value)}
                        <CalendarIcon className="mr-3 h-4 w-4 text-primary-systemcoal" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                      />
                    </PopoverContent>
                  </Popover>
                )}
              />
              {errors.eventDateOne && <p className="text-xs text-editorial-accentsburgundy mt-1">{errors.eventDateOne.message}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemmid-gray [font-style:var(--web-label-s-font-style)]">
                EVENT DATE 2
              </label>
              <Controller
                name="eventDateTwo"
                control={control}
                render={({ field }) => (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        type="button"
                        variant="ghost"
                        className={`h-auto justify-between rounded-none border-0 border-b border-[#a69b8d] bg-transparent px-0 pb-3 pt-0 font-web-body-XS text-[length:var(--web-body-XS-font-size)] font-[number:var(--web-body-XS-font-weight)] leading-[var(--web-body-XS-line-height)] tracking-[var(--web-body-XS-letter-spacing)] ${field.value ? 'text-primary-systemcoal' : 'text-primary-systemwarm-gray'} hover:bg-transparent hover:text-primary-systemcoal focus-visible:outline-none focus-visible:border-primary-systemcoal transition-colors [font-style:var(--web-body-XS-font-style)]`}
                      >
                        {formatDate(field.value)}
                        <CalendarIcon className="mr-3 h-4 w-4 text-primary-systemcoal" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                      />
                    </PopoverContent>
                  </Popover>
                )}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="flex items-center gap-1 font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemmid-gray [font-style:var(--web-label-s-font-style)]"
              htmlFor="location"
            >
              LOCATION
              <span className="[font-family:'Inter',Helvetica] text-sm font-semibold leading-[19.6px] text-editorial-accentsburgundy">
                *
              </span>
            </label>
            <Input
              id="location"
              type="text"
              placeholder="Enter location"
              {...register("location")}
              className={`h-[34px] rounded-none border-0 border-b ${errors.location ? 'border-editorial-accentsburgundy' : 'border-[#a69b8d]'} bg-transparent px-0 py-0 font-web-body-XS text-[length:var(--web-body-XS-font-size)] font-[number:var(--web-body-XS-font-weight)] leading-[var(--web-body-XS-line-height)] tracking-[var(--web-body-XS-letter-spacing)] text-primary-systemcoal placeholder:text-primary-systemwarm-gray focus-visible:ring-0 focus-visible:border-primary-systemcoal transition-colors [font-style:var(--web-body-XS-font-style)]`}
            />
            {errors.location && <p className="text-xs text-editorial-accentsburgundy mt-1">{errors.location.message}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-1 font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemmid-gray [font-style:var(--web-label-s-font-style)]">
              HOW DID YOU HEAR ABOUT US?
              <span className="[font-family:'Inter',Helvetica] text-sm font-semibold leading-[19.6px] text-editorial-accentsburgundy">
                *
              </span>
            </label>
            <Controller
              name="howDidYouHear"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger
                    aria-label="How did you hear about us?"
                    className={`h-[34px] rounded-none border-0 border-b ${errors.howDidYouHear ? 'border-editorial-accentsburgundy' : 'border-[#a69b8d]'} bg-transparent px-0 py-0 font-web-body-XS text-[length:var(--web-body-XS-font-size)] font-[number:var(--web-body-XS-font-weight)] leading-[var(--web-body-XS-line-height)] tracking-[var(--web-body-XS-letter-spacing)] text-primary-systemcoal focus:ring-0 focus:border-primary-systemcoal transition-colors [font-style:var(--web-body-XS-font-style)] [&>svg]:mr-3 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-primary-systemcoal`}
                  >
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Instagram">Instagram</SelectItem>
                    <SelectItem value="Facebook">Facebook</SelectItem>
                    <SelectItem value="Word of Mouth">Word of Mouth</SelectItem>
                    <SelectItem value="Google">Google Search</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.howDidYouHear && <p className="text-xs text-editorial-accentsburgundy mt-1">{errors.howDidYouHear.message}</p>}
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
              placeholder="Tell us more about vision or project"
              {...register("message")}
              className="min-h-[80px] resize-none rounded-none border-0 border-b border-[#a69b8d] bg-transparent px-0 py-0 font-web-body-XS text-[length:var(--web-body-XS-font-size)] font-[number:var(--web-body-XS-font-weight)] leading-[var(--web-body-XS-line-height)] tracking-[var(--web-body-XS-letter-spacing)] text-primary-systemcoal placeholder:text-primary-systemwarm-gray focus-visible:ring-0 focus-visible:border-primary-systemcoal transition-colors [font-style:var(--web-body-XS-font-style)]"
            />
          </div>
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          data-testid="button-submit-inquiry"
          className="h-11 w-full rounded-none bg-primary-systemcoal px-8 py-4 font-web-label-s text-[length:var(--web-label-s-font-size)] font-[number:var(--web-label-s-font-weight)] leading-[var(--web-label-s-line-height)] tracking-[var(--web-label-s-letter-spacing)] text-primary-systemivory transition-colors hover:bg-primary-systemcoal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-70 [font-style:var(--web-label-s-font-style)]"
        >
          {isSubmitting ? "SCHEDULING..." : "SCHEDULE A CONSULTATION"}
        </Button>
      </form>
    </section>
  );
};
