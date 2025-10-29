import { integer,  jsonb, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const bookOutline = pgTable("book_outline", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: varchar("user_id", { length: 255 }).notNull(), 
  bookTitle: varchar("book_title", { length: 255 }).notNull(),
  topic: varchar("topic", { length: 255 }).notNull(),
  chaptersCount: integer("chapters_count").notNull(),
  writingStyle: varchar("writing_style", { length: 100 }).notNull(),
  review_outline: jsonb("review_outline").notNull(), 
  createdAt: timestamp("created_at").defaultNow(),
});