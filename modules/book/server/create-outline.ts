"use server";

import { groq } from "@ai-sdk/groq";
import { generateText } from "ai";
import { z } from "zod";
import { generateOutlinePrompt } from "@/constants";
import { bookOutline } from "@/drizzle/schema";
import { db } from "@/drizzle/db";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
interface Props {
	bookTitle: string;
	topic: string;
	chaptersCount: number;
	writingStyle: string;
	review_outline?: object;
}

export const createOutline = async ({
	bookTitle,
	topic,
	chaptersCount,
	writingStyle,
	review_outline,
}: Props) => {
	try {
		const session = await auth.api.getSession({
				headers: await headers(),
			});

		if (!session) {
			throw new Error("Not authenticated");
		}

		const userId = session.user.id;

		const [insertData] = await db
			.insert(bookOutline)
			.values({
				userId,
				bookTitle,
				topic,
				chaptersCount,
				writingStyle,
			})
			.returning();
		console.log("inserted data server log see", insertData);
		return insertData;
	} catch (error) {
		console.log(error);
	}
};
