import { Book } from "@/components/book";
import BookFeatured from "@/components/book-featured";
import FeaturesSection from "@/components/featured-section";
import HowItWorksSection from "@/components/how-its-work";
import BookFetch from "@/modules/book/ui/components/book-fetch";
import { BookSkeleton } from "@/modules/book/ui/components/book-skeleton";
import Newsletter from "@/modules/home/ui/components/news-letter";
import { HomeView } from "@/modules/home/ui/views/home-view";
import { Suspense } from "react";

const Home = () => {
	return (
		<>
			<HomeView />
			<div className="my-10">
				<BookFeatured />
			</div>
			<div className="w-full   px-4 sm:px-6 lg:px-8 flex justify-center">
				<div className="w-full ">
					<Suspense fallback={<BookSkeleton width={196} />}>
						<BookFetch />
					</Suspense>
				</div>
			</div>

			<FeaturesSection />
			<HowItWorksSection />
      <Newsletter/>
		</>
	);
};

export default Home;
