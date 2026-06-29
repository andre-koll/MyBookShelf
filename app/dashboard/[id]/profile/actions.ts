'use server'

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation'

export async function updateProfile(formData: FormData) {
  const id      = formData.get("id") as string;
  const name    = formData.get("name") as string;
  const email   = formData.get("email") as string;
  const image   = formData.get("image") as string;
  const lang    = formData.get("lang") as string;

//   console.log('action profile', formData);

  await prisma.user.update({
    where: { 
        id: id
    },
    data: {
      name,
      email,
      image,
      lang,
      updatedAt: new Date()
    }
  });

  revalidatePath("/dashboard");
  redirect(`/dashboard`) // Navigate to the dashboard page
}