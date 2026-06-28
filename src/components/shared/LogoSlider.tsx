import Image from "next/image";
import { partnerLogos } from "../../data/landing";

export default function LogoSlider() {
  // Duplicate logos to ensure seamless looping
  const duplicatedLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <div className="relative w-full overflow-hidden py-10 bg-white/40 border-y border-gray-150/50 backdrop-blur-sm">
      {/* Soft gradient masks for the sides of the slider */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

      {/* Marquee Container */}
      <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
        {duplicatedLogos.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex items-center space-x-3 mx-6 md:mx-10 px-6 py-4 rounded-2xl glass-effect border border-gray-100 hover:border-primary-teal/20 transition-all duration-300 shadow-sm"
          >
            <Image
              src={partner.logoUrl}
              alt={partner.name}
              width={100}
              height={100}
              className="text-2xl sm:text-3xl filter drop-shadow-sm select-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
