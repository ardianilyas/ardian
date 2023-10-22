import Image from 'next/image'
import next from '../../../public/next.svg'

import skills from '../../skills.json'

export default function Skills() {
  return (
    <div className="container mt-12">
      <h1 className='text-4xl font-bold text-center'>Skills</h1>
      <p className='text-center mb-2'>Here is my skills stack in Web Programming.</p>

      <div className="max-w-7xl relative">
        <div className="absolute -z-10 -top-10 -left-8 w-32 h-32 bg-sky-400 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute -z-10 -top-10 left-20 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
          {skills.map((skill, index) => {
            return (
              <div key={index} className='bg-white p-6 rounded-md hover:shadow-md cursor-pointer'>
                <h1 className='font-bold text-xl'>{skill.name}</h1>
                <p className='mt-2 text-sm'>{skill.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
