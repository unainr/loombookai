export const writingStyles = [
	{ label: "Informative", value: "informative" },
	{ label: "Storytelling", value: "storytelling" },
	{ label: "Casual", value: "casual" },
	{ label: "Professional", value: "professional" },
	{ label: "Humorous", value: "humorous" },
];

export const expandShortOutlineToFullBookPrompt = ({
  outlineJSON,
  writingStyle,
}: {
  outlineJSON: string;
  writingStyle: string;
}) => `
You are a master book author. Expand the following book outline into a fully detailed book.

## Base Outline (DO NOT change chapter count or order)
${outlineJSON}

## Rules
- Keep all chapter numbers & titles EXACTLY as given.
- Do not invent new chapters.
- Expand each chapter into deep, useful content.
- Tone style: ${writingStyle}
- Output ONLY valid JSON — no markdown, no commentary.

## Content Requirements Per Chapter
- 1 engaging chapter introduction (2–3 paragraphs)
- 4–6 sections, each section includes:
  - "sectionTitle": short meaningful title
  - "ideas": 3–5 bullet key ideas
  - "example": 1 practical example, story, case or takeaway

## JSON Response Format
{
  "bookTitle": string,
  "summary": string,
  "chapters": [
    {
      "number": number,
      "title": string,
      "chapterIntro": string,
      "sections": [
        {
          "sectionTitle": string,
          "ideas": [string, string, string],
          "example": string
        }
      ]
    }
  ]
}

Return ONLY the JSON. Do NOT include anything else.
`;
