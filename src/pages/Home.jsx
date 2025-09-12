import React, { useState } from 'react'
import { ASSETS } from '../assets'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { HiArrowLongRight } from 'react-icons/hi2'
import { MdOutlineMarkEmailUnread, MdOutlinePhone } from 'react-icons/md'
import { AiOutlinePhone } from 'react-icons/ai'
import toast from 'react-hot-toast'

export default function Home() {
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [location, setLocation] = useState("")

  const handleSubmit = (e) => { 
    e.preventDefault()
    const data = { fullname, email, location }
    console.log({ data })
    toast.success(`Dear ${fullname}, your car checkup has been scheduled successfully!`, {duration: 5000})
    setFullname("")
    setEmail("")
    setLocation("")
  }


  return (
    <main className="relative space-y-10">
      <section className="relative bg-gradient-to-tr from-[#161616] via-slate-600 to-[#161616] py-10 px-4 min-h-[80vh]">
        <img src={ASSETS['main_hero_car']} alt="" className="h-full w-full absolute object-contain object-center" />
        <div className="container mx-auto relative h-full pt-20 md:pt-0">
          <div className="w-full max-w-lg p-4 md:p-20 flex flex-col gap-4 backdrop-blur-sm text-white">
            <h1 data-aos="fade-right" className="font-serif max-w-sm text-4xl md:text-6xl">We Deliver Luxury</h1>
            <p data-aos="fade-up" data-aos-delay="1000" className="text-lg md:text-2xl leading-loose">If your idea of luxury is standing out among families and friends, you are just the perfect customer for our merchandise!</p>
          </div>
        </div>
      </section>
      <section className="relative py-10 lg:py-20">
        <div className="container mx-auto flex flex-col md:flex-row">
          <aside className="flex-1 relative px-4 py-10 md:px-10 md:py-20 bg-white text-primary">
            <p data-aos="fade-down" className="text-sm md:text-base text-text w-max relative before:absolute before:h-0.5 before:w-12 before:bg-secondary before:left-[120%] before:top-1/2 before:-translate-y-1/2">About </p>
            <h3 data-aos="zoom-out" data-aos-delay="800" className="text-3xl md:text-5xl font-serif">TexCars Luxury</h3>
            <p data-aos="fade-up" data-aos-delay="1200" className="max-w-sm text-justify text-text text-base md:text-lg opacity-70 py-4">From the fine hall of luxury and palace of opulence, we bring you the very best products, ranging from antiques to latest state-of-the-art cars that announces your status without uttering a word. </p>
          </aside>
          <aside className="flex-1 relative space-y-2 px-4 py-10 md:px-10 md:py-20 bg-primary text-white">
            <h3 data-aos="zoom-in-left" data-aos-delay="2000" className="text-3xl md:text-4xl font-sans max-w-sm mb-5">Any type of query &amp; discussion</h3>
            <p data-aos="fade-up" data-aos-delay="2250" className="flex items-center gap-2 opacity-70">
              <MdOutlinePhone className="flex-shrink-0" /> Call Us:  (+1) 8023910725.
            </p>
            <p data-aos="fade-up" data-aos-delay="2500" className="flex items-center gap-2 opacity-70">
              <MdOutlineMarkEmailUnread className="flex-shrink-0" /> Send Message: query@texcars.com
            </p>
            <p data-aos="fade-up" data-aos-delay="2750" className="flex items-center gap-2 opacity-70 pt-6">
              <FaMapMarkerAlt className="flex-shrink-0" /> Sirakoro Str., Wuse 2, Abuja, Nigeria.
            </p>
            <Link data-aos="fade-left" data-aos-delay="3000" to="/shop" className="relative h-8 w-8 before:absolute before:top-0 before:left-0 before:bg-white before:opacity-70 before:h-full before:w-full before:rounded-full block ml-auto">
              <HiArrowLongRight fontWeight={100} className="absolute z-10 right-5 top-1/2 -translate-y-1/2 font-extralight scale-x-[2] text-xl text-[#565656] opacity-70" />
            </Link>
          </aside>
        </div>
      </section>
            {/* <figure className="h-16 w-16 grid place-items-center bg-primary rounded-sm">
              <div className="h-14 w-14 rounded-full bg-secondary relative">
                <div className="h-[85%] w-[85%] rounded-full border-4 border-primary absolute right-0 bottom-0 bg-secondary overflow-hidden">
                  <div className="h-6 w-10 bg-primary border rounded-full -rotate-[22deg] translate-y-0 translate-x-[20px] absolute"></div>
                </div>
              </div>
            </figure> */}
            {/* <div className="h-16 w-16 rounded-full bg-secondary relative">
              <div className="h-[85%] w-[85%] rounded-full border-4 border-white absolute right-0 bottom-0 bg-secondary overflow-hidden">
                <div className="absolute h-1/2 w-[70%] bg-white rounded-full -rotate-[22deg] top-[0%] left-[60%]"></div>
              </div>
            </div> */}
      <section className="py-10 md:py-20 lg:py-32 px-4 bg-secondary/10">
        <div className="container mx-auto flex flex-col md:flex-row-reverse gap-4 md:gap-8">
          <aside className="flex-1 py-6 sm:py-10 md:py-24 space-y-4">
            <p data-aos="fade-down" data-aos-delay="500"  className="text-sm md:text-base w-max relative before:absolute before:h-0.5 before:w-12 before:bg-secondary before:left-[120%] before:top-1/2 before:-translate-y-1/2">Our Value </p>
            <h3 data-aos="fade-right" data-aos-delay="1000"  className="text-3xl md:text-4xl text-primary font-serif font-bold">We <span className="text-secondary">consider</span> you our first <span className="text-secondary">priority</span></h3>
            <p data-aos="fade-up" data-aos-delay="1500"  className="text-base md:text-lg text-text opacity-70">We are committed to providing you with the best luxury products and services. Our team is dedicated to ensuring that your experience with us is nothing short of exceptional.</p>
          </aside>
          <aside  data-aos="fade-up" data-aos-delay="100"  className="flex-1 relative min-h-48 bg-primary">
            <img src={ASSETS['aeriel_blue_car']} alt="aeriel_blue_car" className="absolute top-0 left-0 h-full w-full object-cover object-center" />
          </aside>
        </div>
      </section>
      <section className="px-4 py-10 md:py-20 lg:py-40 relative">
        <img src={ASSETS['lamborgini_ash_car']} alt="lamborgini_ash_car" className="absolute top-0 left-0 h-full w-full object-cover object-center" />
        <div className="container mx-auto relative z-10 space-y-16 md:space-y-32">
          <div className="bg-primary rounded-full p-3 w-max mx-auto flex items-center gap-2 text-white">
            <div className="-scale-x-100 h-10 w-10 rounded-full grid place-items-center  bg-secondary flex-shrink-0">
              <AiOutlinePhone className='text-white text-lg md:text-2xl flex-shrink-0' />
            </div>
            <span className="pl-2 pr-6 font-bold uppercase">Call us now</span>
          </div>
          <div className="gap-28 md:gap-8 flex flex-col md:flex-row-reverse">
            <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-x-4 gap-4 w-full max-w-sm md:max-w-full mx-auto backdrop-blur-xs bg-primary/50 p-6 md:p-10">
              <input value={fullname} onChange={e => setFullname(e.target.value)} type="text" placeholder='Full Name' required className="p-4 h-max bg-transparent text-white text-base md:text-lg rounded-full border border-white hover:border-secondary placeholder:text-white outline-none" />
              <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Email Address' required className="p-4 h-max bg-transparent text-white text-base md:text-lg rounded-full border border-white hover:border-secondary placeholder:text-white outline-none" />
              <input value={location} onChange={e => setLocation(e.target.value)} type="text" placeholder='Your Current Location' required className="p-4 h-max bg-transparent text-white text-base md:text-lg rounded-full border border-white hover:border-secondary placeholder:text-white outline-none lg:col-span-2" />
              <button type="submit" className="p-4 h-max rounded-full cursor-pointer border border-secondary text-white font-semibold bg-secondary hover:bg-secondary/80 lg:col-span-2">Schedule your Car Checkup</button>
            </form>
            <figure className="relative z-20 w-full md:max-w-sm space-y-8 px-6 md:px-10 pb-10 pt-20 md:pb-16 md:pt-40 text-white text-center before:w-full before:h-[200%] before:backdrop-blur-xs before:bg-primary/50 before:left-0 before:top-11 before:absolute before:skew-y-12 overflow-hidden">
              <div className="relative space-y-7 -translate-y-10">
                <p className="text-sm font-semibold">Emergency 24/7</p>
                <h3 className="text-3xl md:text-4xl font-bold max-w-xs mx-auto">Car Repair <span className="text-white">Service</span></h3>

              </div>
            </figure>
          </div>
        </div>
      </section>
    </main>
  )
}
