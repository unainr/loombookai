import { Skeleton } from "@/components/ui/skeleton";

export function MarkdownEditorSkeleton() {
  return (
    <div className="flex h-screen bg-background">

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-6 gap-6 overflow-hidden">
        
        {/* Book Header Skeleton */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-lg" />
            <div className="flex-1">
              <Skeleton className="h-8 w-64 mb-2" />
              <Skeleton className="h-4 w-96" />
            </div>
            <div className="text-right">
              <Skeleton className="h-4 w-24 mb-2" />
              <Skeleton className="h-7 w-32" />
            </div>
          </div>
        </div>

        {/* Chapter Tabs Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4 rounded-lg" />
            <Skeleton className="h-4 w-32" />
          </div>

          {/* Tab List Skeleton */}
          <div className="flex gap-2 flex-wrap p-1 rounded-lg border border-border/50 bg-muted/50">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-10 w-32 rounded-md" />
            ))}
          </div>
        </div>

        <Skeleton className="h-px w-full" />

        {/* Chapter Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          
          {/* Chapter Header Skeleton */}
          <div className="flex justify-between items-start mb-4 pb-4 border-b border-border/50">
            <div className="flex items-start gap-3 flex-1">
              <Skeleton className="h-10 w-10 rounded-lg" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Skeleton className="h-6 w-24 rounded-full" />
                  <Skeleton className="h-4 w-20" />
                </div>
                <Skeleton className="h-6 w-80" />
              </div>
            </div>
            <Skeleton className="h-9 w-32 rounded-md" />
          </div>

          {/* Editor Container Skeleton */}
          <div className="flex-1 overflow-hidden rounded-lg border border-border/50 bg-background shadow-sm">
            <div className="h-full w-full p-4 space-y-3">
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/5" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-4 w-5/6" />
              </div>
              <div className="space-y-2 mt-6">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
