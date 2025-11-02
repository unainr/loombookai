"use client"
import { useState } from "react"
import { X } from "lucide-react"

export const FileUpload = ({
  onChange,
  value,
}: {
  onChange?: (file: File | null) => void
  value?: File | null
}) => {
  const [file, setFile] = useState<File | null>(value ?? null)

  const handleFileChange = (newFile: File) => {
    setFile(newFile)
    onChange?.(newFile)
  }

  const removeFile = () => {
    setFile(null)
    onChange?.(null)
  }

  const handleClick = () => {
    const input = document.createElement("input")
    input.type = "file"
    input.accept = "image/*"
    input.onchange = (e) => {
      const target = e.target as HTMLInputElement
      if (target.files?.[0]) {
        handleFileChange(target.files[0])
      }
    }
    input.click()
  }

  return (
    <div className="w-full">
      <div
        onClick={handleClick}
        className="p-10 group/file block rounded-lg cursor-pointer w-full relative overflow-hidden border-2 border-dashed border-gray-300 dark:border-neutral-700 hover:border-gray-400 dark:hover:border-neutral-600 transition-colors"
      >
        {!file ? (
          <div className="flex flex-col items-center justify-center">
            <p className="font-bold text-neutral-700 dark:text-neutral-300 text-base">
              Upload file
            </p>
            <p className="text-neutral-400 dark:text-neutral-400 text-base mt-2">
              Click to upload image
            </p>
            <div className="relative z-40 bg-white dark:bg-neutral-900 flex items-center justify-center h-32 mt-4 w-32 mx-auto rounded-md shadow-lg">
              <svg
                className="h-8 w-8 text-neutral-600 dark:text-neutral-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>
          </div>
        ) : (
          <div className="relative w-40 mx-auto">
            <img
              src={URL.createObjectURL(file)}
              alt={file.name}
              className="w-full h-40 object-cover rounded-lg shadow"
            />
            <button
              onClick={(e) => {
                e.stopPropagation()
                removeFile()
              }}
              className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
