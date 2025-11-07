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
			<div className="text-center  mx-auto px-4 mt-6 mb-6 ">
  <h2 className="text-3xl md:text-6xl font-bold leading-snug">
   Featured {" "}
   <span className="text-[#ffbc5f]">
  Books
</span>

  </h2>

  <p className="text-lg md:text-xl text-muted-foreground mt-3 mb-15">
    Hand-crafted selections from your personal library
  </p>
</div>

<div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center px-4">
  {books?.map((book: BookProps) => (
    <Link key={book.id} href={`/editor/${book.id}`}>
      <Book coverImageUrl={book.coverImageUrl} />
    </Link>
  ))}
</div>

		</>
	);
};

export default BookFetch;
