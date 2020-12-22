import React from "react";
import BookHoverAnchor from "../../components/elements/BookHoverAnchor";
import Carousel from "../../components/layouts/Carousel";
import Hero from "../../components/wrappers/hero";
import { headerHeight } from "../../utils/constants";

interface Props {}

type BookLink = {
  anchor: string;
  image: string;
};

const dummyBooks: BookLink[] = [
  {
    anchor: "",
    image: "/images/AaronHodges_BookCover_Ebook-low-res-534x800.jpg",
  },
  {
    anchor: "",
    image: "/images/AaronHodges_BookCover_Ebook-low-res-534x800.jpg",
  },
  {
    anchor: "",
    image: "/images/AaronHodges_BookCover_Ebook-low-res-534x800.jpg",
  },
];

function Book(props: Props) {
  const {} = props;

  return (
    <div>
      <Hero headerHeight={headerHeight}>
        <div className="p-16 h-full flex flex-grow flex-col">
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col text-center md:text-left">
              <h1 className="mt-8 mb-16 text-white">The Knights of Alana</h1>
              <h3 className="md:max-w-3/5 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse id vehicula enim.
              </h3>
            </div>
            <div className="flex mb-8 md:mb-0">
              {dummyBooks.map((_book, i) => (
                <div
                  key={i}
                  className={`${
                    i === 0
                      ? "ml-0"
                      : i === dummyBooks.length - 1
                      ? "mr-0"
                      : "mx-4 md:mx-8"
                  }`}
                >
                  <BookHoverAnchor {..._book} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Carousel
          images={[
            "/images/AronHodges-Cover-FINAL-Clean.webp",
            "/images/Aaron_B3_Cover_no_typography.jpg",
            "/images/AaronHodges_BookCover_Jpeg_Full.jpg",
          ]}
        />
      </Hero>
    </div>
  );
}

export default Book;
