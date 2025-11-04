import Image from "next/image";

export default function BookFeatured() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Card - Short Story */}
        <div className="group relative h-[500px] overflow-hidden rounded-2xl cursor-pointer">
          <Image
            width={800}
            height={800}
            src="/pic1.webp"
            alt="Person reading book with typewriter cover"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-500 group-hover:from-black/80 group-hover:via-black/40"></div>
          <div className="relative h-full flex flex-col justify-end p-12 lg:p-16 text-white">
            <div className="mb-3 text-xs font-semibold tracking-widest uppercase opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:tracking-[0.2em]">
              SHORT STORY
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight transition-transform duration-500 group-hover:-translate-y-1">
              Stories That Unite, Books That Inspire
            </h2>
            <button className="self-start bg-white text-black px-10 py-4 text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:bg-black hover:text-white hover:tracking-widest hover:px-12">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* Right Card - Historical Fiction */}
        <div className="group relative h-[500px] overflow-hidden rounded-2xl cursor-pointer">
          <Image
            width={800}
            height={800}
            src="/pic2.webp"
            alt="Person reading outdoors with sunglasses"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/80 group-hover:via-black/40"></div>
          <div className="relative h-full flex flex-col justify-end p-12 lg:p-16 text-white">
            <div className="mb-3 text-xs font-semibold tracking-widest uppercase opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:tracking-[0.2em]">
              HISTORICAL FICTION
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight transition-transform duration-500 group-hover:-translate-y-1">
              Read Together, Rise Together
            </h2>
            <button className="self-start bg-white text-black px-10 py-4 text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:bg-black hover:text-white hover:tracking-widest hover:px-12">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}