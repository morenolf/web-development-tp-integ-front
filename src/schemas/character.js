import { z } from "zod";

export const registerSchema = z.object({
    name: z.string({
        required_error: "Character name is required",
    }),
    head: z.string({
        message: "Please select cloth for your head!",
    }),
    body: z.string({
      message: "Please select cloth for your body!",
    }),
    legs: z.string({
      message: "Please select cloth for your legs!",
    }),
    feet: z.string({
      message: "Please select cloth for your feet!",
    }),
  });