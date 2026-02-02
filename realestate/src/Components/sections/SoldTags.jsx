import FlowerMark from "../common/FlowerMark";

const floorPlans = [
  { title: "Master Plan", sold: false },
  { title: "2 BHK", sold: true },
  { title: "2 BHK (Large)", sold: true },
  { title: "3 BHK", sold: false },
  { title: "3.5 BHK", sold: false },
  { title: "4 BHK", sold: false },
];

const FloorPlansSection = () => {
  return (
    <section className="bg-red-500 py-20 px-5">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center text-white space-y-4">
        <h2 className="gsap-fade-up text-3xl sm:text-4xl font-serif font-bold">
          Thoughtfully Designed Floor Plans
        </h2>

        <p className="gsap-fade-up uppercase tracking-widest text-sm opacity-90">
          Smart layouts that maximize space, light, and everyday comfort
        </p>

        <FlowerMark
          containerClassName="mt-4 text-red-400"
          lineClassName="h-px w-15 bg-red-300"
          className="h-14 w-full"
          alt="flowersvg"
        />
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {floorPlans.map((plan, index) => (
          <div
            key={index}
            className="gsap-card relative bg-white rounded-2xl p-6 shadow-xl
            transition-all duration-300 hover:scale-105 text-center"
          >
            {/* Tag */}
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 
              bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-xs font-bold shadow">
              {plan.title}
            </span>

            {/* Image placeholder with blur */}
            <div className="relative h-40 rounded-xl mb-5 overflow-hidden">
              <div className="absolute inset-0 bg-gray-200 blur-[2px]" />
              <div className="absolute inset-0 bg-black/25" />
              <div className="relative z-10 h-full flex items-center justify-center">
                {plan.sold ? (
                  <div className="relative inline-block rounded-2xl p-3 border-2 border-red-900 bg-white rotate:-6deg">
                    <span className="inline-block border-2 border-red-900 text-white
                      px-6 py-2 text-xl font-extrabold tracking-widest uppercase
                      rotate-[-4deg] bg-red-700 shadow-[0_10px_25px_rgba(127,29,29,0.35)]
                      line-through decoration-white decoration-4">
                      SOLD OUT
                    </span>
                  </div>
                ) : (
                  <button
                    className="px-6 py-2 rounded-full border border-white/70
                    text-black bg-white/80 backdrop-blur-sm
                    transition hover:text-white hover:bg-linear-to-r hover:from-red-500 hover:via-rose-500 hover:to-orange-500 hover:border-transparent"
                  >
                    View Plan
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FloorPlansSection;
