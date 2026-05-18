import React from "react";

const Banner = () => {
  return (
    // Locked h-screen with overflow-hidden ensures absolutely zero scrolling on any mobile device
    <div className="w-full h-screen bg-yellow-400 flex flex-col justify-center items-center px-4 text-black font-sans select-none animate-fade-in relative overflow-hidden">
      {/* --- TOP BLOCK: BIGGER LOGO & MENTORSHIP TAG --- */}
      <div className="flex flex-col items-center gap-4 mb-4 sm:mb-6 text-center w-full">
        {/* Sushil's Photo - Significantly Upsized */}
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 shrink-0">
          {/* Enhanced white neon ambient glow behind the expanded image */}
          <div className="absolute inset-0 rounded-full bg-white blur-xl opacity-90 animate-pulse"></div>

          <img
            src="/sushil's.jpg" // Pointing cleanly to your public asset folder root
            alt="Sushil Monga"
            className="w-full h-full rounded-full object-cover border-4 border-black relative z-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/150?text=SM";
            }}
          />
        </div>

        {/* High-contrast Mentorship Badge */}
        <div className="bg-black text-yellow-400 text-[10px] sm:text-xs font-black tracking-widest uppercase px-4 py-2 rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] border-2 border-black max-w-[90%] sm:max-w-none">
          1:1 mentorship for neet aspirants
        </div>
      </div>

      {/* --- MAIN TYPOGRAPHY BLOCK --- */}
      <div className="w-full text-center space-y-4 sm:space-y-5">
        {/* RE-NEET Header with "RE" highlighted in pure white */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] text-black uppercase">
          Lets crack <br />
          <span className="text-white">re</span>-neet 2026.
        </h1>

        {/* Presenter Credential Block */}
        <div className="flex flex-col items-center space-y-4">
          <p className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-black leading-none">
            by Sushil Monga
          </p>

          {/* --- CATCHY TYPE: ULTRA-HIGHLIGHTED AIIMS MBBS TICKET --- */}
          <div className="bg-white text-black border-4 border-black px-5 sm:px-8 py-3.5 sm:py-4 rounded-2xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] sm:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 hover:rotate-0 transition-all duration-300 w-fit mx-auto">
            <p className="text-base sm:text-2xl md:text-3xl font-black tracking-tight text-black uppercase leading-none flex items-center justify-center flex-wrap gap-2">
              <span>Pursuing MBBS at</span>
              <span className="bg-black text-yellow-400 px-2.5 py-1 rounded-xl text-sm sm:text-xl md:text-2xl font-black tracking-wide inline-block transform rotate-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">
                AIIMS BHATINDA
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
