import React from 'react'

const Pagesix = () => {
  return (
    <div>
      <div>
        <h1 className='text-center text-4xl font-serif font-bold mt-5'>Contact Us</h1>
      </div>


      <div className='flex flex-col lg:flex-row items-center  gap-8 mb-16 justify-center mt-10'>
        {/* {/*contact image*} */}
        <div>
        <img 
        src="/src/assets/web/mmpds.jpg" 
        alt="head" 
        className='w-24 h-24 mx-auto rounded-full border-4 border-blue-500 mb-4'
        />
        <p className='text-center font-semibold'>
        Head - Research Unit <br/> Mrs. M. M. P. D. Samarasekara <br/>
        <a href="mailto:researchunit@itum.mrt.ac.lk"
        className='text-blue-500 hover:text-blue-700 underline'>researchunit@itum.mrt.ac.lk</a> 
        </p>
        </div>

        <div>
        <img 
        src="/src/assets/web/kalpana.jpg" 
        alt="second" 
        className='w-24 h-24 mx-auto rounded-full border-4 border-blue-500 mb-4'
        />
        <p className='text-center font-semibold'>
        Conference Chair <br/> Dr. (Mrs.) Kalpana Galappaththi <br/> 
        <a href="mailto:kgalappaththi@itum.mrt.ac.lk"
        className='text-blue-500 hover:text-blue-700 underline'>kgalappaththi@itum.mrt.ac.lk</a> 
        </p>
        </div>

        <div>
        <img 
        src="/src/assets/web/pbtkp.jpg" 
        alt="head" 
        className='w-24 h-24 mx-auto rounded-full border-4 border-blue-500 mb-4'
        />
        <p className='text-center font-semibold'>
        Conference Co-chair <br/> Dr. (Mrs.) P. B. T. K. Premarathne <br/> 
        <a href="mailto:kpremarathne@itum.mrt.ac.lk"
        className='text-blue-500 hover:text-blue-700 underline'>kpremarathne@itum.mrt.ac.lk</a> 
        </p>
        </div>

        <div>
        <img 
        src="/src/assets/web/ndt.jpg" 
        alt="head" 
        className='w-24 h-24 mx-auto rounded-full border-4 border-blue-500 mb-4'
        />
        <p className='text-center font-semibold'>
        Conference Secretary <br/> Dr. (Ms.) Nadeeka D. Tissera <br/>
        <a href="mailto:nadeekat@itum.mrt.ac.lk"
        className='text-blue-500 hover:text-blue-700 underline'>nadeekat@itum.mrt.ac.lk</a> 
        </p>
        </div>
      </div>

      <div className='ml-10 mb-5 text-center justify-center'>
        <h2 className=' font-semibold font-serif text-2xl'>Conference Feedback</h2>
        <a
          href="https://forms.gle/FLpHq2WmRhFds7pLA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="items-center justify-center mx-auto mt-5 w-32 h-10 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Submit Here
          </button>
        </a>
      </div>
    </div>
  )
}

export default Pagesix
