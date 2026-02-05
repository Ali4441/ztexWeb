const { z } = require("zod");

const userZodSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(50, { message: "Name cannot exceed 50 characters" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email format" }),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(100, { message: "Password cannot exceed 100 characters" }),
});

module.exports = userZodSchema;

