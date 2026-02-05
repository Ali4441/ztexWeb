const { z } = require("zod");

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(50, { message: "Name cannot exceed 50 characters" }),

  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(100, { message: "Email is too long" }),



  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(500, { message: "Message cannot exceed 500 characters" }),
});

module.exports = contactSchema;
