import Image from "next/image"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
interface servicesProps{
    title:string
    linkText:string
}
export default function Banner({title,linkText}:servicesProps) {
  return (
    <section className="relative w-full h-64 md:h-80 overflow-hidden flex items-center justify-center">
      <Image src="/slider-15.jpg" alt="About Us Image" fill className="object-cover" priority />

      <div className="absolute inset-0 bg-black/40 z-5"></div>

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">{title}</h1>
        <Breadcrumb>
          <BreadcrumbList className="text-white/90">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink>{linkText}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </section>
  )
}
