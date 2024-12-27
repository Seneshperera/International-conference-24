import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook

const Pageone = () => {
  const navigate = useNavigate();  // Initialize the navigate function

  return (
    <>
      <div className="bg-[url('/src/assets/web/bg1.png')] h-screen bg-cover bg-center flex items-center justify-center relative">
        <div className="absolute inset-0 bg-[url('/src/assets/web/bgoverlay.png')] bg-cover bg-center opacity-50"></div>

        <div className="text-center">
          <h1 className="text-6xl font-bold text-white font-serif">
            International Research <br /> Conference <br /> 2024
          </h1>
          <p className="text-slate-200 w-[1083px] mx-auto leading-relaxed text-1xl mt-5">
            Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
          </p>

          <div>
        <a
          href="https://forms.gle/GmADzxptGg1oCtT56"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mx-auto mt-5 w-32 h-10 bg-black text-white rounded-full hover:bg-gray-800 transform transition-all duration-300 ease-in-out hover:scale-105">
            Register
          </button>
        </a>
      </div>
        </div>

        <div className="absolute bottom-5 right-5">
          <img 
            src="./src/assets/web/date.png" 
            alt="date" 
            className="w-25 h-30" 
          />
        </div>
      </div>
    </>
  );
}

export default Pageone;
