import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import WrapperForm from "../components/wrapper-form";

const SignInView = async () => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});
	if (!!session) {
		redirect("/");
	}
	return <WrapperForm />;
};

export default SignInView;
