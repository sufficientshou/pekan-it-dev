import { BASE_PATH } from '@/config/constants';

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
    <div className="w-full flex items-center justify-center bg-[#000923] py-10 max-md:!py-10" style={{ minHeight: "100vh" }}>
      <div className="max-w-[1134px] w-full px-4 flex flex-col gap-[90px] max-md:!gap-[40px]">
        
        <div className="flex flex-col gap-[30px] max-md:!gap-[20px] max-md:!items-center">
          
          <h2 
            className="text-7xl font-normal leading-tight max-w-[757px] max-md:!text-4xl max-md:!text-center"
            style={{
              fontFamily: "'Zen Dots', sans-serif",
            }}
          >
            <span className="text-white">Journey Into </span>
            <span
              style={{
                background: "linear-gradient(90deg, #ff00ff, #00ffff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              } as React.CSSProperties}
            >
              Digital Innovation
            </span>
          </h2>
          <p 
            className="text-white text-2xl leading-normal max-w-[738px] max-md:!text-base max-md:!text-center max-md:!px-2"
            style={{ fontFamily: "'Exo 2', sans-serif" }}
          >
            Jelajahi ide-ide, berkolaborasi dengan para inovator, dan uji
            kemampuanmu melalui perjalanan inovasi digital.
          </p>
        </div>

        <div className="flex -space-x-32 justify-center flex-wrap max-md:space-x-0 max-md:!flex-nowrap max-md:!overflow-x-auto max-md:[&::-webkit-scrollbar]:!hidden max-md:!snap-x max-md:!snap-mandatory max-md:-mx-4 max-md:!px-6 max-md:!w-screen max-md:!justify-start max-md:!gap-2">
          
          <div className="relative w-[340px] h-[400px] group max-md:!flex-shrink-0 max-md:!snap-center max-md:!w-[300px]">
            <div 
              className="absolute inset-0 w-full h-full"
              style={{
                clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)",
                background: "linear-gradient(180deg, #D000CB 0%, #B020E0 25%, #7B2FFE 50%, #4B8FFF 75%, #10E6F1 100%)",
                borderRadius: "24px",
                filter: "drop-shadow(0 0 20px rgba(208, 0, 203, 0.6))",
              }}
            >

              <div 
                className="absolute bottom-0 left-0 w-full h-1/2"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
                  clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)",
                }}
              />
            </div>

            <div 
              className="absolute w-full h-full bg-gradient-to-br from-[#10E6F1]/20 to-[#D000CB]/20 backdrop-blur-sm overflow-hidden"
              style={{
                clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)",
                borderRadius: "24px",
                top: "8px",
                left: "8px",
                width: "calc(100% - 16px)",
                height: "calc(100% - 16px)",
              }}
            >
              
              <div 
                className="absolute top-[45%] right-8 w-12 h-12 bg-white text-gray-900 rounded-full flex items-center justify-center z-20"
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
                <TablerArrowUp className="w-6 h-6 relative z-10 rotate-90" />
              </div>

              <img loading="lazy"
                className="absolute inset-0 w-full h-full object-cover" 
                alt="Body" 
                src={`${BASE_PATH}/images/body-1.png`} 
              />

              <div 
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)",
                  padding: "4px",
                  background: "linear-gradient(135deg, #D000CB 0%, #7B2FFE 100%)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              <div 
                className="absolute bottom-0 left-0 w-full h-52 z-[5] pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)" }}
              />

            </div>

            <div className="absolute bottom-6 left-0 w-[85%] z-20 flex flex-col items-center px-2">
              <div className="flex flex-col gap-2 items-center text-center max-w-[240px]">
                <div 
                  className="text-white text-xl font-normal"
                  style={{ fontFamily: "'Zen Dots', sans-serif" }}
                >
                  Learning
                </div>
                <p 
                  className="text-white text-sm leading-snug line-clamp-3"
                  style={{ fontFamily: "'Exo 2', sans-serif" }}
                >
                  Exploring knowledge and ideas that inspire innovation in the digital era.
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-[340px] h-[400px] group max-md:!flex-shrink-0 max-md:!snap-center max-md:!w-[300px]">
            <div 
              className="absolute inset-0 w-full h-full"
              style={{
                clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)",
                background: "linear-gradient(180deg, #D000CB 0%, #B020E0 25%, #7B2FFE 50%, #4B8FFF 75%, #10E6F1 100%)",
                borderRadius: "24px",
                filter: "drop-shadow(0 0 20px rgba(16, 230, 241, 0.6))",
              }}
            >
              <div 
                className="absolute bottom-0 left-0 w-full h-1/2"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
                  clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)",
                }}
              />
            </div>

            <div 
              className="absolute w-full h-full bg-gradient-to-br from-[#D000CB]/20 to-[#7B2FFE]/20 backdrop-blur-sm overflow-hidden"
              style={{
                clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)",
                borderRadius: "24px",
                top: "8px",
                left: "8px",
                width: "calc(100% - 16px)",
                height: "calc(100% - 16px)",
              }}
            >
              
              <div 
                className="absolute top-[45%] right-8 w-12 h-12 bg-white text-gray-900 rounded-full flex items-center justify-center z-20"
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
                <TablerArrowUp className="w-6 h-6 relative z-10 rotate-90" />
              </div>

              <img loading="lazy"
                className="absolute inset-0 w-full h-full object-cover" 
                alt="Body" 
                src={`${BASE_PATH}/images/body-2.png`} 
              />

              <div 
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)",
                  padding: "4px",
                  background: "linear-gradient(135deg, #10E6F1 0%, #D000CB 100%)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              <div 
                className="absolute bottom-0 left-0 w-full h-52 z-[5] pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)" }}
              />

            </div>

            <div className="absolute bottom-6 left-0 w-[85%] z-20 flex flex-col items-center px-2">
              <div className="flex flex-col gap-2 items-center text-center max-w-[240px]">
                <div 
                  className="text-white text-xl font-normal"
                  style={{ fontFamily: "'Zen Dots', sans-serif" }}
                >
                  Collaboration
                </div>
                <p 
                  className="text-white text-sm leading-snug line-clamp-3"
                  style={{ fontFamily: "'Exo 2', sans-serif" }}
                >
                  Turning ideas into innovation through teamwork and collaboration.
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-[340px] h-[400px] group max-md:!flex-shrink-0 max-md:!snap-center max-md:!w-[300px]">

            <div 
              className="absolute inset-0 w-full h-full"
              style={{
                clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)",
                background: "linear-gradient(180deg, #D000CB 0%, #B020E0 25%, #7B2FFE 50%, #4B8FFF 75%, #10E6F1 100%)",
                borderRadius: "24px",
                filter: "drop-shadow(0 0 20px rgba(123, 47, 254, 0.6))",
              }}
            >

              <div 
                className="absolute bottom-0 left-0 w-full h-1/2"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
                  clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)",
                }}
              />
            </div>

            <div 
              className="absolute w-full h-full bg-gradient-to-br from-[#7B2FFE]/20 to-[#10E6F1]/20 backdrop-blur-sm overflow-hidden"
              style={{
                clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)",
                borderRadius: "24px",
                top: "8px",
                left: "8px",
                width: "calc(100% - 16px)",
                height: "calc(100% - 16px)",
              }}
            >

              <img loading="lazy"
                className="absolute inset-0 w-full h-full object-cover" 
                alt="Body" 
                src={`${BASE_PATH}/images/body-3.png`} 
              />

              <div 
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)",
                  padding: "4px",
                  background: "linear-gradient(135deg, #7B2FFE 0%, #10E6F1 100%)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              <div 
                className="absolute bottom-0 left-0 w-full h-52 z-[5] pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)" }}
              />
            </div>

            <div className="absolute bottom-6 left-0 w-[85%] z-20 flex flex-col items-center px-2">
              <div className="flex flex-col gap-2 items-center text-center max-w-[240px]">
                <div 
                  className="text-white text-xl font-normal"
                  style={{ fontFamily: "'Zen Dots', sans-serif" }}
                >
                  Competition
                </div>
                <p 
                  className="text-white text-sm leading-snug line-clamp-3"
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
