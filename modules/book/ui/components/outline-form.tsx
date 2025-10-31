"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { bookOutlineSchema } from "../../schema";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { writingStyles } from "@/constants";
import { createOutline } from "../../server/create-outline";
import { useState } from "react";
const OutlineForm = () => {
	const [loading, setLoading] = useState(false);
	const form = useForm<z.infer<typeof bookOutlineSchema>>({
		resolver: zodResolver(bookOutlineSchema),
		defaultValues: {
			bookTitle: "",
			topic: "",
			chaptersCount: 1,
			writingStyle: "",
		},
	});

	async function onSubmit(values: z.infer<typeof bookOutlineSchema>) {
		try {
			setLoading(true);
			const data = await createOutline(values);
			if(data) form.reset()
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	}
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="bookTitle"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Book Title</FormLabel>
							<FormControl>
								<Input placeholder="Book Title" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="topic"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Topic</FormLabel>
							<FormControl>
								<Input placeholder="Topic" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="chaptersCount"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Numbers of Chapters</FormLabel>
							<FormControl>
								<Input
									type="number"
									placeholder="Chapters Numbers"
									{...field}
									value={field.value ?? ""}
									onChange={(e) => field.onChange(Number(e.target.value))} // ✅ convert to number
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="writingStyle"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Write Style</FormLabel>
							<FormControl>
								<Select value={field.value} onValueChange={field.onChange}>
									<SelectTrigger className="w-[180px]">
										<SelectValue placeholder="Select  Style" />
									</SelectTrigger>
									<SelectContent>
										{writingStyles.map((opt) => (
											<SelectItem key={opt.value} value={opt.value}>
												{opt.label}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button disabled={loading} type="submit">
					{loading ? (
						<>
							<Spinner /> Processing
						</>
					) : (
						"Submit"
					)}
				</Button>
			</form>
		</Form>
	);
};

export default OutlineForm;
