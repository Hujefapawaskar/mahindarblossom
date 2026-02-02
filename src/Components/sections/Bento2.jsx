import FlowerMark from "../common/FlowerMark";

import aromaticGardenImg from "../../assets/bento1/AromaticGarden.png";
import spaciousKitchenImg from "../../assets/bento1/SpKitchen.jpg";
import partyLawnImg from "../../assets/bento1/partyLawn.jpg";
import multipurposeCourtImg from "../../assets/bento1/Multipurpose Court.jpg";
import modernBedroomImg from "../../assets/bento1/modernBedroom.jpg";
import gymImg from "../../assets/bento1/Gym.png";
import cricketNetsImg from "../../assets/bento1/CricketNets.jpg";
import olympicPoolImg from "../../assets/bento1/olympicPool.jpg";
import landscapedGardensImg from "../../assets/bento1/landscapeGarden.png";
import ventilatedFlatsImg from "../../assets/bento1/ventilatedFlats.jpg";
import largeBalconyImg from "../../assets/bento1/LargeBalcony.jpg";
import joggingTrackImg from "../../assets/bento1/joggingPark.png";

const galleryImages = [
  aromaticGardenImg,
  spaciousKitchenImg,
  partyLawnImg,
  multipurposeCourtImg,
  modernBedroomImg,
  gymImg,
  cricketNetsImg,
  olympicPoolImg,
  landscapedGardensImg,
  ventilatedFlatsImg,
  largeBalconyImg,
  joggingTrackImg,
];

const GallerySection = () => {
  return (
    <section className="py-20 px-5 bg-white">
      {/* Heading */}
      <div className="text-center mb-12 space-y-3">
        <h2 className="gsap-fade-up text-3xl sm:text-4xl font-serif font-bold text-gray-700">
          A <span className="text-red-500">Glimpse</span> of Life at Mahindra Blossom
        </h2>

        <p className="gsap-fade-up uppercase tracking-widest text-sm text-gray-500">
          View images of homes, amenities, and the surrounding environment
        </p>

        <FlowerMark
          containerClassName="mt-4 text-red-400"
          lineClassName="h-px w-15 bg-red-300"
          className="h-14 w-full"
          alt="flowersvg"
        />
      </div>

      {/* Responsive Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:grid-rows-4 auto-rows-[160px] sm:auto-rows-[180px] gap-4 overflow-hidden">
        {galleryImages.slice(0, 16).map((img, index) => (
          <div
            key={index}
            className="gsap-card relative overflow-hidden rounded-2xl shadow-lg group"
          >
            <img
              src={img}
              alt=""
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="w-full h-full object-cover
              transition-transform duration-700 group-hover:scale-[1.08]"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
