export const writingStyles = [
  { label: 'Informative', value: 'informative' },
  { label: 'Storytelling', value: 'storytelling' },
  { label: 'Casual', value: 'casual' },
  { label: 'Professional', value: 'professional' },
  { label: 'Humorous', value: 'humorous' },
] 

export const generateOutlinePrompt = ({
  bookTitle,
  topic,
  chaptersCount,
  writingStyle,
}: {
  bookTitle: string;
  topic: string;
  chaptersCount: number;
  writingStyle: string;
}) => `
You are an expert author and editor. Generate a **book outline** strictly in **valid JSON** format based on the following details:

Book Title: ${bookTitle}
Main Topic: ${topic}
Number of Chapters: ${chaptersCount}
Writing Style: ${writingStyle}

### Requirements:
1. Respond **only with JSON**, without any markdown, code fences, or commentary.
2. The JSON must be syntactically valid and follow this structure exactly:

{
  "bookTitle": string,
  "summary": string,
  "chapters": [
    {
      "chapterNumber": number,
      "chapterTitle": string,
      "points": [string, string, string]
    }
  ]
}

### Notes:
- Generate exactly ${chaptersCount} chapters.
- Each chapter must have a creative, relevant title.
- Each "points" array must include 2–4 short bullet summaries.
- Ensure the tone reflects the ${writingStyle} style.
- Avoid markdown or extra text.

Now, output the **final JSON only**.
`;

