"use client";

import MDEditor from "@uiw/react-md-editor";
import { BookData } from "@/types";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FileEdit, Save, BookOpen, Sparkles } from "lucide-react";
import { useState } from "react";


interface Props {
  data: BookData

}

export default function MarkDownEditor({ data }: Props) {
  const [BookData, setBookData] = useState<BookData>(data)
  const [isSaving, setIsSaving] = useState(false)

  const handleChapterChange = (chapterNumber: number, value: string | undefined) => {
    setBookData((prev) => ({
      ...prev,
      chapters: prev.chapters.map((ch) =>
        ch.number === chapterNumber ? { ...ch, content: value ?? "" } : ch
      ),
    }));
  };

  const handleSave = async () => {
    setIsSaving(true)
    await new Promise(resolve => setTimeout(resolve, 800))
    setIsSaving(false)
  }

  const totalWords = BookData.chapters.reduce((acc, ch) => acc + ch.content.split(/\s+/).length, 0)

  return (
    <div className=" flex flex-col p-6 gap-6 overflow-hidden bg-background">
      {/* ✅ Book Header - Enhanced */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20">
            <BookOpen className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-foreground tracking-tight">{data.bookTitle}</h1>
            <p className="text-sm text-muted-foreground mt-1">{data.overallSummary}</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Total Words</p>
            <p className="text-2xl font-bold text-primary">{totalWords.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* ✅ Chapter Tabs - Enhanced */}
      <Tabs defaultValue={`chapter-1`} className="flex-1 flex flex-col overflow-hidden">
        
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Select Chapter</h2>
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

        {/* ✅ Editor content inside each tab */}
        <div className="flex-1  overflow-hidden">
          {data.chapters.map((chapter) => (
            <TabsContent
              key={chapter.number}
              value={`chapter-${chapter.number}`}
              className="flex flex-col h-full outline-none"
            >
              {/* Chapter Header */}
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

                <Button 
                  onClick={handleSave}
                  disabled={isSaving}
                  className="flex gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-60"
                >
                  <Save className={`h-4 w-4 ${isSaving ? 'animate-spin' : ''}`} />
                  {isSaving ? 'Saving...' : 'Save Chapter'}
                </Button>
              </div>

              {/* Editor Container */}
              <div className="border border-border/50 rounded-lg  bg-background shadow-sm hover:shadow-md hover:border-border transition-all duration-200" data-color-mode="dark">
                <MDEditor
                  className="min-h-screen"
                  value={BookData.chapters.find((c) => c.number === chapter.number)?.content}
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
