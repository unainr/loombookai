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
import { SparkleIcon, BookOpen, X } from "lucide-react";
import { useRouter } from "next/navigation";

import { FileUpload } from "@/components/ui/file-upload";

const OutlineForm = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);

	const form = useForm<z.infer<typeof bookOutlineSchema>>({
		resolver: zodResolver(bookOutlineSchema),
		defaultValues: {
			bookTitle: "",
			topic: "",
			chaptersCount: 0,
			writingStyle: "",
		 coverImageUrl: undefined, // ✅

		},
	});

	async function onSubmit(values: z.infer<typeof bookOutlineSchema>) {
		console.log(values);
		try {
			setLoading(true);
			const data = await createOutline(values);
			if (data) {
				form.reset()
				setOpen(false)
				router.push(`/editor/${data.id}`)
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className="w-full flex justify-center py-14 px-4">
  <div className="w-full max-w-xl">
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 border border-border/40 bg-card/50 backdrop-blur-md rounded-2xl p-8 shadow-lg animate-fadeIn"
      >
        <h2 className="text-2xl font-bold text-center mb-4">
          📚 Create Your E-Book
        </h2>

        {/* Book Title */}
        <FormField
          control={form.control}
          name="bookTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium">Book Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your book title"
                  {...field}
                  className="bg-muted/20 focus:bg-background transition-colors"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Topic */}
        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium">Topic</FormLabel>
              <FormControl>
                <Input
                  placeholder="What is your book about?"
                  {...field}
                  className="bg-muted/20 focus:bg-background transition-colors"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Number of Chapters */}
        <FormField
          control={form.control}
          name="chaptersCount"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium">Chapters Count</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="e.g. 10"
                  {...field}
                  value={field.value ?? ""}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                  className="bg-muted/20 focus:bg-background transition-colors"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Writing Style */}
        <FormField
          control={form.control}
          name="writingStyle"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium">Writing Style</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="bg-muted/20 focus:bg-background transition-colors">
                    <SelectValue placeholder="Choose writing style" />
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

        {/* Images Upload */}
        <FormField
          control={form.control}
          name="coverImageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium">Upload Cover Image</FormLabel>
              <FormControl>
                <FileUpload {...field} onChange={(files) => field.onChange(files)} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <Button
            type="button"
            variant="ghost"
            onClick={() => setOpen(false)}
            className="flex-1 border border-border/40"
          >
            Cancel
          </Button>

          <Button
            disabled={loading}
            type="submit"
            className="flex-1 gap-2 font-semibold shadow-md hover:shadow-xl transition-all"
          >
            {loading ? (
              <>
                <Spinner className="h-4 w-4" /> Generating...
              </>
            ) : (
              <>
                <SparkleIcon className="h-4 w-4" /> Generate E-Book
              </>
            )}
          </Button>
        </div>
      </form>
    </Form>
  </div>
</div>

	);
};

export default OutlineForm;
