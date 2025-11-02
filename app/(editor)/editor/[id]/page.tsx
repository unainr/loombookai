import { MarkdownEditorSkeleton } from "@/components/outline-skeleton";
import { getOutline } from "@/modules/book/server/create-outline";
import { EditorView } from "@/modules/editor/ui/views/editor-view";
import { redirect } from "next/navigation";
import { Suspense } from "react";

interface Props {
	params: Promise<{ id: string }>;
}

const BookPage = async ({ params }: Props) => {
	return (
		<Suspense fallback={<MarkdownEditorSkeleton/>}>
			<EditorView params={params} />
		</Suspense>
	);
};

export default BookPage;
