import React,{ useState, useRef } from 'react'
import { gsap } from 'gsap'
import { useEffect } from 'react'

const GridImage = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const itemsList = [
    { id: 1, title: "All" },
    { id: 2, title: "Slider" },
    { id: 3, title: "Split" },
    { id: 4, title: "Custom" },
    { id: 5, title: "Video" }
  ];

  const gridItems = [
    { id: 1, type: "Slider", heading:"Artwork",
      subheading:"branding / design", ImgPath: "/grid/onepage1.jpg" },
    { id: 2, type: "Custom", heading:"3D Logo",
      subheading:"branding / design", ImgPath: "/grid/onepage2.jpg" },
    { id: 3, type: "Split", heading:"Space Lambo",
      subheading:"branding", ImgPath: "/grid/onepage3.jpg" },
    { id: 4, type: "Video", heading:"Mobile App",
      subheading:"App Development", ImgPath: "/grid/onepage4.jpg" },
    { id: 5, type: "Video", heading:"helvetica Movie",
      subheading:"branding", ImgPath: "/grid/onepage5.jpg" },
    { id: 6, type: "Slider", heading:"Fresh Bite",
      subheading:"branding", ImgPath: "/grid/onepage6.jpg" }
  ];

  
  const filteredItems = selectedFilter === "All"
    ? gridItems
    : gridItems.filter(item => item.type === selectedFilter);
  

  return (
    <div className="bg-black h-full text-white">
      {/* Filter Menu */}
      <div className="text-center pt-2 pb-7">
        <ul className="flex justify-center text-sm uppercase space-x-6">
          {itemsList.map(item => (
            <li
              key={item.id}
              onClick={() => setSelectedFilter(item.title)}
              className={`cursor-pointer ${
                selectedFilter === item.title ? "text-zinc-100 border-b-2" : "text-zinc-400"} hover:border-b-2 text-zinc-400 hover:text-zinc-100 font-semibold`}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 px-0">
        {filteredItems.map((image, index) => (
          <div key={image.id} className="relative aspect-auto bg-gray-800 group">
            <div className='absolute hidden bg-cover h-full w-full bg-transparent group-hover:bg-black/85 group-hover:flex flex-col items-center justify-center z-10'>
              <h3 className='text-zinc-50 font-semibold text-xl'>
                {image.heading}
              </h3>
              <p className='text-zinc-500 text-sm font-medium'>
                {image.subheading}
              </p>
            </div>
            <img 
              src={image.ImgPath}
              alt={`Grid ${image.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridImage;
