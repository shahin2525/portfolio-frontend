import { z } from "zod";

export const contactValidationSchema = z.object({
  name: z.string({ required_error: "name is required" }),
  email: z
    .string({ required_error: "email is required" })
    .email("invalid email address"),
  message: z.string({ required_error: "message is required" }),
});
