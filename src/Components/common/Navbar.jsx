import { MdOutlinePhoneInTalk } from "react-icons/md";
import mahindraLogo from "../../assets/mahindarlogo.webp";

const Navbar = ({ className = "", brandText = "", phone = "+91 9901717339" }) => {
  return (
    <div className={`absolute top-0 left-0 w-full z-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-5 py-2 sm:py-4 flex items-center justify-between gap-2 sm:gap-3 text-white">
        <div className="flex items-center gap-2 hero-item min-w-0">
          <img
            src={mahindraLogo}
            alt="Mahindra"
            className="h-6 sm:h-8 w-auto object-contain"
          />
          <p className="tracking-widest text-[10px] sm:text-sm uppercase text-gray-300 truncate">
            {brandText}
          </p>
        </div>

        <button className="bg-red-500 flex items-center justify-center gap-1.5 hover:bg-red-600 transition px-3 sm:px-5 py-1 sm:py-2 rounded-full shadow-xl text-[10px] sm:text-sm font-semibold hero-item whitespace-nowrap">
          <MdOutlinePhoneInTalk />
          <span>{phone}</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
