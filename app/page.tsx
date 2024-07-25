import Image from "next/image";
import Starfield from "react-starfield";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col h-screen p-4 bg-black">
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <Image
        className="rounded-full"
        src='/images/raccoon_in_space.png' alt='raccoon in space' width={500} height={500} />
    </main>)
}
