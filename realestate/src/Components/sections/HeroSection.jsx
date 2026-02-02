import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlowingButton from "../common/GlowingButton";
import Navbar from "../common/Navbar";
import building from "../../assets/building.jpg";
import heroDoor from "../../assets/herodoor.gif";
import sec2Bg from "../../assets/sec2bg.png";
import FlowerMark from "../common/FlowerMark";

gsap.registerPlugin(ScrollTrigger);

const features = [
  "8 Acres | 1 Towers | 6 Wings | 733 Units",
  "Make it yours at just 7.5% down payment",
  "Abutting Hopefarm metro station",
  "IGBC Gold rated green home",
  "75+ Years of Mahindra Trust",
];

const HeroSection = () => {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const glowRef = useRef(null);
  const gbuttonRef = useRef(null);
  const glowRafRef = useRef(0);
  const lastPointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!heroRef.current || !bgRef.current || !glowRef.current) return;
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      gsap.from(".hero-item", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.to(bgRef.current, {
        y: 120,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      if (gbuttonRef.current) {
        gsap.from(gbuttonRef.current, {
          opacity: 0,
          scale: 0.8,
          duration: 1.2,
          ease: "power3.out",
        });
      }
    }, heroRef);

    if (prefersReducedMotion) return () => ctx.revert();

    const moveGlow = (e) => {
      lastPointerRef.current = { x: e.clientX - 150, y: e.clientY - 150 };
      if (glowRafRef.current) return;
      glowRafRef.current = requestAnimationFrame(() => {
        glowRafRef.current = 0;
        gsap.to(glowRef.current, {
          x: lastPointerRef.current.x,
          y: lastPointerRef.current.y,
          duration: 0.4,
          ease: "power2.out",
        });
      });
    };
    window.addEventListener("mousemove", moveGlow, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveGlow);
      cancelAnimationFrame(glowRafRef.current);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen bg-black overflow-hidden">
      {/* Mouse Glow */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed top-0 left-0 w-75 h-75
        rounded-full bg-red-500/20 blur-[120px]"
      />

      {/* Background */}
      <img
        ref={bgRef}
        src={building}
        className="absolute inset-0 w-full h-full object-cover opacity-40 scale-110"
        alt=""
        loading="eager"
        decoding="async"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 py-20 grid lg:grid-cols-2 gap-14 items-center">
        {/* NAVBAR */}
        <Navbar />

        {/* LEFT */}
        <div className="hidden lg:block text-white space-y-6 pt-16">
          <div className="hero-item">
            <h1 className="text-4xl sm:text-5xl font-bold">
              <span className="text-red-500">Mahindra</span> Blossom
            </h1>
            <p className="italic tracking-widest text-gray-300 mt-2 text-sm font-semibold">
              HOME OF POSITIVE ENERGY
            </p>
          </div>

          <FlowerMark
            showLines={false}
            className="hero-item w-40 sm:w-56 md:w-72 lg:w-80 h-auto mask-b-from-0%"
            alt="Flowers"
          />
          <p className="text-gray-300 max-w-md hero-item font-bold">
            2, 3 & 4BHK premium homes in <br />Hopefarm Jn., Whitefield.
          </p>

          {/* CTA */}
          <GlowingButton ref={gbuttonRef}>₹1.88cr Onwards</GlowingButton>

          {/* Features */}
          <ul className="pt-4 space-y-3 font-bold text-sm text-gray-200 hero-item">
            {features.map((f, i) => (
              <li key={i}>🌸 {f}</li>
            ))}
          </ul>
        </div>

        {/* RIGHT (desktop) */}
        <div className="hidden lg:flex justify-center hero-item">
          <div
            className="relative w-56 sm:w-72 md:w-80 lg:w-96 overflow-hidden transition-transform duration-500 hover:scale-105"
            style={{ borderRadius: " 50% 50%  16px 16px" }}
          >
            <img
              src={heroDoor}
              alt="Mahindra Blossom door"
              className="relative w-full lg:h-150 object-contain shadow-2xl"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
      {/* MOBILE GLASS HERO (sm & md only) */}
<div className="block lg:hidden mt-10 hero-item">
  <div
    className="
    bg-white/10 backdrop-blur-xl
    border border-white/20
    rounded-2xl
    p-5
    shadow-2xl
    text-center
    space-y-4
    max-w-sm mx-auto
    "
  >
    <h2 className="text-2xl font-bold text-white">
      <span className="text-red-500">Mahindra</span> Blossom
    </h2>

    <p className="italic tracking-widest text-gray-300 text-xs font-semibold">
      HOME OF POSITIVE ENERGY
    </p>

    <p className="text-gray-200 text-sm font-semibold">
      2, 3 & 4BHK premium homes in <br />
      Hopefarm Jn., Whitefield.
    </p>

    {/* CTA */}
    <div className="flex justify-center">
      <GlowingButton>₹1.88cr Onwards</GlowingButton>
    </div>

    {/* Features */}
    <ul className="space-y-2 text-xs font-bold text-gray-100 pt-2">
      {features.map((f, i) => (
        <li key={i}>🌸 {f}</li>
      ))}
    </ul>
  </div>
        </div>

      {/* HERO DOOR + mobile background (sm & md only) */}
      <div className="lg:hidden mt-10 pb-6 flex justify-center hero-item">
        <div
          className="relative w-56 sm:w-72 md:w-80 overflow-hidden transition-transform duration-500 hover:scale-105"
          style={{ borderRadius: "50% 50% 16px 16px" }}
        >
          <img
            src={sec2Bg}
            alt="Mahindra Blossom background"
            className="absolute inset-0 h-full w-full object-cover opacity-60 blur-[2px]"
            loading="lazy"
            decoding="async"
          />
          <img
            src={heroDoor}
            alt="Mahindra Blossom door"
            className="relative w-full object-contain shadow-2xl"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
