import { defineAction } from "astro:actions";
import { z } from "astro/zod";

export const server = {
  sendEmail: defineAction({
    accept: "form",
    input: z.object({
      email: z
        .string("Email is required.")
        .max(1000, { error: "Email must be shorter than 1000 characters." }),
      message: z.string("Message is required.").max(20000, {
        error: "Message must be shorter than 20000 characters.",
      }),
      name: z
        .string("Name is required.")
        .max(1000, { error: "Name must be shorter than 1000 characters." }),
      subject: z
        .string("Subject is required.")
        .max(1000, { error: "Subject must be shorter than 1000 characters." }),
    }),
    handler: async ({ email, message, name, subject }) => {
      console.log("HANDLER", email, name, message, subject); //JTM
    },
  }),
};
