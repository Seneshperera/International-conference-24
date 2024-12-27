import React from 'react';

const Pagetwo = () => {
  return (
    <div className="h-screen bg-gray-200 p-8">
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black">
          Tracks
        </h1>
      </div>

      {/* Track List */}
      <div className="space-y-12">
        <ul className="space-y-8">
          {/* Track 1 */}
          <li className="flex items-start">
            <span className="text-green-700 text-2xl mr-4">✔</span>
            <div>
              <h2 className="text-2xl text-black font-bold">
                Track 1: Sustainable Infrastructure and Mechanical Systems.
              </h2>
              <p className="text-sm text-gray-700 mt-2">
                Sustainable Construction Materials, Green Building Technologies, Transportation Systems, Sustainable Water Management, Climate Change, Environmental Sustainability, Sustainable Transportation, Urban Planning, Urban Drainage Systems, Water Recycling and Reuse, Energy-Efficient Systems
              </p>
            </div>
          </li>

          {/* Track 2 */}
          <li className="flex items-start">
            <span className="text-green-700 text-2xl mr-4">✔</span>
            <div>
              <h2 className="text-2xl text-black font-bold">
                Track 2: Renewable Energy Systems and Smart Grid Technologies.
              </h2>
              <p className="text-sm text-gray-700 mt-2">
                Advancements in Solar Technology, Wind Energy, Telecommunications Technologies, Smart Energy
              </p>
            </div>
          </li>

          {/* Track 3 */}
          <li className="flex items-start">
            <span className="text-green-700 text-2xl mr-4">✔</span>
            <div>
              <h2 className="text-2xl text-black font-bold">
                Track 3: Sustainable Materials and Green Manufacturing Processes.
              </h2>
              <p className="text-sm text-gray-700 mt-2">
                Biodegradable and Sustainable Polymers, Sustainable Textile Production, Processing Techniques, Material Science, Polymer Processing, Separation Processes, Recycling and Upcycling Technologies
              </p>
            </div>
          </li>

          {/* Track 4 */}
          <li className="flex items-start">
            <span className="text-green-700 text-2xl mr-4">✔</span>
            <div>
              <h2 className="text-2xl text-black font-bold">
                Track 4: Digital Solutions for Sustainable Engineering.
              </h2>
              <p className="text-sm text-gray-700 mt-2">
                AI and Machine Learning, Big Data, IoT for Smart Infrastructure Management, Simulation and Modeling Tools
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Pagetwo;
