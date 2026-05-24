import React from "react";
import { certifications } from "../../constants";
import { FaCertificate } from "react-icons/fa";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CERTIFICATIONS</h2>
        <div className="w-32 h-1 bg-[#04D9FF] mx-auto mt-4 shadow-[0_0_10px_#04D9FF]"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Professional certifications and training programs that have shaped my
          expertise
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="group relative bg-gray-900 backdrop-blur-md rounded-2xl border border-gray-700 p-6 
            shadow-[0_0_15px_1px_rgba(4,217,255,0.15)] 
            hover:shadow-[0_0_25px_1px_rgba(4,217,255,0.4)] 
            hover:border-[#04D9FF]/50
            transition-all duration-300 hover:-translate-y-1"
          >
            {/* Accent glow bar at top */}
            <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#04D9FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="flex items-start space-x-4">
              {/* Certificate Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#04D9FF]/10 flex items-center justify-center border border-[#04D9FF]/20 group-hover:border-[#04D9FF]/50 transition-colors duration-300">
                <FaCertificate className="text-[#04D9FF] text-xl" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white group-hover:text-[#04D9FF] transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{cert.issuer}</p>
                <p className="text-xs text-gray-500 mt-2">{cert.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
