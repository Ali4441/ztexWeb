const { z } = require("zod");

const logValidation = z.object({

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
module.exports = logValidation;