import Image from "next/image";

export default function BookFeatured() {
  return (
   <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-10">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

    {/* Card Component */}
    {[
      {
        title: "Stories That Unite, Books That Inspire",
        tag: "SHORT STORY",
        img: "/pic1.webp"
      },
      {
        title: "Read Together, Rise Together",
        tag: "HISTORICAL FICTION",
        img: "/pic2.webp"
      }
    ].map((item, i) => (
      <div
        key={i}
        className="group relative h-[380px] sm:h-[450px] md:h-[520px] overflow-hidden rounded-2xl cursor-pointer"
      >
        <Image
          width={800}
          height={800}
          src={item.img}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent transition-all duration-500 group-hover:from-black/80 group-hover:via-black/40"></div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end p-8 md:p-12 lg:p-16 text-white">
          <div className="mb-2 md:mb-3 text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.15em] uppercase opacity-90 transition-all duration-300 group-hover:tracking-[0.25em]">
            {item.tag}
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-snug transition-transform duration-500 group-hover:-translate-y-1">
            {item.title}
          </h2>

          <button className="self-start bg-white text-black px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:bg-black hover:text-white hover:tracking-widest hover:px-10 sm:hover:px-12">
            SHOP NOW
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}