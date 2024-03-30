"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <div className="container mx-auto px-4 sm:px-0 flex w-full h-[calc(100vh-54px)] select-none justify-center items-center flex-col">
      <h1 className="text-7xl sm:text-9xl rubik-scribble-regular text-red-600">OOPS!</h1>
      <p className="silkscreen-regular text-center opacity-80">
        Seems like you are lost, or the content you want is not available now
      </p>
    </div>
  );
}
