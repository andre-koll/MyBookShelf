import Image from 'next/image'

let arr: string[] = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
];

export default function RandomBackground() {
const getRandomElement = (arr: any[]) =>
  arr.length ? arr[Math.floor(Math.random() * arr.length)] : undefined;

  const img = getRandomElement(arr);

  return (
    <div className="absolute h-screen w-screen">
        <Image src={`/images/bkg-pix/${img}`} loading="eager" fill={true} alt="MyBookshelf Background" />
    </div>
  );
}
