"use client";
import { Rubik_Scribble as RubikScribble } from "next/font/google";
import { Silkscreen } from "next/font/google";

const rubikScribble = RubikScribble({
  subsets: ["latin"],
  weight: "400",
});

const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: "400",
});

export default function Error({ error }: { error: Error }) {
  return (
    <div className="container mx-auto px-4 sm:px-0 flex w-full h-[calc(100vh-54px)] select-none justify-center items-center flex-col">
      <h1 className={`${rubikScribble.className} text-7xl sm:text-9xl text-red-600`}>OOPS!</h1>
      <p className={`${silkscreen.className} silkscreen-regular text-center opacity-80`}>
        Seems like you are lost, or the content you want is not available now
      </p>
    </div>
  );
}
