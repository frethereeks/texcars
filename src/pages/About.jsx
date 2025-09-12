import React from 'react'
import { ASSETS } from '../assets'

export default function About() {

  const aboutContents = [
    {
      id: "1z80qz6240",
      image: ASSETS['shadowed_red_car'],
      subtitle: "Our Value",
      title: "We consider you our first priority",
      text: "We are committed to providing you with the best luxury products and services. Our team is dedicated to ensuring that your experience with us is nothing short of exceptional."
    },
    {
      id: "1z80qz6241",
      image: ASSETS['lamborgini_yellow_car'],
      subtitle: "Our Mission",
      title: "We exist to actualize your luxurious wishes",
      text: "At Texcars, we consider flamboyance a necessity for the high classes and we would go to untold length to make that a reality for you."
    },
    {
      id: "1z80qz6242",
      image: ASSETS['mercedes_race_car'],
      subtitle: "Our Vision",
      title: "Bringing opulence to like-pocketed individuals",
      text: "Birds of a feather flock together they say. It is our vision to connect-by-pocket, the lavishly loving cronies through state-of-the-art cars that tells stories without speaking."
    },
  ]

  return (
    <main className='space-y-10'>
      <section className="relative px-4 h-[40vh] bg-primary">
        <img src={ASSETS['gwagon_grey_car']} alt="Contact Us" className="opacity-40 absolute top-0 left-0 h-full w-full object-cover object-center" />
      </section>
      <section className="px-4">
        <div className="container mx-auto space-y-6">
          {
            aboutContents.map((el, i) => (
              <section key={el.id} className="p-4">
                <div className={`flex ${(i % 2 === 1) ? 'flex-col-reverse md:flex-row' : 'flex-col-reverse md:flex-row-reverse'} gap-4 md:gap-8`}>
                  <aside className="flex-1 py-6 sm:py-10 md:py-24 space-y-4">
                    <p data-aos="fade-down" data-aos-delay="500" className="text-sm md:text-base w-max relative before:absolute before:h-0.5 before:w-12 before:bg-secondary before:left-[120%] before:top-1/2 before:-translate-y-1/2">{el.subtitle}</p>
                    <h3 data-aos="fade-right" data-aos-delay="1000" className="text-3xl md:text-4xl text-primary font-serif font-bold">{el.title}</h3>
                    <p data-aos="fade-up" data-aos-delay="1500" className="text-base md:text-lg text-text opacity-70">{el.text}</p>
                  </aside>
                  <aside data-aos="fade-up" data-aos-delay="100" className="flex-1 relative min-h-48 bg-primary">
                    <img src={el.image} alt="aeriel_blue_car" className="absolute top-0 left-0 h-full w-full object-cover object-center" />
                  </aside>
                </div>
              </section>
            ))
          }
        </div>
      </section>
    </main>
  )
}
