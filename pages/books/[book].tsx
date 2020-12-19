import React from "react";
import Carousel from "../../components/layouts/Carousel";
import Hero from "../../components/wrappers/hero";
import { headerHeight } from "../../utils/constants";

interface Props {}

function Book(props: Props) {
  const {} = props;

  return (
    <div>
      <Hero headerHeight={headerHeight}>
        <div className="p-16 h-full flex flex-grow flex-col">
          <div className="flex flex-col">
            <h1 className="mt-8 mb-16 text-white">The Knights of Alana</h1>
            <h3 className="max-w-3/5 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse id vehicula enim.
            </h3>
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
