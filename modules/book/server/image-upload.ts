"use server"

import { imagekit } from "@/lib/image-kit";

export const ImageUpload = async (file: File) => { 
 if (!file) return null;
 // Convert File → Buffer
  const arrayBuffer = await file.arrayBuffer();
  const base64File = Buffer.from(arrayBuffer).toString('base64')
  const imageKitRef = await imagekit.upload({
    file:base64File,
    fileName:`book-loom-${Date.now()}.png`,
      folder: '/bookloom-images',

  })
  return imageKitRef?.url ?? null;

 }