import Image from "next/image";
import CallToActionButton from "./CallToActionButton";

const HeroSection: React.FC = () => {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center px-4 py-12 gap-10">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-2">
          Run Beyond Limits
        </h1>
        <p className="text-lg sm:text-2xl text-gray-600 dark:text-gray-300 mb-6">
          Discover the new era of running gear. Designed for performance, built
          for you.
        </p>
        <CallToActionButton href="#shop">Shop Now</CallToActionButton>
      </div>
      <div className="w-full flex justify-center">
        <Image
          src="/placeholder-hero.jpg"
          alt="Running brand hero"
          width={800}
          height={400}
          className="rounded-xl shadow-xl object-cover w-full max-w-3xl h-64 sm:h-96"
          priority
        />
      </div>
    </main>
  );
};

export default HeroSection;
