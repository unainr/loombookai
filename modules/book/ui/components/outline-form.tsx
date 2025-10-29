"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
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
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { writingStyles } from "@/constants";
const OutlineForm = () => {
	const form = useForm<z.infer<typeof bookOutlineSchema>>({
		resolver: zodResolver(bookOutlineSchema),
		defaultValues: {
			bookTitle: "",
			topic: "",
			chaptersCount: 1,
			writingStyle: "",
		},
	});

	function onSubmit(values: z.infer<typeof bookOutlineSchema>) {
		console.log(values);
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
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
};

export default OutlineForm;
