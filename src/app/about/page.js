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
      <h1 className="text-4xl text-center font-bold">About Me 😎</h1>
      <p className="md:w-2/3 text-sm md:text-base text-center leading-loose mt-5">Hello, my name is Ardian Ilyas Fernanda and my age is 21 years old. I'am a fresh graduate from Amikom University majoring in Diploma 3 Informatics Management. I'm very interest in Web Programming since 2019 and because of it I learn about Web Programming from basic until I mastering it (not too). Currently I'm studying several technologies about Web Programming for example {techs.map((tech, index) => {
        return (
          <Link className="text-blue-600 hover:underline" href={tech.href} target='_blank' key={index}>{tech.name}, </Link>
        )
      })}. I really enjoy learning new things and willing to continue to grow.</p>
    </div>
  )
}
