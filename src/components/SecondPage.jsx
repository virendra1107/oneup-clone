import { useRef } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SecondPage = () => {
  const sectionRef = useRef();
  const lineFirstRef = useRef();
  const lineLastRef = useRef();
  const headingRef = useRef();
  const subheadingRef = useRef();
  const buttonRef = useRef();

  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
      defaults: { ease: "power2.out", duration: 0.4 }
    });

    tl.from(lineFirstRef.current, { opacity: 0, y: 40 })
      .from(
        ".heading-letter",
        { opacity: 0, stagger: 0.04 },
        "-=0.3"
      )
      .from(subheadingRef.current, { opacity: 0, y: 30 })
      .from(buttonRef.current, { opacity: 0, y: 20 })
      .from(lineLastRef.current, { opacity: 0, y: 40 });

  }, { scope: sectionRef }); // useGSAP cleanup is scoped

  return (
    <section ref={sectionRef} className="bg-black text-white py-9 flex flex-col items-center justify-center px-4 text-center">
      {/* Vertical Line */}
      <div ref={lineFirstRef} className="h-24 w-px bg-white mb-14" />

      {/* Heading */}

      <h2 ref={headingRef} className="relative text-4xl md:text-[44px] font-extrabold md:font-bold mb-12 gap flex flex-wrap justify-center">
        <span className="absolute bottom-0 right-0 w-28 h-1 bg-rose-600 rounded"></span>
        {"Creativity Without Limits".split("").map((char, i) => (
          <span key={i} className="heading-letter inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h2>


      {/* Paragraph */}
      <p ref={subheadingRef} className="max-w-2xl sm:px-28 md:px-4 text-zinc-400 text-base md:text-xl leading-relaxed mb-10">
        Enthusiastically enable client-centered applications for progressive services.
        Objectively evolve B2B bandwidth rather than high standards in opportunities.
        Competently evisculate resource sucking catalysts for change through business mindshare.
        Collaboratively supply dynamic communities with bricks-and-clicks infrastructures.
      </p>

      {/* Button */}
      <div ref={buttonRef}>
        <button className="group flex items-center space-x-2 bg-rose-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-rose-700 transition mb-9"
        >
          <span className="relative inline-flex overflow-hidden">
            <span className="flex gap-1 translate-y-0 transition duration-500 group-hover:translate-y-[-160%]">
              <span>Get a Consultation</span>
              <FiArrowUpRight size={20} />
            </span>
            <span className="absolute translate-y-[164%] transition duration-500 group-hover:translate-y-0">
              <span className="flex">
                <span>Get a Consultation</span>
                <FiArrowUpRight size={20} />
              </span>
            </span>
          </span>
        </button>
      </div>

      {/* Bottom Line */}
      <div ref={lineLastRef} className="h-24 w-px bg-white" />
    </section >
  );
};

export default SecondPage;
