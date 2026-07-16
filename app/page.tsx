import { CodeDemo } from "@/components/Code_Animation";
import { GoldTitle, GrayTitle } from "@/components/reusables";
import { StarsBackgroundDemo } from "@/components/Star_background";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AVATARS, LOGOS } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="overflow-x-hidden bg-black">
      {/* Hero Section */}
      <section className="relative grid min-h-screen grid-cols-1 overflow-hidden px-4 pb-20 pt-28 sm:px-8 sm:pt-22 lg:grid-cols-5">
        <StarsBackgroundDemo />

        <div className="relative z-10 col-span-full lg:col-span-3 flex flex-col items-center text-center lg:rotate-2">
          <Badge variant="gold">Powered by AI</Badge>

          <h1 className="mt-6 max-w-4xl font-serif text-5xl tracking-tight sm:text-6xl lg:text-7xl">
            <GrayTitle>Ace your next interview</GrayTitle>
            <br />
            <GoldTitle>with real experience</GoldTitle>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-stone-400 sm:text-base md:text-lg">
            Book 1:1 mock interviews with senior engineers from top companies.
            Get AI-powered feedback, role-specific questions, and the confidence
            to land your dream job.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/onboarding">
              <Button variant="gold" size="hero">
                Get Started
              </Button>
            </Link>

            <Link href="/explore">
              <Button variant="outline" size="hero">
                Browse Interviewers →
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 sm:mt-16 sm:flex-row">
            <div className="flex">
              {AVATARS.map((avatar, index) => (
                <div
                  key={index}
                  className={`h-8 w-8 overflow-hidden rounded-full border-2 border-black ${
                    index > 0 ? "-ml-2" : ""
                  }`}
                >
                  <Image
                    src={avatar.src}
                    alt="User avatar"
                    width={32}
                    height={32}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-stone-500 sm:text-left">
              <strong className="font-medium text-stone-300">
                2,400+ engineers
              </strong>{" "}
              cracked FAANG interviews via{" "}
              <span className="text-white">Prept</span>
            </p>
          </div>
        </div>

        <div className="col-span-full lg:col-span-2 flex items-center justify-center lg:justify-start mt-12 lg:mt-0 lg:rotate-3">
          <CodeDemo duration={30000} writing />
        </div>
      </section>



      <section className="relative z-10 border-y border-white/10 py-14">
        <p className="text-center text-xs font-medium text-stone-600 tracking-widest uppercase mb-8">
          Interviewees landed roles at
        </p>

        <div className="flex flex-wrap items-center justify-center gap-24 px-6">
          {LOGOS.map((l) => (
            <Image
              key={l.alt}
              src={l.src}
              alt={l.alt}
              width={50}
              height={50}
              className="h-6 w-auto opacity-60 grayscale"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;