/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import React from 'react'

export default function About() {
  const techs = [
    {'name': 'React.js', 'href': 'https://react.dev/'},
    {'name': 'Vue.js', 'href': 'https://vuejs.org/'},
    {'name': 'Next.js', 'href': 'https://nextjs.org/'},
    {'name': 'Node.js', 'href': 'https://nodejs.org/'},
    {'name': 'Express.js', 'href': 'https://expressjs.com/'}
  ]
  return (
    <div className="container w-full flex flex-col justify-center items-center my-16">

      <div className="absolute -z-10 top-0 right-20 mix-blend-multiply filter blur-xl w-24 h-[500px] bg-sky-400 skew-x-[30deg]"></div>
      {/* <div className="absolute -z-10 top-0 right-24 mix-blend-multiply filter blur-xl w-24 h-96 bg-yellow-400 skew-x-[30deg]"></div> */}

      <h1 className="text-4xl text-center font-bold">About Me 😎</h1>
      <p className="text-center text-base leading-loose max-w-4xl mt-6">Hello, my name is Ardian Ilyas Fernanda and my age is 21 years old. I'am a fresh graduate from Amikom University majoring in Diploma 3 Informatics Management. I'm very interest in Web Programming since 2019 and because of it I learn about Web Programming from basic until I mastering it (not too). Currently I'm studying several technologies about Web Programming for example {techs.map((tech, index) => {
        return (
          <Link className="text-blue-600 hover:underline" href={tech.href} target='_blank' key={index}>{tech.name}, </Link>
        )
      })}. I really enjoy learning new things and willing to continue to grow.</p>
    </div>
  )
}
