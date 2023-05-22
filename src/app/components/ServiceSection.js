import React from "react";
import Description from "./Description";
import HeadText from "./HeadText";
import CardService from "./CardService";

export default function ServiceSection() {
  return (
    <>
      <section className="bg-grayBackground flex flex-col px-28 py-12">
        <Description>Our Service</Description>
        <HeadText>We Provide What You Need</HeadText>
        <div className="flex flex-wrap py-8 justify-center">
          <CardService
            image="./FigmaLogo.svg"
            title="UI/UX Designer"
            desc="  We are ready to make your website more friendly and efficient in
              the eyes of users"
          />

          <CardService
            image="./Code.svg"
            title="Web Development"
            desc=" Want to create a website that has many features? We have the answer for you. "
          />

          <CardService
            image="./ArticleMedium.svg"
            title="Content Writer"
            desc="  We provide interesting content and can attract customers for you"
          />

          <CardService
            image="./PresentationChart.svg"
            title="Branding"
            desc="  Create visual branding with amazing result, you just sit back and relax"
          />

          <CardService
            image="./VideoCamera.svg"
            title="Editing Video"
            desc="  Want to create a website that has many features? We have the answer for you. "
          />

          <CardService
            image="./PenNib.svg"
            title="Ilustration"
            desc=" Create beauty illustrasion as you need, and make it interesting"
          />
        </div>
      </section>
    </>
  );
}
