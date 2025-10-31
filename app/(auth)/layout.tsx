import { LayoutProps } from "@/types";
import Image from "next/image";

const Layout = ({ children }: LayoutProps) => {
	return <div >{children}</div>;
};

export default Layout;
