const Avatars = () => {

  const Avatars = [
    {
      ImgPath:'/Avatars/testimonial1.jpg'
    },
    {
      ImgPath:'/Avatars/testimonial2.jpg'
    },
    {
      ImgPath:'/Avatars/testimonial3.jpg'
    },
    {
      ImgPath:'/Avatars/testimonial4.jpg'
    },
    {
      ImgPath:'/Avatars/testimonial5.jpg'
    },
  ]
  return (
    <>
    <section className="bg-zinc-800 text-white py-24 px-6 text-center">
      {/* Quote Icon */}
      <div className="text-red-500 text-4xl mb-5">❝</div>

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6">WHAT PEOPLE SAY?</h2>

      {/* Avatar Row */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {Avatars.map((items, i) => (
          <img
            key={i}
            src={items.ImgPath}
            alt={`Avatar ${i + 1}`}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-white"
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg leading-relaxed px-2">
        Fantastic design, incredibly well documented, and an absolute pleasure
        to use! The customer support is one of the absolute best I've ever had
        the pleasure of interacting with. One of the best looking themes out
        there.
      </p>

      {/* Name + Role */}
      <div className="mt-6">
        <h3 className="font-bold text-white text-lg">Andrea Loob</h3>
        <p className="text-red-500 text-sm">Agency X</p>
      </div>
    </section>
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
