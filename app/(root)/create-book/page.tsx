import { CreateBookView } from "@/modules/book/ui/components/views/create-book-view";
import { Suspense } from "react";

const CreateBook = () => {
	return (
		<>
			<Suspense fallback={<p>Loading...</p>}>
				<CreateBookView />
			</Suspense>
		</>
	);
};

export default CreateBook;
