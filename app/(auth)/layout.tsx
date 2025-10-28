import { LayoutProps } from '@/types'
import { GalleryVerticalEnd } from 'lucide-react'
import React from 'react'

const Layout = ({children}:LayoutProps) => {
  return (
     <div className="grid min-h-svh lg:grid-cols-2 bg-[#212126]  ">
      <div className="flex flex-col gap-4 p-6 md:p-10">
       
        <div className="flex flex-1 items-center justify-center ">
          <div className="w-full max-w-xs">
           {children}
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/next.svg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover "
        />
      </div>
    </div>
  )
}

export default Layout