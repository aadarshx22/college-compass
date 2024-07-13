import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="h1-bold">
            Explore, Connect and Socialize in Your College
          </h1>
          <p className="p-regular-20 md:p-regular-24">
            Navigate through different groups and events in your college
          </p>
          <Button size='lg' asChild className="button w-full sm:w-fit">
            <Link href='#events'>
            Explore Now
            </Link>
          </Button>
        </div>

        <Image 
        src="/assets/hero.png"
        alt="hero"
        width={1300}
        height={1300}
        className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
        />
      </div>
    </section>

    <section className="my-8 wrapper flex flex-col gap-8 md:gap-12">
      <h2 className="h2-bold"> Have a look at <br/>some ongoing events...  </h2>
      Search 
      Cateogry
    </section>
    </>
  );
}
