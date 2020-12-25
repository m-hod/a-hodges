import Head from "next/head";
import Link from "next/link";
import Button from "../components/elements/button";
import ContentDisplay from "../components/layouts/ContentDisplay";
import Newsletter from "../components/layouts/Newsletter";
import Centered from "../components/wrappers/Centered";
import Section from "../components/wrappers/Section";
import TextFade from "../components/wrappers/TextFade";

export default function Home() {
  return (
    <div>
      <Section>
        <ContentDisplay
          left={
            <div className="flex flex-col items-center justify-center h-full object-contain">
              <img
                src="/images/AaronHodges_BookCover_Ebook-low-res-534x800.jpg"
                alt=""
                style={{ maxHeight: "calc(100% - 1rem - 50px)" }}
              />
              <div className="m-4">
                <Button>PREORDER</Button>
              </div>
            </div>
          }
          right={
            <TextFade>
              <div className="flex flex-col h-full relative">
                <div className="flex flex-col mb-12">
                  <h5 className="mb-8">The Knights of Alana: Book One</h5>
                  <h1 className="mb-12">Daughter of Fate</h1>
                  <h3>
                    When Knights attack the temple of Skystead,
                    seventeen-year-old Pela is the only one to escape.
                  </h3>
                </div>
                <div className="h-full overflow-hidden">
                  <p className="mb-4">
                    Her mother and the other villagers are taken, accused of
                    worshiping the False Gods. They will pay the ultimate price
                    – unless Pela can rescue them.
                  </p>
                  <p className="mb-4">
                    Pela has never left the safety of her town, let alone
                    touched a sword. What chance does she have against the
                    ruthless Knights of Alana? She’s not a hero.
                  </p>
                  <p className="mb-4">
                    Pela has never left the safety of her town, let alone
                    touched a sword. What chance does she have against the
                    ruthless Knights of Alana? She’s not a hero.
                  </p>
                  <p className="mb-4">
                    Pela has never left the safety of her town, let alone
                    touched a sword. What chance does she have against the
                    ruthless Knights of Alana? She’s not a hero.
                  </p>
                  <p className="mb-4">
                    Pela has never left the safety of her town, let alone
                    touched a sword. What chance does she have against the
                    ruthless Knights of Alana? She’s not a hero.
                  </p>
                  <p className="mb-4">But she knows one.</p>
                </div>
                <div className="absolute bottom-0 z-20 flex w-full justify-center">
                  <p className="underline cursor-pointer hover:text-gray-400">
                    <Link
                      href={{
                        pathname: "series/[series]",
                        query: { series: "alana", book: "1" },
                      }}
                    >
                      <a>Read More</a>
                    </Link>
                  </p>
                </div>
              </div>
            </TextFade>
          }
        />
      </Section>
      <Section>
        <Centered>
          <Newsletter />
        </Centered>
      </Section>
    </div>
  );
}
