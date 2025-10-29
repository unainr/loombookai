import { z } from "zod"

export const bookOutlineSchema = z.object({
 bookTitle: z.string().min(3, "Book title must be at least 3 characters"),
  topic: z.string().min(3, "Topic is required"),
 chaptersCount: z.number().min(1, "Must have at least one chapter"),
  writingStyle: z.string().nonempty("Writing style is required"),
})