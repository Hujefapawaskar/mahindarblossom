import FlowerMark from "../common/FlowerMark";

const plans = [
  {
    type: "2 BHK",
    sold: true,
    size: "",
    price: "",
  },
  {
    type: "3 BHK",
    sold: false,
    size: "1800–1850 sq.ft.",
    price: "₹2.18cr Onwards",
  },
  {
    type: "4 BHK",
    sold: false,
    size: "2200–2350 sq.ft.",
    price: "₹2.88cr Onwards",
  },
];

const PricingSection = () => {
  return (
    <section className="bg-red-500 py-20 px-5">
      <div className="max-w-7xl mx-auto text-center text-white space-y-4">
        <h2 className="gsap-fade-up text-3xl sm:text-4xl font-serif font-bold">
          Unlock the Door to Affordable Luxury
        </h2>

        <p className="gsap-fade-up uppercase tracking-widest text-sm opacity-90">
          Explore Apartment Options and Pricing Details Tailored to Your Needs
        </p>

        <FlowerMark
          containerClassName="mt-4 text-red-400"
          lineClassName="h-px w-15 bg-red-300"
          className="h-14 w-full"
          alt="flowerdash"
        />
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`gsap-card relative bg-[#ffffffe1] rounded-2xl p-8 text-center shadow-xl
            transition-all duration-300 hover:scale-105`}
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              {plan.type}
            </h3>

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
              <>
                <p className="text-gray-500 text-sm mb-1">
                  {plan.size}
                </p>

                <p className="font-semibold text-gray-800 mb-5">
                  {plan.price}
                </p>

                <button
                  className="px-6 py-2 rounded-full border border-gray-400
                  text-gray-700 hover:bg-gray-800 hover:text-white transition"
                >
                  Get Quote
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
