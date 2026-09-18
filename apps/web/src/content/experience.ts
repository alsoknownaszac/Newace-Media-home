/**
 * "The Newace Experience" - the three-step process block.
 * Copy is verbatim from the Figma frame (the component was previously named
 * CustomWeddingPackagesSection, which did not describe what it renders).
 */
export interface ExperienceStep {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

export const experienceIntro = {
  eyebrow: "The Newace experience",
  heading: "Uniquely Custom. Entirely Effortless.",
  summary:
    "From our first conversation to the final delivery of your images, every detail is considered with intention, creating a seamless, elevated experience from beginning to end.",
} as const;

export const experienceSteps: readonly ExperienceStep[] = [
  {
    number: "01",
    title: "Understand & Prepare",
    description:
      "Your story comes first. We take the time to get to know you, understand your vision and the character of your celebration. With thoughtful preparation, we make sure we're ready to capture what matters while leaving room for the unexpected.",
  },
  {
    number: "02",
    title: "Observe & Capture",
    description:
      "We let the moments unfold naturally. With patience, careful observation and gentle direction, we document the day as it happens, from refined portraits and meaningful details to the laughter, emotion and fleeting connections in between.",
  },
  {
    number: "03",
    title: "Preserve the feeling",
    description:
      "We bring everything together to create a timeless visual story that feels authentic to you. Years from now, we want your photographs to do more than show you how the day looked, we want them to take you back to how it felt.",
  },
];
