import React from "react";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";
import FooterLink from "./FooterLink";

export default function FooterSection() {
  return (
    <section>
      <div className="flex lg:my-8 py-12 px-28 justify-between sm:my-4 py-6 px-16">
        <FooterLeft />
        <div className="flex w-4/12 justify-between">
          <div className="w-2/12">
            <FooterRight>Pages</FooterRight>
            <FooterLink>Home</FooterLink>
            <FooterLink>Our Service</FooterLink>
            <FooterLink>Portofolio</FooterLink>
            <FooterLink>Testimonial</FooterLink>
            <FooterLink>Contact Us</FooterLink>
          </div>
          <div className="w-2/12">
            <FooterRight>Explore</FooterRight>
            <FooterLink>Resources</FooterLink>
            <FooterLink>Blog</FooterLink>
            <FooterLink>Documents</FooterLink>
          </div>
          <div className="w-2/12">
            <FooterRight>Company</FooterRight>
            <FooterLink>About Us</FooterLink>
            <FooterLink>Partners</FooterLink>
            <FooterLink>Costumers</FooterLink>
            <FooterLink>Contact Us</FooterLink>
          </div>
        </div>
      </div>
    </section>
  );
}
