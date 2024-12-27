import React from 'react'

const Pagefive= () => {
  return (
    <div>
         <div className="bg-[url('/src/assets/web/five.jfif')] h-screen bg-cover bg-center flex items-center justify-center relative">
      <div className="">
       
        <h1 className="text-4xl text-center mb-12 font-bold">Our Speakers</h1>

        {/* Cards Section */}
        <div className="flex flex-col lg:flex-row items-center  gap-8 mb-16">
          {/* Card 1 */}
          <div className="card border p-4 w-full max-w-md text-center rounded-lg transition-all hover:border-blue-500 hover:shadow-lg ">
            <h2 className="text-xl font-bold mb-2">KeyNote Speaker</h2>
            <img 
            src="/src/assets/web/keynote.jpg" 
            alt="keynote"
            className='w-24 h-24 mx-auto rounded-full border-4 border-blue-500 mb-4'
             />
            <h3 className="text-xl font-bold mb-2">Dr. Ishara Dharmasena</h3>
            <p>
            Wolfson School of Mechanical, Electrical & <br /> Manufacturing Engineering <br />
            Loughborough University, England
            </p>
          </div>
          {/* Card 2 */}
          <div className="card border p-4 w-full max-w-md text-center rounded-lg transition-all hover:border-blue-500 hover:shadow-lg">
            <h2 className="text-xl font-bold mb-2">Cheif Guest</h2>
            <img 
            src="/src/assets/web/cheif.jpg" 
            alt="keynote"
            className='w-24 h-24 mx-auto rounded-full border-4 border-blue-500 mb-4'
             />
            <h3 className="text-xl font-bold mb-2">Prof. U. P. Nawagamuwa</h3>
            <p>
            Department of Civil Engineering, <br /> University of Moratuwa <br />
            
            </p>
          </div>
          {/* Card 3 */}
          <div className="card border p-4 w-full max-w-md text-center rounded-lg transition-all hover:border-blue-500 hover:shadow-lg">
            <h2 className="text-xl font-bold mb-2">Special Speaker</h2>
            <img 
            src="/src/assets/web/special.jpg" 
            alt="keynote"
            className='w-24 h-24 mx-auto rounded-full border-4 border-blue-500 mb-4'
             />
            <h3 className="text-xl font-bold mb-2">Assoc. Prof. W. B. M. Thoradeniya</h3>
            <p>
            Division of Civil Engineering Technology <br /> Institute of Technology <br />
            University of Moratuwa
            </p>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Pagefive
