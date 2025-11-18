import { getOutline } from "@/modules/book/server/create-outline";
import { redirect } from "next/navigation";
import MarkDownEditor from "../components/mark-down-editor";
import { BookData } from "@/types";
interface Props {
	params: Promise<{ id: string }>;
}

export const EditorView = async ({ params }: Props) => {
	const { id } = await params;
	const outlineBook = await getOutline(id);
	const data = outlineBook.data?.review_outline as BookData;
	const image = outlineBook.data?.coverImageUrl as string|undefined
	if (!outlineBook) redirect("/");
	return (
		<>
			<MarkDownEditor data={data} coverImageUrl={image}  />
		</>
	);
};
