import React from 'react';

const Pagethree = () => {
  return (
    <div className="bg-[url('/src/assets/web/schedule1.jfif')] h-screen bg-cover bg-center flex items-center justify-center relative">
      <div className="">
        
        <h1 className="text-4xl text-center mb-12 font-bold">Important Dates</h1>

        {/* Cards Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-16">
          {/* Card 1 */}
          <div className="card border p-4 w-full max-w-md text-center rounded-lg transition-all hover:border-blue-500 hover:shadow-lg">
            <h2 className="text-xl font-bold mb-2">Submission Deadline</h2>
            <p>
              23rd September 2024 <br /> 23.00 hrs <br />
              (Sri Lanka time | GMT +5.30)
            </p>
          </div>
          {/* Card 2 */}
          <div className="card border p-4 w-full max-w-md text-center rounded-lg transition-all hover:border-blue-500 hover:shadow-lg">
            <h2 className="text-xl font-bold mb-2">Conference</h2>
            <p>
              18th December 2024 <br /> 08.00 hrs <br />
              (Sri Lanka time | GMT +5.30)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagethree;
