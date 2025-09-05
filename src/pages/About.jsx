import React from 'react'
import { ASSETS } from '../assets'

export default function About() {
  return (
    <main className='space-y-10 min-h-[95vh]'>
      <section className="relative px-4 h-[40vh] bg-primary">
        <img src={ASSETS['gwagon_grey_car']} alt="Contact Us" className="opacity-40 absolute top-0 left-0 h-full w-full object-cover object-center" />
      </section>
      <section className="py-5 px-4">
        <div className="container mx-auto flex flex-col md:flex-row-reverse gap-6"></div>
      </section>
    </main>
  )
}
