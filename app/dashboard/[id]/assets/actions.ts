'use server'

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation'
import Form from 'next/form'

export async function addAsset(formData: FormData) {
    const postedById  = formData.get("userId") as string;
    const isbn        = formData.get("isbn") as string;
    const title       = formData.get("title") as string;
    const author      = formData.get("author") as string;
    const description = formData.get("description") as string;
    const type        = formData.get("type") as string;
    const shelfId     = formData.get("shelfId") as string;

    // console.log('action asset', formData);

    await prisma.asset.create({
        data: {
        postedById,
        isbn,
        title,
        author,
        description,
        type,
        shelfId,
        postedAt: new Date()
        }
    });

    revalidatePath("/dashboard");
    redirect(`/dashboard/${postedById}/assets`) // Navigate to the asset page
}

export async function updateAssetByGoogle(formData: FormData) {
    const postedById = formData.get("userId") as string;
    const postedBy = formData.get("userId") as string;
    let isbn       = formData.get("isbn") as string;

    // console.log('postedById = ' + postedById);
    console.log(isbn);

    // let isbn = '978-3-7645-0335-2'
    let apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=isbn:'
    let apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_BOOK_KEY
    let url = apiUrl + isbn + '&key=' + apiKey
    let google = await fetch(url)
    let googlebook = await google.json()

    fetch(url)
        .then(response => response.json())
        .then(googlebook => {
            // Do your things
            // console.log(googlebook);
            let title = googlebook.items[0].volumeInfo.title
            let author = googlebook.items[0].volumeInfo.authors[0]
            let description = googlebook.items[0].searchInfo.textSnippet
            let type = googlebook.items[0].volumeInfo.subtitle
            let image = googlebook.items[0].volumeInfo.imageLinks.thumbnail
            let shelf = null
            let shelfId = null
        })
        .catch(error => {
            console.error('Error:', error);
        })
        .finally(() => {
            // Call your function here
            console.log('done');
            console.log('googlebook = ', googlebook);
        });

  // console.log(url);
  // console.log('title ',  googlebook.items[0].volumeInfo.title);
  // console.log('author ',  googlebook.items[0].volumeInfo.authors[0]);
  // console.log('description ',  googlebook.items[0].searchInfo.textSnippet);
  // console.log('type ',  googlebook.items[0].volumeInfo.subtitle);
  // console.log('image ',  googlebook.items[0].volumeInfo.imageLinks.thumbnail);

    let title = googlebook.items[0].volumeInfo.title
    let author = googlebook.items[0].volumeInfo.authors[0]
    let description = googlebook.items[0].searchInfo.textSnippet
    let type = googlebook.items[0].volumeInfo.subtitle
    let image = googlebook.items[0].volumeInfo.imageLinks.thumbnail
}



export async function updateAsset(formData: FormData) {
    const id          = formData.get("id") as string;
    const isbn        = formData.get("isbn") as string;
    const title       = formData.get("title") as string;
    const author      = formData.get("author") as string;
    const description = formData.get("description") as string;
    const type        = formData.get("type") as string;
    const shelfId       = formData.get("shelfId") as string;

    await prisma.asset.update({
        where: {
        id: id
        },
        data: {
            isbn,
            title,
            author,
            description,
            type,
            shelfId,
            postedAt: new Date()
        }
    });

    revalidatePath("/dashboard");
    redirect(`/dashboard/${id}/assets`) // Navigate to the asset page
}

export async function deleteAsset({ id }: { id: any; }) {
    console.log('delete ' + id);

    revalidatePath("/dashboard");
}