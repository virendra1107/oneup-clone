import { useGSAP } from '@gsap/react';
import { FiArrowUpRight } from 'react-icons/fi';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SecondPage = () => {

  useGSAP(() => {
    const lineFirst = document.querySelector('.first-line');
    const lineLast = document.querySelector('.last-line');
    const heading = document.querySelector('.heading');
    const subheading = document.querySelector('.subheading');
    const button = document.querySelector('.button');

  })

  return (
    <section className="bg-black text-white py-9 flex flex-col items-center justify-center px-4 text-center">
      
      {/* Vertical Line */}
      <div className="first-line h-24 w-px bg-white mb-14" />

      {/* Heading */}
      <h2 className="heading text-4xl md:text-[44px] font-extrabold md:font-bold mb-12 gap">
        <span>Creativity</span> <span>Without</span> <span className="relative inline-block">
          <span>Limits</span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-rose-600 rounded"></span>
        </span>
      </h2>

      {/* Paragraph */}
      <p className="subheading max-w-2xl sm:px-28 md:px-4 text-zinc-400 text-base md:text-xl leading-relaxed mb-12">
        Enthusiastically enable client-centered applications for progressive services.
        Objectively evolve B2B bandwidth rather than high standards in opportunities.
        Competently evisculate resource sucking catalysts for change through business mindshare.
        Collaboratively supply dynamic communities with bricks-and-clicks infrastructures.
      </p>

      {/* Button */}
      <button className="button flex items-center space-x-2 bg-rose-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-rose-700 transition mb-9">
        <span>Get a Consultation</span>
        <FiArrowUpRight size={18} />
      </button>

      {/* Bottom Line */}
      <div className="last-line h-24 w-px bg-white" />
    </section>
  )
}

export default SecondPage;