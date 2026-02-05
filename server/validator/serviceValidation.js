const { z } = require("zod");

const serviceZodSchema = z.object({
  service: z
    .string()
    .min(1, "Service name is required")
    .trim(),

  description: z
    .string()
    .min(1, "Description is required")
    .trim(),

  price: z
    .string()
    .min(1, "Price is required"),

  provider: z
    .string()
    .min(1, "Provider name is required")
    .trim(),

  image: z
    .string()
    .url("Image must be a valid URL")
});
module.exports = serviceZodSchema;