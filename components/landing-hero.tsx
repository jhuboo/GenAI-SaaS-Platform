"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    // <div className="text-white font-bold py-36 text-center space-y-5">
    //   <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
    //     <h1>The best GenAI Platform</h1>
    //     <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
    //       <TypewriterComponent
    //         options={{
    //           strings: [
    //             "Generate Text.",
    //             "Photo Generation.",
    //             "Blog Writing.",
    //             "Mail Writing."
    //           ],
    //           autoStart: true,
    //           loop: true,
    //         }}
    //       />
    //     </div>
    //   </div>
    //   <div className="text-sm md:text-xl font-light text-zinc-400">
    //     Create content using AI 10x faster.
    //   </div>
    //   <div>
    //     <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
    //       <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
    //         Start Generating For Free
    //       </Button>
    //     </Link>
    //   </div>
    //   <div className="text-zinc-400 text-xs md:text-sm font-normal">
    //     No credit card required.
    //   </div>
    // </div>
    <div className="text-white font-bold py-36 text-center space-y-5">
  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
    <h1>Unleash Your Creativity with the Ultimate GenAI Platform</h1>
    <div className="text-transparent bg-clip-text bg-gradient-to-r from-grey-400 via-black-500 to-blue-600 animate-text">
      <TypewriterComponent
        options={{
          strings: [
            "Elevate Your Text.",
            "Transform Images.",
            "Craft Compelling Blogs.",
            "Compose Engaging Emails."
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  </div>
  <div className="text-sm md:text-xl font-light text-zinc-300">
    Empower your content creation with AI, faster than ever before.
  </div>
  <div>
    <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
      <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 transition-colors duration-300">
        Dive In For Free
      </Button>
    </Link>
  </div>
  <div className="text-zinc-300 text-xs md:text-sm font-normal">
    No credit card, just creativity.
  </div>
</div>
  );
};
