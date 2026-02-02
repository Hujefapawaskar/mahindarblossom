import FlowerMark from "../common/FlowerMark";
import aboutImg1 from "../../assets/stack1card.png"; // main garden image
import aboutImg2 from "../../assets/stack2card.jpg"; // background overlap image
import sec2Bg from "../../assets/sec2bg.png";
const AboutSection = () => {
  return (
    <section
      className="relative isolate w-full py-20 overflow-hidden bg-pink-50"
      style={{ backgroundColor: "#ffcfd9", color: "#212121" }}
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={sec2Bg}
          alt="treebg"
          className="h-full w-full object-cover opacity-45 blur-sm"
          loading="lazy"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6 text-center lg:text-left">
          {/* Heading */}
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="gsap-fade-up text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-black">
              <span className="text-red-500">About</span>{" "}
              <span className="text-black">Mahindra Blossom</span>
            </h2>

            <p className="gsap-fade-up mt-3 tracking-widest text-xs sm:text-sm text-black uppercase text-center lg:text-left">
              Premium Apartments in Whitefield, Bengaluru
            </p>

            <FlowerMark
              containerClassName="mt-4 text-red-400 justify-center lg:justify-start"
              lineClassName="h-px w-16 sm:w-20 md:w-24 bg-red-300"
              className="mx-auto"
            />
          </div>

          {/* Paragraphs */}
          <div className="gsap-fade-up space-y-5 text-black leading-relaxed text-sm sm:text-base">
            <p>
              <b>Mahindra Blossom</b> is a thoughtfully designed premium residential
              apartment project in Whitefield, Bangalore, developed by{" "}
              <b>Mahindra Lifespaces</b>, part of the trusted Mahindra Group.
              Known for quality construction, transparency, and sustainable
              development, Mahindra Lifespaces has delivered landmark residential
              communities across India.
            </p>

            <p>
              Strategically located near <b>Hope Farm Junction, Whitefield</b>,
              Mahindra Blossom offers <b>2 BHK, 3 BHK, and 4 BHK</b> luxury apartments
              crafted for modern families, professionals, and long-term investors.
              The project blends urban convenience with green living.
            </p>

            <p>
              With excellent connectivity to <b>ITPL</b>, major tech parks,
              schools, hospitals, shopping hubs, and a fully operational metro
              station, Mahindra Blossom ensures everyday comfort with strong
              investment potential.
            </p>

            <p className="italic font-medium text-black">
              Mahindra Blossom is not just a home — it’s a lifestyle upgrade backed
              by the reliability of a trusted developer.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="gsap-image relative flex justify-center lg:justify-end mt-10 lg:mt-0 md:right-50">
          {/* Back image */}
          <div className="absolute -top-10 lg:left-50 w-52 h-72 sm:left-10 sm:w-60 sm:h-80 md:left-60 md:w-75 md:h-100 rounded-3xl overflow-hidden shadow-xl -rotate-5">
            <img
              src={aboutImg2}
              alt="Background image of Mahindra Blossom"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Front image */}
          <div className="relative w-60 h-80 sm:w-75 sm:h-100 md:w-80 md:h-100 rounded-3xl overflow-hidden shadow-2xl ">
            <img
              src={aboutImg1}
              alt="Front image of Mahindra Blossom"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
