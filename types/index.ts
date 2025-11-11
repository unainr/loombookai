export interface LayoutProps{
    children:React.ReactNode;
}


export type BookData = {
  bookTitle: string;
  overallSummary: string;
  chapters: {
    number: number;
    title: string;
    summary: string;
    content:string
  }[];
};

export interface UpdateProps{
  id:string
	review_outline?: object;
}