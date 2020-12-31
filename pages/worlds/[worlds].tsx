import React from "react";
import BackgroundImage from "../../components/elements/BackgroundImage";
import Divider from "../../components/layouts/Divider";
import Newsletter from "../../components/layouts/Newsletter";
import Timeline from "../../components/layouts/Timeline";
import Centered from "../../components/wrappers/Centered";
import Section from "../../components/wrappers/Section";

export default function Worlds() {
  return (
    <div>
      <Section>
        <h1 className="mb-8">The World of Alana</h1>
        <h3 className="md:w-3/5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </h3>
      </Section>
      <Section>
        <Divider
          left={
            <div className="h-full flex flex-col justify-center">
              <h2 className="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h2>
              <p>
                Morbi ac ipsum ac orci sodales tristique sed vitae massa. Sed
                sed lacus dui. Ut eleifend nunc sit amet eleifend vulputate.
                Pellentesque aliquam viverra massa, in auctor sem tincidunt ut.
                Cras accumsan aliquet arcu, vitae sodales felis. Aenean erat
                metus, varius in tincidunt a, pharetra eu orci.
              </p>
            </div>
          }
          right={
            <img
              src="/images/AaronHodges_BookCover_Jpeg_Full.jpg"
              className="h-auto w-auto"
            />
          }
        />
      </Section>
      <Section>
        <Timeline
          entries={[
            {
              title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              content: (
                <div className="my-8">
                  <p className="mb-8">
                    Morbi ac ipsum ac orci sodales tristique sed vitae massa.
                    Sed sed lacus dui. Ut eleifend nunc sit amet eleifend
                    vulputate. Pellentesque aliquam viverra massa, in auctor sem
                    tincidunt ut. Cras accumsan aliquet arcu, vitae sodales
                    felis. Aenean erat metus, varius in tincidunt a, pharetra eu
                    orci.
                  </p>
                  <div
                    className="relative w-full lg:w-4/6 mb-8"
                    style={{ height: 250 }}
                  >
                    <BackgroundImage
                      thumb="/images/AaronHodges_BookCover_Jpeg_Full.jpg"
                      url="/images/AaronHodges_BookCover_Jpeg_Full.jpg"
                    />
                  </div>
                  <p className="mb-8">
                    Morbi ac ipsum ac orci sodales tristique sed vitae massa.
                    Sed sed lacus dui. Ut eleifend nunc sit amet eleifend
                    vulputate. Pellentesque aliquam viverra massa, in auctor sem
                    tincidunt ut. Cras accumsan aliquet arcu, vitae sodales
                    felis. Aenean erat metus, varius in tincidunt a, pharetra eu
                    orci.
                  </p>
                </div>
              ),
            },
            {
              title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              content: (
                <div className="my-8">
                  <p className="mb-8">
                    Morbi ac ipsum ac orci sodales tristique sed vitae massa.
                    Sed sed lacus dui. Ut eleifend nunc sit amet eleifend
                    vulputate. Pellentesque aliquam viverra massa, in auctor sem
                    tincidunt ut. Cras accumsan aliquet arcu, vitae sodales
                    felis. Aenean erat metus, varius in tincidunt a, pharetra eu
                    orci.
                  </p>
                </div>
              ),
            },
            {
              title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              content: (
                <div className="my-8">
                  <p className="mb-8">
                    Morbi ac ipsum ac orci sodales tristique sed vitae massa.
                    Sed sed lacus dui. Ut eleifend nunc sit amet eleifend
                    vulputate. Pellentesque aliquam viverra massa, in auctor sem
                    tincidunt ut. Cras accumsan aliquet arcu, vitae sodales
                    felis. Aenean erat metus, varius in tincidunt a, pharetra eu
                    orci.
                  </p>
                  <div
                    className="relative w-full lg:w-4/6 mb-8"
                    style={{ height: 250 }}
                  >
                    <BackgroundImage
                      thumb="/images/AaronHodges_BookCover_Jpeg_Full.jpg"
                      url="/images/AaronHodges_BookCover_Jpeg_Full.jpg"
                    />
                  </div>
                  <p className="mb-8">
                    Morbi ac ipsum ac orci sodales tristique sed vitae massa.
                    Sed sed lacus dui. Ut eleifend nunc sit amet eleifend
                    vulputate. Pellentesque aliquam viverra massa, in auctor sem
                    tincidunt ut. Cras accumsan aliquet arcu, vitae sodales
                    felis. Aenean erat metus, varius in tincidunt a, pharetra eu
                    orci.
                  </p>
                </div>
              ),
            },
          ]}
        />
      </Section>
      <Section>
        <Divider
          left={
            <div className="h-full flex flex-col justify-between">
              <div className="md:hidden">
                <h2 className="mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </h2>
                <p>
                  Morbi ac ipsum ac orci sodales tristique sed vitae massa. Sed
                  sed lacus dui. Ut eleifend nunc sit amet eleifend vulputate.
                  Pellentesque aliquam viverra massa, in auctor sem tincidunt
                  ut. Cras accumsan aliquet arcu, vitae sodales felis. Aenean
                  erat metus, varius in tincidunt a, pharetra eu orci.
                </p>
              </div>
              <img
                src="/images/AaronHodges_BookCover_Jpeg_Full.jpg"
                className="h-auto w-auto mb-8"
              />
              <p className="md:hidden">
                Morbi ac ipsum ac orci sodales tristique sed vitae massa. Sed
                sed lacus dui. Ut eleifend nunc sit amet eleifend vulputate.
                Pellentesque aliquam viverra massa, in auctor sem tincidunt ut.
                Cras accumsan aliquet arcu, vitae sodales felis. Aenean erat
                metus, varius in tincidunt a, pharetra eu orci.
              </p>
              <img
                src="/images/AaronHodges_BookCover_Jpeg_Full.jpg"
                className="h-auto w-auto mb-8"
              />
              <p className="md:hidden">
                Morbi ac ipsum ac orci sodales tristique sed vitae massa. Sed
                sed lacus dui. Ut eleifend nunc sit amet eleifend vulputate.
                Pellentesque aliquam viverra massa, in auctor sem tincidunt ut.
                Cras accumsan aliquet arcu, vitae sodales felis. Aenean erat
                metus, varius in tincidunt a, pharetra eu orci.
              </p>
            </div>
          }
          right={
            <div className="hidden md:flex h-full flex-col">
              <h2 className="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h2>
              <p>
                Morbi ac ipsum ac orci sodales tristique sed vitae massa. Sed
                sed lacus dui. Ut eleifend nunc sit amet eleifend vulputate.
                Pellentesque aliquam viverra massa, in auctor sem tincidunt ut.
                Cras accumsan aliquet arcu, vitae sodales felis. Aenean erat
                metus, varius in tincidunt a, pharetra eu orci.
              </p>
              <p>
                Morbi ac ipsum ac orci sodales tristique sed vitae massa. Sed
                sed lacus dui. Ut eleifend nunc sit amet eleifend vulputate.
                Pellentesque aliquam viverra massa, in auctor sem tincidunt ut.
                Cras accumsan aliquet arcu, vitae sodales felis. Aenean erat
                metus, varius in tincidunt a, pharetra eu orci.
              </p>
              <p>
                Morbi ac ipsum ac orci sodales tristique sed vitae massa. Sed
                sed lacus dui. Ut eleifend nunc sit amet eleifend vulputate.
                Pellentesque aliquam viverra massa, in auctor sem tincidunt ut.
                Cras accumsan aliquet arcu, vitae sodales felis. Aenean erat
                metus, varius in tincidunt a, pharetra eu orci.
              </p>
            </div>
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
