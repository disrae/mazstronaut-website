import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col h-screen p-4">
      <Image
        className="rounded-full"
        src='/images/raccoon_in_space.png' alt='raccoon in space' width={500} height={500} />
    </main>)
}
