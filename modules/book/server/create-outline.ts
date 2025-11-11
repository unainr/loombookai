"use server";

import { groq } from "@ai-sdk/groq";
import { generateText } from "ai";
import { bookOutline } from "@/drizzle/schema";
import { db } from "@/drizzle/db";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { desc, eq } from "drizzle-orm";
import { UpdateProps } from "@/types";
import { ImageUpload } from "./image-upload";
import { updateTag } from "next/cache";

interface Props {
	bookTitle: string;
	topic: string;
	chaptersCount: number;
	writingStyle: string;
	review_outline?: object;
	coverImageUrl?: File;
}

// create outline for a book
export const createOutline = async ({
	bookTitle,
	topic,
	chaptersCount,
	writingStyle,
	review_outline,
	coverImageUrl,
}: Props) => {
	try {
		const session = await auth.api.getSession({
			headers: await headers(),
		});

		if (!session) {
			throw new Error("Not authenticated");
		}

		const userId = session.user.id;
		const prompt = `
You are a professional book writer. Create a **complete flash book** with full content for each chapter.

Book Title: ${bookTitle}
Topic: ${topic}
Number of Chapters: ${chaptersCount}
Writing Style: ${writingStyle}

### Output Format Rules
- Respond ONLY in **valid JSON**
- No markdown, no notes, no explanation outside the JSON

### JSON Structure
{
  "bookTitle": string,
  "overallSummary": string,
  "totalWords": number,
  "chapters": [
    {
      "number": number,
      "title": string,
      "summary": string,
      "content": string,
      "wordCount": number
    }
  ]
}

### Requirements
- Generate exactly ${chaptersCount} chapters
- Each chapter must have:
  - A short creative title
  - A 1-2 sentence summary
  - Actual word count for that chapter
- Write complete, engaging prose for each chapter
- Ensure smooth transitions between chapters
- Maintain consistent tone reflecting **${writingStyle}** style throughout
- Make the content substantive and valuable

### Content Guidelines
- Write naturally and engagingly
- Include concrete examples, stories, or insights where appropriate
- Each chapter should feel complete while flowing into the next
- Opening chapter should hook the reader
- Final chapter should provide satisfying closure

Return only the JSON with complete chapter content.
`;

		const { text } = await generateText({
			model: groq("openai/gpt-oss-120b"),
			prompt,
		});
		let imageUrl: string | null = null;
		if (coverImageUrl) {
			imageUrl = await ImageUpload(coverImageUrl);
		}
		const [insertData] = await db
			.insert(bookOutline)
			.values({
				userId,
				bookTitle,
				topic,
				chaptersCount,
				writingStyle,
				review_outline: text,
				coverImageUrl: imageUrl,
			})
			.returning();
			updateTag('books-update')
			return insertData;
	} catch (error) {
		console.error("Error inserting book outline:", error);
		throw error;
	}
};

// get outline for a book
export const getOutline = async (id: string) => {
	try {
		const data = await db
			.select()
			.from(bookOutline)
			.where(eq(bookOutline.id, id));
		if (!data || data.length === 0) {
			throw new Error("outline not found");
		}
		return { success: true, data: data[0] };
	} catch (error) {
		return { success: false, error };
	}
};

// get all books
export const getAllBooks = async () => {
	try {
		const bookAll = await db
			.select({
				id: bookOutline.id,
				bookTitle: bookOutline.bookTitle,
				topic: bookOutline.topic,
				coverImageUrl: bookOutline.coverImageUrl,
				chaptersCount:bookOutline.chaptersCount
			})
			.from(bookOutline)
			.orderBy(desc(bookOutline.createdAt));

		return { success: true, data: bookAll };
	} catch (error) {
		console.error("Get all books error:", error);
		return { success: false, error: String(error) };
	}
};

//  update book outline

export const updateBook = async ({
	review_outline,
	id,
}: UpdateProps) => {
	try {
		const bookUpdate = await db
			.update(bookOutline)
			.set({  review_outline })
			.where(eq(bookOutline.id, id));
		return bookUpdate;
	} catch (error) {
		console.log("Error updating book outline");
		throw new Error("Error updating book outline");
	}
};

// delete book outline

export const deleteBook = async (id: string) => {
	try {
		const deleted = await db.delete(bookOutline).where(eq(bookOutline.id, id));

		return deleted;
	} catch (error) {
		console.error("Error deleting book outline", error);
		throw new Error("Error deleting book outline");
	}
};
