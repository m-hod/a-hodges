import React, { useEffect } from "react";
import BookHoverAnchor from "../../components/elements/BookHoverAnchor";
import BookSection from "../../components/layouts/BookSection";
import Carousel from "../../components/layouts/Carousel";
import Hero from "../../components/wrappers/hero";
import { headerHeight } from "../../utils/constants";
import { useRouter } from "next/router";

type BookLink = {
  anchor: string;
  image: string;
};

const dummyBooks: BookLink[] = [
  {
    anchor: "1",
    image: "/images/AaronHodges_BookCover_Ebook-low-res-534x800.jpg",
  },
  {
    anchor: "2",
    image: "/images/AaronHodges_BookCover_Ebook-low-res-534x800.jpg",
  },
  {
    anchor: "3",
    image: "/images/AaronHodges_BookCover_Ebook-low-res-534x800.jpg",
  },
];

function Series() {
  const router = useRouter();

  useEffect(() => {
    if (router.query.book) {
      const target = document.getElementById(`${router.query.book}`);
      if (target) {
        target.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }
  }, [router]);

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
            {
              thumb: "/images/AronHodges_Cover_FINAL_Clean_thumb.jpg",
              url: "/images/AronHodges-Cover-FINAL-Clean.webp",
            },
            {
              thumb: "/images/Aaron_B3_Cover_no_typography_thumb.jpg",
              url: "/images/Aaron_B3_Cover_no_typography.jpg",
            },
            {
              thumb: "/images/AaronHodges_BookCover_Jpeg_Full_thumb.jpg",
              url: "/images/AaronHodges_BookCover_Jpeg_Full.jpg",
            },
          ]}
        />
      </Hero>
      <BookSection
        title="The Knights of Alana"
        subtitle="The Complete Series"
        content="<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu ante, pharetra id molestie ac, hendrerit eu quam. Curabitur pharetra faucibus purus, non hendrerit tortor ultricies nec. Nulla eget pellentesque enim. Duis vitae tincidunt massa, sed accumsan magna. Fusce elementum lacus a diam euismod pellentesque. Nunc pulvinar luctus nunc, eu luctus leo posuere et. Duis vel viverra sem. Cras ornare pretium dolor sit amet vestibulum. </p><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu ante, pharetra id molestie ac, hendrerit eu quam. Curabitur pharetra faucibus purus, non hendrerit tortor ultricies nec. Nulla eget pellentesque enim. Duis vitae tincidunt massa, sed accumsan magna. Fusce elementum lacus a diam euismod pellentesque. Nunc pulvinar luctus nunc, eu luctus leo posuere et. Duis vel viverra sem. Cras ornare pretium dolor sit amet vestibulum. </p><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu ante, pharetra id molestie ac, hendrerit eu quam. Curabitur pharetra faucibus purus, non hendrerit tortor ultricies nec. Nulla eget pellentesque enim. Duis vitae tincidunt massa, sed accumsan magna. Fusce elementum lacus a diam euismod pellentesque. Nunc pulvinar luctus nunc, eu luctus leo posuere et. Duis vel viverra sem. Cras ornare pretium dolor sit amet vestibulum. </p>"
        orderLinks={[
          { url: "", label: "Amazon" },
          { url: "", label: "Good Reads" },
        ]}
        cover="/images/AaronHodges_BookCover_Ebook-low-res-534x800.jpg"
        art="/images/Aaron_B3_Cover_no_typography.jpg"
        quotes={[
          {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            author: "Full Name",
          },
          {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            author: "Full Name",
          },
        ]}
        orientation="left"
        anchor="1"
      />
      <BookSection
        title="The Knights of Alana"
        subtitle="The Complete Series"
        content="<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu ante, pharetra id molestie ac, hendrerit eu quam. Curabitur pharetra faucibus purus, non hendrerit tortor ultricies nec. Nulla eget pellentesque enim. Duis vitae tincidunt massa, sed accumsan magna. Fusce elementum lacus a diam euismod pellentesque. Nunc pulvinar luctus nunc, eu luctus leo posuere et. Duis vel viverra sem. Cras ornare pretium dolor sit amet vestibulum. </p><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu ante, pharetra id molestie ac, hendrerit eu quam. Curabitur pharetra faucibus purus, non hendrerit tortor ultricies nec. Nulla eget pellentesque enim. Duis vitae tincidunt massa, sed accumsan magna. Fusce elementum lacus a diam euismod pellentesque. Nunc pulvinar luctus nunc, eu luctus leo posuere et. Duis vel viverra sem. Cras ornare pretium dolor sit amet vestibulum. </p><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu ante, pharetra id molestie ac, hendrerit eu quam. Curabitur pharetra faucibus purus, non hendrerit tortor ultricies nec. Nulla eget pellentesque enim. Duis vitae tincidunt massa, sed accumsan magna. Fusce elementum lacus a diam euismod pellentesque. Nunc pulvinar luctus nunc, eu luctus leo posuere et. Duis vel viverra sem. Cras ornare pretium dolor sit amet vestibulum. </p>"
        orderLinks={[
          { url: "", label: "Amazon" },
          { url: "", label: "Good Reads" },
        ]}
        cover="/images/AaronHodges_BookCover_Ebook-low-res-534x800.jpg"
        art="/images/Aaron_B3_Cover_no_typography.jpg"
        quotes={[
          {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            author: "Full Name",
          },
          {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            author: "Full Name",
          },
        ]}
        orientation="right"
        anchor="2"
      />
    </div>
  );
}

export default Series;
