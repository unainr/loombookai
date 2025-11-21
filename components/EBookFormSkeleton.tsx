import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function EBookFormSkeleton() {
  return (
    <div className="w-full flex justify-center py-14 px-4">
      <div className="w-full max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Side - Book Images Gallery Skeleton */}
          <div className="hidden lg:block space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Skeleton className="aspect-3/4 rounded-xl" />
              <Skeleton className="aspect-3/4 rounded-xl" />
              <Skeleton className="aspect-3/4 rounded-xl" />
              <Skeleton className="aspect-3/4 rounded-xl" />
            </div>
          </div>

          {/* Right Side - Form Skeleton */}
          <div className="w-full max-w-xl">
            <div className="space-y-8 border border-border/40 bg-card/50 backdrop-blur-md rounded-2xl p-8 shadow-lg">
              
              {/* Title Skeleton */}
              <div className="flex justify-center">
                <Skeleton className="h-8 w-64" />
              </div>

              {/* Book Title Field */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-10 w-full" />
              </div>

              {/* Topic Field */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-10 w-full" />
              </div>

              {/* Chapters Count Field */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-10 w-full" />
              </div>

              {/* Writing Style Field */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-10 w-full" />
              </div>

              {/* Cover Image Upload Field */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-32 w-full rounded-lg" />
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <Skeleton className="h-10 flex-1" />
                <Skeleton className="h-10 flex-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}