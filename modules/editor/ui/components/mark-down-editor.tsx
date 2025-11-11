"use client";

import MDEditor from "@uiw/react-md-editor";
import { BookData } from "@/types";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FileEdit, Save, BookOpen, Sparkles, FileText, FileDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Document, Packer, Paragraph, HeadingLevel, TextRun } from "docx";
import jsPDF from "jspdf";

interface Props {
  data: BookData;
}

export default function MarkDownEditor({ data }: Props) {
  const [BookData, setBookData] = useState<BookData>(data);
  const [isSaving, setIsSaving] = useState(false);

  const handleChapterChange = (chapterNumber: number, value: string | undefined) => {
    setBookData((prev) => ({
      ...prev,
      chapters: prev.chapters.map((ch) =>
        ch.number === chapterNumber ? { ...ch, content: value ?? "" } : ch
      ),
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSaving(false);
  };

  // ✅ Download as Word (.docx)
  const handleDownloadWord = async () => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              text: BookData.bookTitle,
              heading: HeadingLevel.TITLE,
              spacing: { after: 300 },
            }),
            ...BookData.chapters.flatMap((ch) => [
              new Paragraph({
                text: `Chapter ${ch.number}: ${ch.title}`,
                heading: HeadingLevel.HEADING_2,
                spacing: { after: 200 },
              }),
              new Paragraph({
                text: ch.content || "(No content yet)",
                spacing: { after: 300 },
              }),
            ]),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${BookData.bookTitle || "book"}.docx`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // ✅ Download as PDF (.pdf)
  const handleDownloadPDF = () => {
    const pdf = new jsPDF({ unit: "pt", format: "a4" });
    let y = 40;
    pdf.setFont("Helvetica", "bold");
    pdf.setFontSize(20);
    pdf.text(BookData.bookTitle, 40, y);
    y += 30;

    pdf.setFont("Helvetica", "normal");
    pdf.setFontSize(12);

    BookData.chapters.forEach((ch) => {
      y += 20;
      if (y > 780) {
        pdf.addPage();
        y = 40;
      }
      pdf.setFont("Helvetica", "bold");
      pdf.text(`Chapter ${ch.number}: ${ch.title}`, 40, y);
      y += 20;

      pdf.setFont("Helvetica", "normal");
      const textLines = pdf.splitTextToSize(ch.content || "(No content yet)", 520);
      textLines.forEach((line:any) => {
        if (y > 780) {
          pdf.addPage();
          y = 40;
        }
        pdf.text(line, 40, y);
        y += 16;
      });
    });

    pdf.save(`${BookData.bookTitle || "book"}.pdf`);
  };

  const totalWords = BookData.chapters.reduce(
    (acc, ch) => acc + ch.content.split(/\s+/).length,
    0
  );

  return (
    <div className="flex flex-col p-6 gap-6 overflow-hidden bg-background">
      <div className="flex justify-between items-center">
        <Link href={"/"}>
          <Button variant={"secondary"}>Back</Button>
        </Link>

        <div className="flex gap-2">
          <Button
            onClick={handleDownloadWord}
            className="flex gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200"
          >
            <FileText className="h-4 w-4" />
            Download Word
          </Button>

          <Button
            onClick={handleDownloadPDF}
            className="flex gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all duration-200"
          >
            <FileDown className="h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20">
            <BookOpen className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-foreground tracking-tight">
              {data.bookTitle}
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              {data.overallSummary}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              Total Wordss
            </p>
            <p className="text-2xl font-bold text-primary">
              {totalWords.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <Tabs
        defaultValue={`chapter-1`}
        className="flex-1 flex flex-col overflow-hidden"
      >
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
              Select Chapter
            </h2>
          </div>

          <TabsList className="w-full overflow-x-auto bg-muted/50 p-1 h-auto gap-2 justify-start flex-wrap rounded-lg border border-border/50">
            {data.chapters.map((chapter) => (
              <TabsTrigger
                key={chapter.number}
                value={`chapter-${chapter.number}`}
                className="relative px-4 py-2.5 rounded-md border border-transparent bg-background text-muted-foreground hover:text-foreground hover:bg-muted/80 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary/50 data-[state=active]:shadow-md transition-all duration-200 whitespace-nowrap font-semibold text-sm"
              >
                <span className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-muted text-xs font-bold data-[state=active]:bg-primary-foreground/20">
                    {chapter.number}
                  </span>
                  <span>Chapter {chapter.number}</span>
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <Separator className="my-4" />

        <div className="flex-1 overflow-hidden">
          {data.chapters.map((chapter) => (
            <TabsContent
              key={chapter.number}
              value={`chapter-${chapter.number}`}
              className="flex flex-col h-full outline-none"
            >
              <div className="flex justify-between items-start mb-4 pb-4 border-b border-border/50">
                <div className="flex items-start gap-3 flex-1">
                  <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 mt-0.5">
                    <FileEdit className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-block px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider">
                        Chapter {chapter.number}
                      </span>
                      <span className="text-xs text-muted-foreground font-medium">
                        {chapter.content.split(/\s+/).length} words
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-foreground">
                      {chapter.title}
                    </h2>
                  </div>
                </div>

               
              </div>

              <div
                className="border border-border/50 rounded-lg bg-background shadow-sm hover:shadow-md hover:border-border transition-all duration-200"
                data-color-mode="dark"
              >
                <MDEditor
                  className="min-h-screen"
                  value={
                    BookData.chapters.find((c) => c.number === chapter.number)
                      ?.content ?? ""
                  }
                  onChange={(value) => handleChapterChange(chapter.number, value)}
                />
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}
