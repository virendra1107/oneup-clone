import { useState, useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const GridImage = () => {
  const containerRef = useRef(null);
  const gridRefs = useRef([]);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [displayedItems, setDisplayedItems] = useState([]);

  const itemsList = [
    { id: 1, title: "All" },
    { id: 2, title: "Slider" },
    { id: 3, title: "Split" },
    { id: 4, title: "Custom" },
    { id: 5, title: "Video" }
  ];

  const allItems = [
    { id: 1, type: "Slider", heading: "Artwork", subheading: "branding / design", ImgPath: "/grid/onepage1.jpg" },
    { id: 2, type: "Custom", heading: "3D Logo", subheading: "branding / design", ImgPath: "/grid/onepage2.jpg" },
    { id: 3, type: "Split", heading: "Space Lambo", subheading: "branding", ImgPath: "/grid/onepage3.jpg" },
    { id: 4, type: "Video", heading: "Mobile App", subheading: "App Development", ImgPath: "/grid/onepage4.jpg" },
    { id: 5, type: "Video", heading: "helvetica Movie", subheading: "branding", ImgPath: "/grid/onepage5.jpg" },
    { id: 6, type: "Slider", heading: "Fresh Bite", subheading: "branding", ImgPath: "/grid/onepage6.jpg" }
  ];

  useGSAP(() => {
    if (containerRef.current) {
      gsap.from(containerRef.current, {
        y: 10,
        opacity: 0.6,
        duration: 0.1,
        ease: 'power1.in',
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    }
  }, []);

  // Initial load
  useLayoutEffect(() => {
    setDisplayedItems(allItems); // show all initially
  }, []);

  // Animate items in when they appear
  useLayoutEffect(() => {
    gsap.fromTo(
      ".grid-item",
      { x: 400, opacity: 1, delay: -0.4 },
      { x: 0, opacity: 1, duration: 0.6, stagger: 0, ease: "power2.out" }
    );
  }, [displayedItems]);

  const handleFilterChange = (title) => {
    if (title === selectedFilter) return; // no change

    const newItems = title === "All"
      ? allItems
      : allItems.filter(item => item.type === title);

    // Animate out current items
    gsap.to(".grid-item", {
      x: -20,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
      stagger: 0,
      onComplete: () => {
        setSelectedFilter(title);
        setDisplayedItems(newItems);
      }
    });
  };

  return (
    <div className="bg-black min-h-screen text-white px-4 py-8">
      <div ref={containerRef}>
        {/* Filter Menu */}
        <div className="text-center pt-2 pb-7">
          <ul className="flex justify-center text-sm uppercase space-x-6">
            {itemsList.map(item => (
              <li
                key={item.id}
                onClick={() => handleFilterChange(item.title)}
                className={`cursor-pointer transition duration-300 ${selectedFilter === item.title ? "text-white border-b-2" : "text-zinc-400"
                  } hover:text-white hover:border-b-2 font-semibold`}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {displayedItems.map((image, index) => (
            <div
              key={image.id}
              className="relative bg-gray-800 aspect-auto group overflow-hidden"
            >
              <div className="absolute hidden bg-cover h-full w-full bg-transparent group-hover:bg-black/85 group-hover:flex flex-col items-center justify-center z-10">
                <h3 className="text-zinc-50 font-semibold text-xl">{image.heading}</h3>
                <p className="text-zinc-500 text-sm font-medium">{image.subheading}</p>
              </div>
              <img ref={el => (gridRefs.current[index] = el)}
                src={image.ImgPath}
                alt={`Grid ${image.id}`}
                className="grid-item w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridImage;
