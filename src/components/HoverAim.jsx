import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';


const HoverAim = () => {

  const headingText = [
    {
      id:1,
      text: "Branding",
    },
    {
      id:2,
      text: "UI/UX Design",
    },
    {
      id:3,
      text: "Photography",
    },
    {
      id:4,
      text: "Develop",
    }
  ]

  useGSAP(() => {
    const lineFirst = document.querySelector('.first-line');
    const lineLast = document.querySelector('.last-line');
    const heading = document.querySelectorAll('.heading');

      const tl = gsap.timeline();

      tl.from(lineFirst, {
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: lineFirst,
          start: "top 80%",
          end: "top -50%",
          scrub: true,
        },
      })
      .from(heading, {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: heading[1],
          start: "top 70%",
          end: "top -50%",
          scrub: true
        },
      })
      .from(lineLast, {
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: lineFirst,
          start: "top 60%",
          end: "top -50%",
          scrub: true,
        },
      })

  })

  return (
    <section className="bg-black h-4/5 text-white py-9 md:py-16 flex flex-col items-center justify-center px-4 text-center">
      
      {/* Vertical Line */}
      <div className="first-line h-[90px] w-px bg-white mb-9 md:mb-16" />
      {headingText.map((items) =>(
        <h2 key={items.id} className="flex flex-col text-5xl md:text-[44px] font-extrabold md:font-bold">
        <span className='heading mb-3 sm:mb-6'>{items.text}</span>
      </h2>))}

      {/* Bottom Line */}
      <div className="last-line h-[90px] w-px bg-white mt-9 md:mt-16" />
    </section>
  )
}

export default HoverAim;