"use client";

import { timelineData } from "@/data/timelineDetails";
import { ChevronRight } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "./timeline.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function Timeline() {
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Group timeline items by year
  const yearGroup = timelineData.reduce((acc, item) => {
    if (!acc[item.year]) acc[item.year] = [];
    acc[item.year].push(item);
    return acc;
  }, {} as Record<number, typeof timelineData>);

  const milestone = Object.keys(yearGroup).sort((a, b) => Number(a) - Number(b));

  let globalIndex = 0;

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      // Animate timeline line
      gsap.fromTo(
        ".timeline-line-progress",
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline-line",
            start: "top 20%",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );

      // Animate icons
      gsap.utils.toArray<HTMLElement>(".vertical-timeline-element-icon").forEach((el) => {
        gsap.to(el, {
          backgroundColor: "#0044B5",
          duration: 0.8,
          scrollTrigger: {
            trigger: el,
            start: isMobile ? "top 90%" : "top 80%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        });
      });

      // Animate content with stagger
      const elements = gsap.utils.toArray<HTMLElement>(".vertical-timeline-element-content");
      elements.forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: isMobile ? "top 90%" : "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, ref);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section ref={ref} className="timeline relative">
      <div className="timeline-line">
        <div className="timeline-line-progress"></div>
      </div>
      <VerticalTimeline lineColor="transparent"
  className="!before:hidden" 
  animate={false}>
        {milestone.map((year) => {
          const yearPosition = globalIndex % 2 === 0 ? "right" : "left";
          globalIndex++;
          const items = yearGroup[Number(year)];

          return (
            <div key={year}>
              {/* Year + first milestone */}
              <VerticalTimelineElement
                position={yearPosition}
                contentStyle={{
                  boxShadow: "none",
                  marginLeft: 0,
                  marginRight: 0,
                  paddingLeft: isMobile ? "2px" : undefined,
                  paddingRight: isMobile ? "2px" : undefined,
                }}
                iconStyle={{
                  background: "#E7E9F5",
                  border: "none",
                  boxShadow: "none",
                  zIndex: "99",
                  width: "24px",
                  height: "24px",
                  marginLeft: "-12px",
                }}
              >
                <h2 className="m-0 !text-project-blue font-bold !text-[32px] sm:!text-[28px]">{year}</h2>
                {items[0] && (
                  <div>
                    <h3 style={{ color: items[0].color }}>{items[0].title}</h3>
                    <p>{items[0].description}</p>

                    {items[0].hasImage && (
                      <div className="relative w-full h-[350px] lg:h-[450px] sm:h-[250px] my-4">
                        <Image src={items[0].url} alt="image" fill className="object-contain" />
                      </div>
                    )}

                    {items[0].hasReadMore && (
                      <a href="#" className="text-project-blue">
                        READ MORE <ChevronRight className="inline" />
                      </a>
                    )}
                  </div>
                )}
              </VerticalTimelineElement>

              {/* Remaining milestones */}
              {items.slice(1).map((item, idx) => {
                const pos = globalIndex % 2 === 0 ? "right" : "left";
                globalIndex++;

                return (
                  <VerticalTimelineElement
                    key={idx}
                    position={pos}
                    iconStyle={{ display: "none" }}
                    contentStyle={{
                      boxShadow: "none",
                      marginLeft: 0,
                      marginRight: 0,
                      paddingLeft: isMobile ? "2px" : undefined,
                      paddingRight: isMobile ? "2px" : undefined,
                    }}
                    contentArrowStyle={{ borderRight: "none" }}
                  >
                    <h3 style={{ color: item.color }}>{item.title}</h3>
                    <p>{item.description}</p>

                    {item.hasImage && (
                      <div className="relative w-full h-[350px] lg:h-[450px] sm:h-[250px] my-2">
                        <Image src={item.url} alt="image" fill className="object-contain" />
                      </div>
                    )}

                    {item.hasReadMore && (
                      <a href="#" className="text-project-blue">
                        READ MORE <ChevronRight className="inline" />
                      </a>
                    )}
                  </VerticalTimelineElement>
                );
              })}
            </div>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
