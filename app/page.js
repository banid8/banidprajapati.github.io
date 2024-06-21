import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-9xl text-center mb-8 z-10 text-red-600">
          Banid Prajapati
        </h1>
        <p className="text-4xl text-center z-10 font-mono ">
          Programmer <span className="mx-2">/</span> Designer
        </p>
        <div className="absolute -z-20">
          <Image
            src="/badesigns.png"
            alt="Ba Designs logo"
            width={1200}
            height={1200}
            className="opacity-40"
          />
        </div>
      </div>

      <section className="bg-yellow-200 h-screen flex flex-col">
        <h1 className="mt-32 text-4xl md:text-6xl font-bold text-red-500 px-4 md:px-24">
          About Me
        </h1>
        <p className="leading-relaxed mt-16 text-2xl px-4 md:px-24">
          Meet Banid Prajapati, a creative professional who has made the leap
          from graphic design to AI/ML programming and web development. With a
          blend of artistic vision and technical expertise, I bring a fresh
          perspective to every project. My work is characterized by innovative
          solutions that seamlessly merge creativity with cutting-edge
          technology. Join me on my journey to becoming a leader in the tech
          industry, where imagination fuels my passion for creating impactful
          solutions. Explore my portfolio to witness the dynamic fusion of art
          and code.
        </p>

        <Link
          className="text-4xl my-24 md:text-6xl font-bold text-red-500 hover:underline px-4 md:px-24"
          href="./projects"
        >
          Check out my projects &mdash;&gt;
        </Link>
      </section>
      <h1 className="text-2xl font-bold my-8 text-red-500">
        Skills I have gained along the way:
      </h1>
      <div className="grid grid-cols-8 grid-rows-auto gap-12 ">
        {Array.from({ length: 13 }, (_, i) => (
          <Image
            key={i}
            src={`/Artboard ${i + 1}.png`}
            alt="Java logo"
            width={200}
            height={200}
            className="bg-yellow-50 p-2 rounded-lg shadow-2xl"
          />
        ))}
      </div>
    </main>
  );
}
