// google api key=AIzaSyCvmEXTy4I1SSveCAAKIYakNp5RVoVoHOA 
// https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyAqYZdqMg_a70j6IPwJybvjawCT84Yn4WU

'use client'

// import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

function googleApiBooks () {
  // testingg
  let isbn = '978-3-7645-0335-2'
  let apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=isbn:'
  let apiKey = 'AIzaSyCvmEXTy4I1SSveCAAKIYakNp5RVoVoHOA'
  let url = apiUrl + isbn + '&key=' + apiKey
  // let google = await fetch(url)
  // let googlebook = await google.json()
  console.log(url);
  // console.log(googlebook);

  // console.log('title ',  googlebook.items[0].volumeInfo.title);
  // console.log('author ',  googlebook.items[0].volumeInfo.authors[0]);
  // console.log('description ',  googlebook.items[0].searchInfo.textSnippet);
  // console.log('type ',  googlebook.items[0].volumeInfo.subtitle);
  // console.log('image ',  googlebook.items[0].volumeInfo.imageLinks.thumbnail);

}

export async function GoogleApiBooks() {

  // testingg
  let isbn = '978-3-7645-0335-2'
  let apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=isbn:'
  let apiKey = 'AIzaSyCvmEXTy4I1SSveCAAKIYakNp5RVoVoHOA'
  let url = apiUrl + isbn + '&key=' + apiKey
  let google = await fetch(url)
  let googlebook = await google.json()
  console.log(url);
  console.log(googlebook);

  console.log('title ',  googlebook.items[0].volumeInfo.title);
  console.log('author ',  googlebook.items[0].volumeInfo.authors[0]);
  console.log('description ',  googlebook.items[0].searchInfo.textSnippet);
  console.log('type ',  googlebook.items[0].volumeInfo.subtitle);
  console.log('image ',  googlebook.items[0].volumeInfo.imageLinks.thumbnail);


  // let data = await fetch('https://api.vercel.app/blog')
  // let posts = await data.json()
  // return (
  //   <ul>
  //     {posts.map((post) => (
  //       <li key={post.id}>{post.title}</li>
  //     ))}
  //   </ul>
  // )
}

export default  function GoogleApiButton() {

  return (
    <Button
      className="flex items-center gap-x-2"
      onClick={GoogleApiBooks}
    >
      <PlusCircle className="w-3.5 h-3.5" />
      <span>Google Search</span>
    </Button>
  );
}
/*
export default  function GoogleApiButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      className="flex items-center gap-x-2"
    >
      <PlusCircle className="w-3.5 h-3.5" />
      <span>{pending ? "Saving..." : "Save"}</span>
    </Button>
  );
}
*/