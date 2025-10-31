import { Suspense } from "react";

import SignInView from "@/modules/auth/ui/views/sign-content";
import AuthSkeleton from "@/components/auth-skeleton";

const SignInPage = () => {
	return (
		<Suspense fallback={<AuthSkeleton/>}>
			<SignInView />
		</Suspense>
	);
};

export default SignInPage;
