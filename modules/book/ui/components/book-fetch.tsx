import { Book } from "@/components/book";
import { getAllBooks } from "../../server/create-outline";
import Link from "next/link";
import { cacheLife, cacheTag } from "next/cache";
export interface BookProps {
	id: string;
	coverImageUrl?: string | null;
}

const BookFetch = async () => {
	"use cache";
	cacheLife('hours');
	cacheTag('books-update');
	const result = await getAllBooks();

	if (!result.success) {
		console.error(result.error);
		return <div className="text-red-500">Failed to load books</div>;
	}

	const books = result.data;
	return (
		<div>
			<h2 className="text-xl font-semibold mb-3">Books List</h2>

			<div className="flex gap-10 space-y-2">
				{books?.map((book: BookProps) => (
					<Link key={book.id} href={`/editor/${book.id}`}>
						<Book coverImageUrl={book.coverImageUrl} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default BookFetch;
