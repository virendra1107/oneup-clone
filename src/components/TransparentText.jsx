import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TransparentText = () => {
  const sectionRef = useRef(null);

  // Text you want to animate
  const text = "We're Passionate Thinkers";

  // Split text into chars with span wrapper
  const chars = text.split("").map((char, i) => (
    <span
      key={i}
      className="inline-block"
      style={{ display: char === " " ? "inline" : "inline-block" }}
    >
      {char}
    </span>
  ));

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current.querySelectorAll("span"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center bg-black text-white"
      style={{
        backgroundImage: "url('/bg_aim.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-10" />
      <h1 className="relative z-20 flex flex-wrap text-4xl md:text-6xl font-bold select-none">
        {chars}
      </h1>
    </section>
  );
};

export default TransparentText;
