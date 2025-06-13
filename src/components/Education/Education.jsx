import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-[#04D9FF] mx-auto mt-4 shadow-[0_0_10px_#04D9FF]"></div>
        <p className="text-gray-300 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Glowing Vertical Line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-[#04D9FF] h-full shadow-[0_0_10px_2px_#04D9FF]"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Education Card */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-[#04D9FF]/20 bg-[#0a0a23]/70 backdrop-blur-md shadow-[0_0_20px_1px_#04D9FF] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* School Logo */}
                <div className="w-24 h-16 bg-white rounded-md overflow-hidden shadow-[0_0_10px_#04D9FF]">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* School Details */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {edu.school}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">{edu.date}</p>
                </div>
              </div>

              {/* Grade & Description */}
              <p className="mt-4 text-[#04D9FF] font-semibold">
                Grade: {edu.grade}
              </p>
              <p className="mt-4 text-gray-300">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
