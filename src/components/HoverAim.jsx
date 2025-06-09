import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HoverAim = () => {
  const hoverRef = useRef(null);
  const imageRef = useRef(null);

  const [hoverImg, setHoverImg] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const headingText = [
    { id: 1, text: "Branding", img: "/grid/onepage1.jpg" },
    { id: 2, text: "UI/UX Design", img: "/grid/onepage2.jpg" },
    { id: 3, text: "Photography", img: "/grid/onepage3.jpg" },
    { id: 4, text: "Develop", img: "/grid/onepage4.jpg" },
  ];

  useGSAP(() => {
    const lineFirst = document.querySelector('.first-line');
    const lineLast = document.querySelector('.last-line');
    const heading = document.querySelectorAll('.heading');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hoverRef.current,
        start: "top 80%",
      },
      defaults: { ease: "power2.in", duration: 0.4 }
    });

    tl.from(lineFirst, { opacity: 0, duration: 1 })
      .from(heading, { y: 50, opacity: 0, stagger: 0.3, duration: 1 }, "-=0.6")
      .from(lineLast, { opacity: 0, duration: 1 }, "-=0.6");
  }, []);

  useEffect(() => {
    if (hoverImg && imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { width: 0 },
        { width: 192, duration: 0.7, ease: "power2.out" }
      );
    }
  }, [hoverImg]);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      ref={hoverRef}
      onMouseMove={handleMouseMove}
      className="relative bg-black h-4/5 text-white py-9 md:py-16 flex flex-col items-center justify-center px-4 text-center"
    >
      {/* Vertical Line */}
      <div className="first-line h-[90px] w-px bg-white mb-9 md:mb-16" />

      {headingText.map((items) => (
        <h2
          key={items.id}
          className="heading flex flex-col text-5xl md:text-[44px] font-extrabold md:font-bold relative z-10"
          onMouseEnter={() => setHoverImg(items.img)}
          onMouseLeave={() => setHoverImg(null)}
        >
          <span className="mb-3 sm:mb-6 transition duration-300 hover:translate-x-5">
            {items.text}
          </span>
        </h2>
      ))}

      {/* Bottom Line */}
      <div className="last-line h-[90px] w-px bg-white mt-9 md:mt-16" />

      {/* Floating Image */}
      {hoverImg && (
        <img
          ref={imageRef}
          src={hoverImg}
          alt="preview"
          style={{
            left: mousePos.x - 50,
            top: mousePos.y - 50,
          }}
          className="fixed w-0 h-28 object-cover rounded-lg pointer-events-none z-50 transition duration-200 ease-in-out w-48"
        />
      )}
    </section>
  );
};

export default HoverAim;
