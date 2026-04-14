function TablerArrowUp({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="M18 11l-6-6" />
      <path d="M6 11l6-6" />
    </svg>
  );
}

export default function Tema() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#000923] py-20">
      <div className="max-w-[1134px] w-full px-4 flex flex-col gap-[90px]">
        {/* Headline */}
        <div className="flex flex-col gap-[30px]">
          {/* Placeholder for journey-into-digital-innovation.svg - user will add later */}
          <h2 
            className="text-6xl font-normal leading-tight max-w-[757px]"
            style={{
              fontFamily: "'Zen Dots', sans-serif",
              background: "linear-gradient(90deg, #10E6F1 0%, #D000CB 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Journey Into Digital Innovation
          </h2>
          <p 
            className="text-white text-2xl leading-normal max-w-[738px]"
            style={{ fontFamily: "'Exo 2', sans-serif" }}
          >
            Jelajahi ide-ide, berkolaborasi dengan para inovator, dan uji
            kemampuanmu melalui perjalanan inovasi digital.
          </p>
        </div>

        {/* Card Container */}
        <div className="flex gap-8 justify-center flex-wrap">
          {/* Card Learn */}
          <div className="relative w-[340px] h-[400px] group">
            {/* Magenta glow on hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)",
                background: "rgba(208,0,203,0.8)",
                filter: "blur(60px)",
                transform: "scale(1.1)",
                zIndex: 0,
              }}
            />

            <div 
              className="relative w-full h-full bg-gradient-to-br from-[#10E6F1]/20 to-[#D000CB]/20 backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:shadow-[0_0_100px_rgba(208,0,203,0.9)]"
              style={{
                clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)",
                borderRadius: "24px",
                boxShadow: "0 0 80px rgba(208, 0, 203, 0.6), inset 0 0 20px rgba(208, 0, 203, 0.1)",
              }}
            >
              {/* Arrow Next */}
              <div 
                className="absolute top-[45%] right-12 w-12 h-12 bg-white text-gray-900 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 z-20"
                style={{ boxShadow: "0 0 20px rgba(208, 0, 203, 0.5)" }}
              >
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    padding: "2px",
                    background: "linear-gradient(180deg, #D000CB 0%, #10E6F1 100%)",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />
                <TablerArrowUp className="w-6 h-6 relative z-10" />
              </div>

              {/* Body Image - placeholder */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                className="absolute inset-0 w-full h-full object-cover opacity-50" 
                alt="Body" 
                src="/images/body-1.png" 
              />

              {/* Border overlay */}
              <div 
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)",
                  padding: "3px",
                  background: "linear-gradient(135deg, #10E6F1 0%, #D000CB 50%, #7B2FFE 100%)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              {/* Bottom gradient for text readability */}
              <div 
                className="absolute bottom-0 left-0 w-full h-52 z-[5] pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)" }}
              />

            </div>

            {/* Text Content - outside clip-path */}
            <div className="absolute bottom-8 left-10 z-20 max-w-[220px]">
              <div className="flex flex-col gap-2">
                <div 
                  className="text-white text-xl font-normal"
                  style={{ fontFamily: "'Zen Dots', sans-serif" }}
                >
                  Learning
                </div>
                <p 
                  className="text-white text-sm leading-snug line-clamp-2"
                  style={{ fontFamily: "'Exo 2', sans-serif" }}
                >
                  Exploring knowledge and ideas that inspire innovation in the digital era.
                </p>
              </div>
            </div>
          </div>

          {/* Card Collab */}
          <div className="relative w-[340px] h-[400px] group">
            {/* Magenta glow on hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)",
                background: "rgba(208,0,203,0.8)",
                filter: "blur(60px)",
                transform: "scale(1.1)",
                zIndex: 0,
              }}
            />

            <div 
              className="relative w-full h-full bg-gradient-to-br from-[#D000CB]/20 to-[#7B2FFE]/20 backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:shadow-[0_0_100px_rgba(208,0,203,0.9)]"
              style={{
                clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)",
                borderRadius: "24px",
                boxShadow: "0 0 80px rgba(208, 0, 203, 0.6), inset 0 0 20px rgba(208, 0, 203, 0.1)",
              }}
            >
              {/* Arrow */}
              <div 
                className="absolute top-[45%] right-12 w-12 h-12 bg-white text-gray-900 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 z-20"
                style={{ boxShadow: "0 0 20px rgba(208, 0, 203, 0.5)" }}
              >
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    padding: "2px",
                    background: "linear-gradient(180deg, #D000CB 0%, #10E6F1 100%)",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />
                <TablerArrowUp className="w-6 h-6 relative z-10" />
              </div>

              {/* Body Image - placeholder */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                className="absolute inset-0 w-full h-full object-cover opacity-50" 
                alt="Body" 
                src="/images/body-2.png" 
              />

              {/* Border overlay */}
              <div 
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)",
                  padding: "3px",
                  background: "linear-gradient(135deg, #10E6F1 0%, #D000CB 50%, #7B2FFE 100%)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              {/* Bottom gradient for text readability */}
              <div 
                className="absolute bottom-0 left-0 w-full h-52 z-[5] pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)" }}
              />

            </div>

            {/* Text Content - outside clip-path */}
            <div className="absolute bottom-8 left-10 z-20 max-w-[220px]">
              <div className="flex flex-col gap-2">
                <div 
                  className="text-white text-xl font-normal"
                  style={{ fontFamily: "'Zen Dots', sans-serif" }}
                >
                  Collaboration
                </div>
                <p 
                  className="text-white text-sm leading-snug line-clamp-2"
                  style={{ fontFamily: "'Exo 2', sans-serif" }}
                >
                  Turning ideas into innovation through teamwork and collaboration.
                </p>
              </div>
            </div>
          </div>

          {/* Card Compe */}
          <div className="relative w-[340px] h-[400px] group">
            {/* Magenta glow on hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)",
                background: "rgba(208,0,203,0.8)",
                filter: "blur(60px)",
                transform: "scale(1.1)",
                zIndex: 0,
              }}
            />

            <div 
              className="relative w-full h-full bg-gradient-to-br from-[#7B2FFE]/20 to-[#10E6F1]/20 backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:shadow-[0_0_100px_rgba(208,0,203,0.9)]"
              style={{
                clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)",
                borderRadius: "24px",
                boxShadow: "0 0 80px rgba(208, 0, 203, 0.6), inset 0 0 20px rgba(208, 0, 203, 0.1)",
              }}
            >
              {/* Arrow */}
              <div 
                className="absolute top-[45%] right-12 w-12 h-12 bg-white text-gray-900 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 z-20"
                style={{ boxShadow: "0 0 20px rgba(208, 0, 203, 0.5)" }}
              >
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    padding: "2px",
                    background: "linear-gradient(180deg, #D000CB 0%, #10E6F1 100%)",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />
                <TablerArrowUp className="w-6 h-6 relative z-10" />
              </div>

              {/* Body Image - placeholder */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                className="absolute inset-0 w-full h-full object-cover opacity-50" 
                alt="Body" 
                src="/images/body-3.png" 
              />

              {/* Border overlay */}
              <div 
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)",
                  padding: "3px",
                  background: "linear-gradient(135deg, #10E6F1 0%, #D000CB 50%, #7B2FFE 100%)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              {/* Bottom gradient for text readability */}
              <div 
                className="absolute bottom-0 left-0 w-full h-52 z-[5] pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)" }}
              />
            </div>

            {/* Text Content - outside clip-path */}
            <div className="absolute bottom-8 left-10 z-20 max-w-[220px]">
              <div className="flex flex-col gap-2">
                <div 
                  className="text-white text-xl font-normal"
                  style={{ fontFamily: "'Zen Dots', sans-serif" }}
                >
                  Competition
                </div>
                <p 
                  className="text-white text-sm leading-snug line-clamp-2"
                  style={{ fontFamily: "'Exo 2', sans-serif" }}
                >
                  Pushing boundaries by transforming skills and ideas into real innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
