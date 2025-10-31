"use client";

import { SignInForm } from "@/modules/auth/ui/components/sign-in-form";
import { SignUpForm } from "@/modules/auth/ui/components/sign-up-form";
import React, { useState } from "react";

export default function WrapperForm() {
	const [isSignUp, setIsSignUp] = useState(false);

	return (
		<div className="min-h-screen   dark:to-[#5a3a7a] flex items-center justify-center p-4 sm:p-5 ">
			<div
				className={`relative w-full max-w-[900px] bg-white dark:bg-gray-900 rounded-[20px] shadow-[0_25px_50px_rgba(0,0,0,0.2)] dark:shadow-[0_25px_50px_rgba(0,0,0,0.5)] overflow-hidden
        min-h-[680px] sm:min-h-[620px] lg:h-[550px]
        before:content-[''] before:absolute before:h-[2000px] before:w-[2000px] before:rounded-full before:transition-all before:duration-1800 before:ease-in-out
        before:bg-linear-to-bl before:from-[#667eea] before:to-[#764ba2] dark:before:from-[#4c5fd5] dark:before:to-[#5a3a7a]
        before:-top-[10%] before:-translate-y-1/2
        ${
					isSignUp
						? "before:right-[52%] before:translate-x-full"
						: "before:right-[48%]"
				}`}>
				{/* Forms Container */}
				<div className="relative lg:absolute w-full h-full top-0 left-0">
					<div
						className={`lg:absolute w-full lg:w-1/2 transition-all duration-1000 ease-in-out lg:delay-700 z-5
            lg:top-1/2 lg:-translate-y-1/2
            ${
							isSignUp
								? "lg:left-1/4 lg:-translate-x-1/2"
								: "lg:left-3/4 lg:-translate-x-1/2"
						}`}>
						{/* Sign In Form */}
						<div
							className={`flex items-center justify-center flex-col px-6 sm:px-10 lg:px-20 py-8 transition-opacity duration-200 lg:delay-700 z-5
              ${
								isSignUp
									? "hidden lg:flex lg:opacity-0 lg:pointer-events-none"
									: "opacity-100"
							}`}>
							<h2 className="text-[2rem] sm:text-[2.2rem] text-[#444] dark:text-gray-100 mb-5 font-bold">
								Sign In
							</h2>
							<div className="z-10 w-full max-w-md">
								<SignInForm />
							</div>
						</div>

						{/* Sign Up Form */}
						<div
							className={`lg:absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col px-6 sm:px-10 lg:px-20 py-8 transition-opacity duration-200 lg:delay-700 z-1
              ${
								isSignUp ? "opacity-100 lg:z-2" : "hidden lg:flex lg:opacity-0"
							}`}>
							<h2 className="text-[2rem] sm:text-[2.2rem] text-[#444] dark:text-gray-100 mb-5 font-bold">
								Sign Up
							</h2>
							<div className="w-full ">
								<SignUpForm />
							</div>
						</div>
					</div>
				</div>

				{/* Panels Container */}
				<div className="lg:absolute h-full w-full top-0 left-0 grid grid-cols-1 lg:grid-cols-2">
					{/* Left Panel - Mobile Top */}
					<div
						className={`flex flex-col items-center lg:items-end justify-center lg:justify-around text-center z-6 
            py-8 px-6 lg:pt-12 lg:pr-[17%] lg:pb-8 lg:pl-[12%]
            ${isSignUp ? "lg:pointer-events-none" : "pointer-events-auto"}`}>
						<div
							className={`text-white transition-all duration-700 lg:duration-900 ease-in-out lg:delay-[600ms]
              ${
								isSignUp
									? "opacity-0 scale-95 lg:opacity-100 lg:scale-100 lg:-translate-x-[800px] h-0 lg:h-auto overflow-hidden lg:overflow-visible"
									: "opacity-100 scale-100 translate-x-0 translate-y-0"
							}`}>
							<div className="hidden md:block">
								<h3 className="font-semibold leading-tight text-xl sm:text-2xl mb-3">
									New here?
								</h3>
								<p className="text-[0.9rem] sm:text-[0.95rem] leading-relaxed py-2 sm:py-3 px-2 sm:px-0 mb-1">
									Join us today and discover a world of possibilities. Create
									your account in seconds!
								</p>
							</div>
							<button
								onClick={() => setIsSignUp(true)}
								className="mt-3 bg-transparent border-2  border-white w-[130px] sm:w-[140px] h-10 sm:h-[43px] font-semibold text-[0.8rem] sm:text-[0.85rem] text-white rounded-full cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#667eea] active:scale-95">
								Sign up
							</button>
						</div>
					</div>

					{/* Right Panel - Mobile Bottom */}
					<div
						className={`flex flex-col items-center lg:items-start justify-center lg:justify-around text-center z-6
            py-8 px-6 lg:pt-12 lg:pr-[12%] lg:pb-8 lg:pl-[17%]
            order-last lg:order-0
            ${isSignUp ? "pointer-events-auto" : "lg:pointer-events-none"}`}>
						<div
							className={`text-white transition-all duration-700 lg:duration-900 ease-in-out lg:delay-[600ms]
              ${
								isSignUp
									? "opacity-100 scale-100 translate-x-0 translate-y-0"
									: "opacity-0 scale-95 lg:opacity-100 lg:scale-100 lg:translate-x-[800px] h-0 lg:h-auto overflow-hidden lg:overflow-visible"
							}`}>
							<div className="hidden md:block">
								<h3 className="font-semibold leading-tight text-xl sm:text-2xl mb-3">
									One of us?
								</h3>
								<p className="text-[0.9rem] sm:text-[0.95rem] leading-relaxed py-2 sm:py-3 px-2 sm:px-0 mb-1">
									Welcome back! Sign in to continue your journey with us and
									explore more.
								</p>
							</div>
							<button
								onClick={() => setIsSignUp(false)}
								className="mt-3 bg-transparent border-2 border-white w-[130px] sm:w-[140px] h-10 sm:h-[43px] font-semibold text-[0.8rem] sm:text-[0.85rem] text-white rounded-full cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#667eea] active:scale-95">
								Sign in
							</button>
						</div>
					</div>
				</div>

				{/* Mobile Bottom Toggle - Always Visible */}
				<div className="lg:hidden absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-center px-4">
					<p className="text-white text-sm mb-2.5 font-medium">
						{isSignUp ? "Already have an account?" : "Don't have an account?"}
					</p>
					<button
						onClick={() => setIsSignUp(!isSignUp)}
						className="text-white font-bold text-sm bg-white/20 px-6 py-2 rounded-full hover:bg-white/30 active:scale-95 transition-all duration-200 backdrop-blur-sm">
						{isSignUp ? "Sign in instead" : "Create account"}
					</button>
				</div>
			</div>
		</div>
	);
}
