import { useState } from "react";

const Avatars = () => {
  const avatars = [
    {
      ImgPath: "/Avatars/testimonial1.jpg",
      name: "Andrea Loob",
      role: "Agency X",
      review:
        "Fantastic design, incredibly well documented, and an absolute pleasure to use! The customer support is one of the absolute best I've ever had the pleasure of interacting with. One of the best looking themes out there.",
    },
    {
      ImgPath: "/Avatars/testimonial2.jpg",
      name: "Adam Peterson",
      role: "Business Owner",
      review:
        "This template is so beautiful and has such wonderful new options. It is updated often which gives me even more quality. The support is one of the absolute best I've ever had the pleasure of interacting with. Quick, courteous, and extremely helpful!",
    },
    {
      ImgPath: "/Avatars/testimonial3.jpg",
      name: "Sergio Whum",
      role: "Company / CEO",
      review:
        "Beautiful, flexible theme. Much more robust than what I needed for this project, but so chic I couldn't resist. Support was also really responsive and even have a code change for me in the next update. Will definitely consider more themes from this developer!",
    },
    {
      ImgPath: "/Avatars/testimonial4.jpg",
      name: "Andrea Loob",
      role: "Agency X",
      review:
        "Fantastic design, incredibly well documented, and an absolute pleasure to use! The customer support is one of the absolute best I've ever had the pleasure of interacting with. One of the best looking themes out there.",
    },
    {
      ImgPath: "/Avatars/testimonial5.jpg",
      name: "Adam Peterson",
      role: "Business Owner",
      review:
        "This template is so beautiful and has such wonderful new options. It is updated often which gives me even more quality. The support is one of the absolute best I've ever had the pleasure of interacting with. Quick, courteous, and extremely helpful!",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <section className="bg-zinc-800 text-white py-24 px-6 text-center">
        {/* Quote Icon */}
        <div className="text-red-500 text-4xl mb-5">❝</div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6">WHAT PEOPLE SAY?</h2>

        {/* Active Review */}
        <div
          className="flex justify-center gap-4 flex-wrap"
          onMouseLeave={() => setActiveIndex(activeIndex)}
        >
          {avatars.map((item, i) => (
            <img
              key={i}
              src={item.ImgPath}
              alt={`Avatar ${i + 1}`}
              className={`w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 transition duration-300 cursor-pointer mb-10 ${activeIndex === i
                ? "border-red-500 scale-125 opacity-60"
                : "border-white opacity-70 hover:opacity-100"
                }`}
              onMouseEnter={() => setActiveIndex(i)}
            />
          ))}
        </div>
        {activeIndex !== null && (
          <>
            <p className="text-gray-300 max-w-3xl mx-auto text-base md:text-xl font-semibold leading-relaxed px-2 mb-5">
              {avatars[activeIndex].review}
            </p>
            <div className="mt-2">
              <h3 className="font-bold text-white text-lg">
                {avatars[activeIndex].name}
              </h3>
              <p className="text-red-500 text-sm">{avatars[activeIndex].role}</p>
            </div>
          </>
        )}
        {/* Avatar Row (All visible) */}

      </section >

      <svg
        className="relative bg-black w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 100.86"
        preserveAspectRatio="none"
      >
        <path
          className="fill-zinc-800"
          d="m0,0h1600v100.86C1433.02,47.48,1137.15,12,800,12S166.98,47.48,0,100.86V0Z"
        />
      </svg>
    </>
  );
};

export default Avatars;
