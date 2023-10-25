import { z } from "zod";

export const registerSchema = z.object({
    name: z.string({
        required_error: "Character name is required",
    }),
  });