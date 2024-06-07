"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React, { useLayoutEffect, useRef } from "react";
import { MdCircle } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

gsap.registerPlugin(ScrollTrigger);

/**
 * Props for `TechList`.
 */
export type TechList1Props = SliceComponentProps<Content.TechList1Slice>;

/**
 * Component for "TechList" Slices.
 */
const TechList1 = ({ slice }: TechList1Props): JSX.Element => {
  const component = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // create as many GSAP animations and/or ScrollTriggers here as you want...
      const tl = gsap.timeline({
        scrollTrigger: {
          pin: true, // pin the trigger element while active
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
          ease: "power1.inOut",
        },
      );
    }, component);
    return () => ctx.revert(); // cleanup!
  }, []);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="wrapper overflow-hidden"
      ref={component}
    >
      <Bounded as="div">
        <Heading size="xl" className="mb-8" as="h2">
          {slice.primary.heading}
        </Heading>
      </Bounded>

      <div  className="tech-row mb-5 flex items-center justify-center gap-2 text-slate-700" aria-label={slice.primary.tech_name || undefined}>
      {Array.from({length:15},(_, index)=>(
        <React.Fragment key={index}>
          <span className="tech-item text-6xl font-extrabold uppercase tracking-tighter"
           style={{color: index === 7 && slice.primary.tech_color ? slice.primary.tech_color: "inherit"}}>
            {slice.primary.tech_name}
          </span>
          <span className="text-3xl">
<MdCircle/>
          </span>
        </React.Fragment>
      ))}

    </div>
    </section>
  );
};

export default TechList1;