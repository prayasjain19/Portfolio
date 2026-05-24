import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import { stats } from '../../constants';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-4">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[white] mb-4 leading-tight">
            Prayas Jain
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#04D9FF] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Full Stack Developer',
                'Software Engineer',
                'Front End Developer',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#04D9FF]">{cursor}</span>
              )}
            />
          </h3>

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            Full Stack Developer with 9+ months of hands-on experience
            shipping production-grade web applications. Currently building
            headless e-commerce solutions at Webkul using Next.js and
            GraphQL. I love turning complex business requirements into
            clean, performant code that scales.
          </p>

          <a
            href="https://drive.google.com/file/d/1UzmnEEmHMefaz8S2ZXW7ojxg6mhi-iAw/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #04D9FF, #04B0DD)',
              boxShadow: '0 0 2px #04D9FF, 0 0 2px #04D9FF, 0 0 40px #04D9FF',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* You can uncomment this part and update image later
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[22rem] md:h-[22rem] lg:w-[26rem] lg:h-[26rem] border-4 border-[#04D9FF] rounded-full overflow-hidden"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Prayas Jain"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(4,217,255,0.5)]"
            />
          </Tilt>
        </div>
        */}
      </div>

      {/* Stats / Achievements Strip */}
      <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-gray-900/40 backdrop-blur-md rounded-2xl border border-gray-800 shadow-[0_0_15px_1px_rgba(4,217,255,0.05)] hover:shadow-[0_0_20px_1px_rgba(4,217,255,0.25)] hover:border-[#04D9FF]/40 transition-all duration-300 group"
          >
            <span className="text-3xl sm:text-4xl font-extrabold text-[#04D9FF] group-hover:scale-110 transition-transform duration-300">
              {stat.value}
            </span>
            <span className="text-sm font-semibold text-white mt-2 text-center">
              {stat.label}
            </span>
            <span className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
              {stat.platform}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
