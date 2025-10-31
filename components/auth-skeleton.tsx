import { Skeleton } from "@/components/ui/skeleton";

export default function AuthSkeleton() {
  return (
    <div className="min-h-screen  dark:from-[#4c5fd5] dark:to-[#5a3a7a] flex items-center justify-center p-4 sm:p-5 py-8">
      <div className="relative w-full max-w-[900px] bg-white dark:bg-gray-900 rounded-[20px] shadow-[0_25px_50px_rgba(0,0,0,0.2)] dark:shadow-[0_25px_50px_rgba(0,0,0,0.5)] overflow-hidden min-h-[680px] sm:min-h-[620px] lg:h-[550px]">
        
        {/* Animated Background Circle */}
        <div className="hidden lg:block absolute h-[2000px] w-[2000px] bg-linear-to-bl from-[#667eea] to-[#764ba2] dark:from-[#4c5fd5] dark:to-[#5a3a7a] rounded-full -top-[10%] right-[48%] -translate-y-1/2 animate-pulse" />

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* Form Container - Desktop */}
          <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-1/2 z-5">
            <div className="flex items-center justify-center flex-col px-20 py-8">
              {/* Title Skeleton */}
              <Skeleton className="h-10 w-40 mb-5 bg-gray-200 dark:bg-gray-700" />
              
              {/* Form Fields Container */}
              <div className="w-full max-w-md space-y-4">
                {/* Email Field */}
                <div className="space-y-2">
                  <Skeleton className="h-4 w-16 bg-gray-200 dark:bg-gray-700" />
                  <Skeleton className="h-12 w-full rounded-lg bg-gray-100 dark:bg-gray-800" />
                </div>
                
                {/* Password Field */}
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20 bg-gray-200 dark:bg-gray-700" />
                  <Skeleton className="h-12 w-full rounded-lg bg-gray-100 dark:bg-gray-800" />
                </div>
                
                {/* Submit Button */}
                <Skeleton className="h-12 w-full rounded-lg bg-blue-200 dark:bg-blue-800/30 mt-6" />
                
                {/* Divider */}
                <div className="flex items-center my-5">
                  <Skeleton className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
                  <Skeleton className="h-4 w-32 mx-4 bg-gray-200 dark:bg-gray-700" />
                  <Skeleton className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
                </div>
                
                {/* Google Button */}
                <Skeleton className="h-12 w-full rounded-lg bg-gray-100 dark:bg-gray-800" />
                
                {/* Sign up link */}
                <div className="flex justify-center mt-6">
                  <Skeleton className="h-4 w-48 bg-gray-200 dark:bg-gray-700" />
                </div>
              </div>
            </div>
          </div>

          {/* Left Panel - Desktop */}
          <div className="absolute left-0 top-0 h-full w-1/2 flex flex-col items-end justify-around text-center z-6 pt-12 pr-[17%] pb-8 pl-[12%]">
            <div className="text-white space-y-4">
              <Skeleton className="h-8 w-32 mx-auto bg-white/20" />
              <Skeleton className="h-16 w-64 mx-auto bg-white/20" />
              <Skeleton className="h-10 w-32 mx-auto rounded-full bg-white/20 mt-4" />
            </div>
          </div>

          {/* Right Panel - Desktop */}
          <div className="absolute right-0 top-0 h-full w-1/2 flex flex-col items-start justify-around text-center z-6 pt-12 pr-[12%] pb-8 pl-[17%]">
            <div className="text-white space-y-4 opacity-50">
              <Skeleton className="h-8 w-32 mx-auto bg-white/20" />
              <Skeleton className="h-16 w-64 mx-auto bg-white/20" />
              <Skeleton className="h-10 w-32 mx-auto rounded-full bg-white/20 mt-4" />
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Top Panel - Mobile */}
          <div className="py-8 px-6 text-center">
            <div className="text-white space-y-3">
              <Skeleton className="h-7 w-32 mx-auto bg-white/20" />
              <Skeleton className="h-12 w-full max-w-xs mx-auto bg-white/20" />
              <Skeleton className="h-10 w-32 mx-auto rounded-full bg-white/20 mt-4" />
            </div>
          </div>

          {/* Form Area - Mobile */}
          <div className="px-6 sm:px-10 py-6">
            {/* Title Skeleton */}
            <Skeleton className="h-9 w-40 mx-auto mb-6 bg-gray-200 dark:bg-gray-700" />
            
            {/* Form Fields */}
            <div className="space-y-4">
              {/* Email Field */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-16 bg-gray-200 dark:bg-gray-700" />
                <Skeleton className="h-12 w-full rounded-lg bg-gray-100 dark:bg-gray-800" />
              </div>
              
              {/* Password Field */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-20 bg-gray-200 dark:bg-gray-700" />
                <Skeleton className="h-12 w-full rounded-lg bg-gray-100 dark:bg-gray-800" />
              </div>
              
              {/* Submit Button */}
              <Skeleton className="h-12 w-full rounded-lg bg-blue-200 dark:bg-blue-800/30 mt-6" />
              
              {/* Divider */}
              <div className="flex items-center my-5">
                <Skeleton className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
                <Skeleton className="h-4 w-28 mx-3 bg-gray-200 dark:bg-gray-700" />
                <Skeleton className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
              </div>
              
              {/* Google Button */}
              <Skeleton className="h-12 w-full rounded-lg bg-gray-100 dark:bg-gray-800" />
            </div>
          </div>

          {/* Bottom Toggle - Mobile */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center px-4">
            <Skeleton className="h-4 w-48 mx-auto mb-3 bg-white/20" />
            <Skeleton className="h-9 w-36 mx-auto rounded-full bg-white/20" />
          </div>
        </div>

        {/* Pulse Animation Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent animate-shimmer pointer-events-none" />
      </div>
    </div>
  );
}

// Add this to your global CSS (globals.css or tailwind.config.js)
// @keyframes shimmer {
//   0% { transform: translateX(-100%); }
//   100% { transform: translateX(100%); }
// }
// .animate-shimmer {
//   animation: shimmer 2s infinite;
// }