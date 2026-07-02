'use server'

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation'

export async function addShelf(formData: FormData) {
        const userId = formData.get("userId") as string;
        const name   = formData.get("name") as string;

        // console.log('action shelf', formData);

        await prisma.shelf.create({
            data: {
            userId,
            name,
            appliedAt: new Date()
        }
    });

    revalidatePath("/dashboard");
    redirect(`/dashboard/${userId}/shelfs`) // Navigate to the shelf page
}


export async function updateShelf(formData: FormData) {
    const userId = formData.get("userId") as string;
    const id   = formData.get("id") as string;
    const name = formData.get("name") as string;

    await prisma.shelf.update({
        where: {
            id: id
        },
        data: {
            name
        }
    });

    revalidatePath("/dashboard");
    redirect(`/dashboard/${userId}/shelfs`) // Navigate to the shelf page
}

export async function deleteShelf({ id }: { id: any; }) {
    console.log('delete ' + id);

    revalidatePath("/dashboard");
}