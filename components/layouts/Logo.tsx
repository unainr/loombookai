import React from "react";
import Image from "next/image";
import Link from "next/link";
const Logo = () => {
	return (
		<Link href="/" className="flex items-center gap-2">
			  <Image
				src="/4.png" 
				alt="Book Loom Logo"
				width={190}
				height={50}
				priority
			  />
			</Link>
	);
};

export default Logo;
