import Link from "next/link";

export default function Home() {
  return (
    <div className="container flex flex-col w-full justify-center items-center mt-16">
      <h1 className="font-semibold text-6xl text-center leading-tight w-2/3">Welcome to Ardian Ilyas website page ⚡</h1>
      <p className="my-9 text-center w-3/4 leading-loose">Thanks to visiting my website page. This website I build for my portfolio and exactly for upgrading my own skills 😁. This website is build using <a href="https://nextjs.org" target="_blank" className="text-blue-500 hover:underline">Nextjs</a> and <a href="https://tailwindcss.com" target="_blank" className="text-blue-500 hover:underline">Tailwindcss</a> Stack. Soon this website will have blog page <b>(if possible)</b>. Hope you like this website and have a great day.</p>
      <Link href={'/about'} className="py-5 px-7 bg-neutral-900 hover:bg-neutral-950 rounded-lg text-white hover:shadow-lg">See About Page</Link>
    </div>
  )
}
