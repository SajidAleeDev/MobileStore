import { icons } from "@/icons";
import { useState } from "react";

function Carouse() {
  const images = ["./Images/IPhone.png"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  //   if (currentImageIndex === images.length - 1) {
  //     setCurrentImageIndex(0);
  //   }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="relative container  mx-auto mt-4 hover:opacity-70  ">
      <div className="carousel">
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full hover:bg-[#F3F9FB]"
          onClick={prevImage}
        >
          <icons.left />
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white   p-2 rounded-full hover:bg-[#F3F9FB]"
          onClick={nextImage}
        >
          <icons.Right />
        </button>
        <img
          className="mx-auto"
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        />
      </div>
    </div>
  );
}

export default Carouse;
