import { Book } from "@/components/book";
import { getAllBooks } from "../../server/create-outline";
import Link from "next/link";
import { cacheLife, cacheTag } from "next/cache";
import { cn } from "@/lib/utils";
export interface BookProps {
	id: string;
	coverImageUrl?: string | null;
}
interface PropsBooks {
	title: string
	subTitle: string
	className?:string
	description?:string
	count?:number
	endCount?:number
}
const BookFetch = async ({ title, subTitle,className,description ,count,endCount}: PropsBooks) => {
	"use cache";
	cacheLife("hours");
	cacheTag("books-update");
	const result = await getAllBooks();

	if (!result.success) {
		console.error(result.error);
		return <div className="text-red-500">Failed to load books</div>;
	}

	const books = result.data;
	return (
		<>
			<div className={cn('text-center  mx-auto px-4 mt-6 mb-6',className)}>
				<h2 className="text-3xl md:text-6xl font-bold leading-snug">
					{title} <span className="text-[#ffbc5f]">{subTitle}</span>
				</h2>

				<p className="text-lg md:text-xl text-muted-foreground mt-3 mb-15">
					{description}
				</p>
			</div>

			<div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center px-4">
				{books?.slice(count,endCount).map((book: BookProps) => (
					<Link key={book.id} href={`/editor/${book.id}`}>
						<Book coverImageUrl={book.coverImageUrl} />
					</Link>
				))}
			</div>
		</>
	);
};

export default BookFetch;
