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
  coverImageUrl?:string;

}

export default function MarkDownEditor({ data,coverImageUrl }: Props) {
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
const handleDownloadPDF = async () => {
  const pdf = new jsPDF();
  
  const margin = 15;
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const textWidth = pageWidth - (margin * 2);
  
  let currentY = margin;

  const checkPageBreak = (neededSpace: number) => {
    if (currentY + neededSpace > pageHeight - margin) {
      pdf.addPage();
      currentY = margin;
    }
  };

  // Cover Image
  if (coverImageUrl) {
    const imgW = textWidth;
    const imgH = imgW * 1.3;
    pdf.addImage(coverImageUrl, "PNG", margin, margin, imgW, imgH);
    pdf.addPage();
    currentY = margin;
  }

  // Book Title
  pdf.setFont("times", "bold");
  pdf.setFontSize(20);
  const splitTitle = pdf.splitTextToSize(BookData.bookTitle || "Untitled Book", textWidth);
  checkPageBreak(splitTitle.length * 10);
  splitTitle.forEach((line: string) => {
    pdf.text(line, margin, currentY);
    currentY += 10;
  });
  currentY += 10;

  // Chapters
  pdf.setFont("times", "normal");
  pdf.setFontSize(12);

  BookData.chapters.forEach((ch) => {
    // Chapter Title
    checkPageBreak(15);
    pdf.setFont("times", "bold");
    pdf.setFontSize(14);
    const chTitle = pdf.splitTextToSize(`Chapter ${ch.number}: ${ch.title}`, textWidth);
    chTitle.forEach((line: string) => {
      pdf.text(line, margin, currentY);
      currentY += 8;
    });
    currentY += 5;

    // Content
    pdf.setFont("times", "normal");
    pdf.setFontSize(12);
    const content = ch.content || "(No content yet)";
    const contentLines = pdf.splitTextToSize(content, textWidth);
    
    contentLines.forEach((line: string) => {
      checkPageBreak(7);
      pdf.text(line, margin, currentY);
      currentY += 7;
    });
    
    currentY += 10;
  });

  pdf.save(`${BookData.bookTitle.replace(/[^a-z0-9]/gi, '_')}.pdf`);
};




  const totalWords = BookData.chapters.reduce(
    (acc, ch) => acc + ch.content.split(/\s+/).length,
    0
  );

  return (
   <div className="flex flex-col p-4 sm:p-6 gap-4 sm:gap-6 overflow-hidden bg-background">
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
    <Link href={"/"}>
      <Button variant={"secondary"}>Back</Button>
    </Link>

    <div className="flex gap-2 w-full sm:w-auto">
      <Button
        onClick={handleDownloadPDF}
        className="flex gap-2 bg-linear-to-r text-white from-amber-500 to-orange-500 dark:from-amber-600 dark:to-orange-600 hover:from-amber-600 hover:to-orange-600 font-semibold shadow-md hover:shadow-lg transition-all duration-200 w-full sm:w-auto"
      >
        <FileDown className="h-4 w-4" />
        Download PDF
      </Button>
    </div>
  </div>

  <div className="space-y-3">
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
      <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20">
        <BookOpen className="h-5 w-5 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight wrap-break-word">
          {data.bookTitle}
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          {data.overallSummary}
        </p>
      </div>
      <div className="w-full lg:w-auto text-left lg:text-right bg-primary/5 lg:bg-transparent rounded-lg p-3 lg:p-0 border lg:border-0 border-primary/10">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
          Total Words
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
            className="relative px-4 py-2.5 rounded-md border border-transparent bg-background text-muted-foreground hover:text-foreground hover:bg-muted/80 data-[state=active]:bg-linear-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-white data-[state=active]:border-amber-400 data-[state=active]:shadow-lg data-[state=active]:shadow-amber-500/30 transition-all duration-200 whitespace-nowrap font-semibold text-sm"
          >
            <span className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-muted text-xs font-bold data-[state=active]:bg-white/30 data-[state=active]:text-white">
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
          <div className="flex flex-col sm:flex-row justify-between items-start mb-4 pb-4 border-b border-border/50 gap-3">
            <div className="flex items-start gap-3 flex-1 w-full">
              <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 mt-0.5">
                <FileEdit className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-linear-to-r from-amber-500 to-orange-500 text-xs font-semibold text-white uppercase tracking-wider shadow-md">
                    Chapter {chapter.number}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium">
                    {chapter.content.split(/\s+/).length} words
                  </span>
                </div>
                <h2 className="text-xl font-bold text-foreground wrap-break-word">
                  {chapter.title}
                </h2>
              </div>
            </div>
          </div>

          <div
            className="border border-border/50 rounded-lg bg-background shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-200"
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
