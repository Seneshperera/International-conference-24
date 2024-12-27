import React from 'react'

const Pagefour = () => {
  return (
    <div className='bg-slate-50 h-full p-8'>
      <div className="text-3xl font-bold font-serif mb-8">
          <h1>Guidelines for Submission</h1>
        </div>

        {/* Submit List */}
        <div className="space-y-12">
          <ul className="space-y-8">
            {/* Submit 1 */}
            <li className="flex items-start">
              <span className="text-green-700 text-1xl mr-4">✔</span>
              <div>
                <h2 className="text-1xl text-black font-semibold">
                  We welcome contributions that address a wide range of topics
                  related to innovative and cross-disciplinary approaches to
                  sustainable engineering practices.
                </h2>
              </div>
            </li>

            {/* Submit 2 */}
            <li className="flex items-start">
              <span className="text-green-700 text-1xl mr-4">✔</span>
              <div>
                <h2 className="text-1xl text-black font-semibold">
                  Manuscripts should be original, unpublished, and not under
                  consideration elsewhere.
                </h2>
              </div>
            </li>

            {/* Submit 3 */}
            <li className="flex items-start">
              <span className="text-green-700 text-1xl mr-4">✔</span>
              <div>
                <h2 className="text-1xl text-black font-semibold">
                  All submissions will undergo a peer-review process to ensure
                  high academic standards.
                </h2>
              </div>
            </li>

            {/* Submit 4 */}
            <li className="flex items-start">
              <span className="text-green-700 text-1xl mr-4">✔</span>
              <div>
                <h2 className="text-1xl text-black font-semibold">
                  Please submit both Word and PDF versions of your manuscript.
                </h2>
              </div>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Pagefour
