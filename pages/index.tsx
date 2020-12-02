import Head from "next/head";
import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";
import ContentDisplay from "../components/layouts/ContentDisplay";
import Page from "../components/layouts/page";
import TextFade from "../components/wrappers/TextFade";

export default function Home() {
  return (
    <Page
      header={{
        element: <Header />,
        height: 128,
      }}
      footer={{
        element: <Footer />,
        height: 128,
      }}
    >
      <div>
        <ContentDisplay
          left={
            <div className="flex flex-col items-center h-full object-contain">
              <img
                src="AaronHodges_BookCover_Ebook-low-res-534x800.jpg"
                alt=""
              />
              button
            </div>
          }
          right={
            <TextFade>
              <div className="flex flex-col h-full relative">
                <div className="flex flex-col mb-12">
                  <h3 className="mb-8">The Knights of Alana: Book One</h3>
                  <h1 className="mb-12">Daughter of Fate</h1>
                  <h2>
                    When Knights attack the temple of Skystead,
                    seventeen-year-old Pela is the only one to escape.
                  </h2>
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
                  <h3 className="underline cursor-pointer hover:text-gray-400">
                    <Link href="">
                      <a>Read More</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </TextFade>
          }
        />
      </div>
    </Page>
  );
}
