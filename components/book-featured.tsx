import Link from 'next/link';
import React from 'react';

export default function BookFeatured() {
  return (
    <section className="w-full bg-linear-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-950 py-12 sm:py-16 md:py-20 lg:py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-950/50 px-4 py-1.5 rounded-full border border-transparent dark:border-amber-800/30">
              Featured Collection
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors duration-300">
            Discover Your Next
            <span className="block text-amber-600 dark:text-amber-400 mt-1 sm:mt-2">Great Read</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4 transition-colors duration-300">
            Curated collections that bring stories to life and readers together
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {[
            {
              title: "Stories That Unite, Books That Inspire",
              tag: "SHORT STORY",
              img: "/pic1.webp",
              color: "from-purple-900/80"
            },
            {
              title: "Read Together, Rise Together",
              tag: "HISTORICAL FICTION",
              img: "/pic2.webp",
              color: "from-blue-900/80"
            }
          ].map((item, i) => (
            <div
              key={i}
              className="group relative h-80 sm:h-[400px] md:h-[480px] lg:h-[520px] overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl dark:shadow-gray-950/50 dark:hover:shadow-amber-900/20 transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Enhanced Gradient Overlay */}
              <div className={`absolute inset-0 bg-linear-to-t ${item.color} via-black/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90`}></div>

              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-linear-to-br from-white/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 md:p-10 lg:p-12 text-white">
                
                {/* Tag */}
                <div className="mb-3 sm:mb-4">
                  <span className="inline-block text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase bg-white/20 dark:bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/30 dark:border-white/20 transition-all duration-300 group-hover:bg-white/30 dark:group-hover:bg-white/20 group-hover:tracking-[0.2em]">
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-[1.02] drop-shadow-lg">
                  {item.title}
                </h2>

                {/* Button */}
                <button className="self-start bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 hover:shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2 group/btn border border-transparent dark:border-gray-700 dark:hover:border-gray-300">
                  SHOP NOW
                  <svg 
                    className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              {/* Shine Effect on Hover */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <Link href={'/all-books'}>
          <button className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300 underline underline-offset-4 hover:underline-offset-8">
            View All Collections →
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}