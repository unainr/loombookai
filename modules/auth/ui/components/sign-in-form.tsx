"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Eye, EyeOff, LoaderCircle } from "lucide-react";
import { signInSchema } from "../../schema";

export const SignInForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const [providerLoading, setproviderLoading] = useState(false);
	const form = useForm<z.infer<typeof signInSchema>>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof signInSchema>) {
		setError(null);
		setLoading(true);
		try {
			authClient.signIn.email(
				{
					email: values.email,
					password: values.password,
					callbackURL: "/",
				},
				{
					onSuccess: () => {
						setLoading(false);
					},

					onError: ({ error }) => {
						setError(error.message);
						setLoading(false);
					},
				}
			);
		} catch (error: any) {
			setError(error.message);
		}
	}

	const onSocial = (provider: "google") => {
		setError(null);
		setproviderLoading(true);
		try {
			authClient.signIn.social(
				{
					provider: provider,
					callbackURL: "/",
				},
				{
					onSuccess: () => {
						setproviderLoading(false);
					},

					onError: ({ error }) => {
						setError(error.message || "Something went wrong.");
						setproviderLoading(false);
					},
				}
			);
		} catch (error: any) {
			return { success: false, error: error.message };
		}
	};
	return (
		<div>
	<Form {...form}>
		<form onSubmit={form.handleSubmit(onSubmit)}>
			<div className="space-y-4 p-0">
				{/* Email Field */}
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-gray-700 dark:text-gray-200 font-medium">
								Email
							</FormLabel>
							<FormControl>
								<Input
									className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 h-12 rounded-lg focus-visible:ring-2 focus-visible:ring-blue-500/50 dark:focus-visible:ring-blue-400/50 focus:border-blue-500 dark:focus:border-blue-400 w-full px-4 py-2 text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-colors"
									placeholder="Enter your email"
									{...field}
								/>
							</FormControl>
							<FormMessage className="text-xs" />
						</FormItem>
					)}
				/>

				{/* Password Field */}
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<div className="flex items-center justify-between mb-2">
								<FormLabel className="text-gray-700 dark:text-gray-200 font-medium">
									Password
								</FormLabel>
								<Link
									href="/forgot-password"
									className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline font-medium transition-colors"
								>
									Forgot password?
								</Link>
							</div>
							<FormControl>
								<div className="relative">
									<input
										{...field}
										type={showPassword ? "text" : "password"}
										className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 pr-12 h-12 rounded-lg focus-visible:ring-2 focus-visible:ring-blue-500/50 dark:focus-visible:ring-blue-400/50 focus:border-blue-500 dark:focus:border-blue-400 w-full px-4 py-2 text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 focus-visible:outline-none transition-colors"
										placeholder="••••••••"
									/>
									<button
										type="button"
										className="absolute inset-y-0 right-2 text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors px-2"
										onClick={() => setShowPassword(!showPassword)}
									>
										{showPassword ? (
											<EyeOff className="w-5 h-5" />
										) : (
											<Eye className="w-5 h-5" />
										)}
									</button>
								</div>
							</FormControl>
							<FormMessage className="text-xs" />
						</FormItem>
					)}
				/>

				{/* Error Alert */}
				{error && (
					<Alert variant="destructive" className="border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
						<AlertTitle className="text-red-800 dark:text-red-200">Error</AlertTitle>
						<AlertDescription className="text-red-700 dark:text-red-300">{error}</AlertDescription>
					</Alert>
				)}

				{/* Submit Button */}
				<Button
					disabled={loading}
					className="w-full h-12 bg-linear-to-r from-blue-600 via-blue-500 to-blue-400 hover:from-blue-700 hover:via-blue-600 hover:to-blue-500 dark:from-blue-500 dark:via-blue-600 dark:to-blue-700 dark:hover:from-blue-600 dark:hover:via-blue-700 dark:hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/20 dark:shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/30 dark:hover:shadow-blue-500/40 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
					type="submit"
				>
					{loading ? (
						<LoaderCircle className="w-5 h-5 animate-spin" />
					) : (
						"Sign In"
					)}
				</Button>

				{/* Divider */}
				<div className="flex items-center my-5">
					<div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
					<span className="px-4 text-sm text-gray-400 dark:text-gray-500 font-medium">
						or continue with
					</span>
					<div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
				</div>

				{/* Google Sign In Button */}
				<Button
					type="button"
					disabled={providerLoading}
					onClick={() => onSocial("google")}
					className="h-12 w-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg flex items-center justify-center gap-3 font-medium transition-all duration-200 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"

				>
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
					>
						<path
							d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
							fill="#4285F4"
						/>
						<path
							d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
							fill="#34A853"
						/>
						<path
							d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
							fill="#FBBC05"
						/>
						<path
							d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
							fill="#EA4335"
						/>
					</svg>
					<span >
						{providerLoading ? (
							<LoaderCircle className="w-5 h-5 animate-spin" />
						) : (
							"Continue with Google"
						)}
					</span>
				</Button>
			</div>

			
		</form>
	</Form>
</div>
	);
};
