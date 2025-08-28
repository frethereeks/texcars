import { Form, Input, Select } from 'antd'
import PhoneNumberInput from "react-phone-number-input"
import flags from "react-phone-number-input/flags"
import 'react-phone-number-input/style.css'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector'
import { ASSETS } from '../assets'
import { useState } from 'react'
import TextArea from 'antd/es/input/TextArea'
import { RiMapPinLine, RiTimeLine } from 'react-icons/ri'

export default function Contact() {
  const [contactForm] = Form.useForm()
  const [country, setCountry] = useState('Nigeria')

  const handleSubmit = (values) => {
    console.log('Form values:', values)
  }


  return (
    <main className='space-y-10'>
      <section className="relative px-4 h-[40vh] bg-primary">
        <img src={ASSETS['lamborgini_yellow_car']} alt="Contact Us" className="opacity-40 absolute top-0 left-0 h-full w-full object-cover object-center" />
      </section>
      <section className="py-5 px-4">
        <div className="container mx-auto flex flex-col md:flex-row-reverse gap-6">
          <aside className="flex-1 space-y-4">
            <h3 className="text-xl md:text-2xl text-primary font-semibold">Our Office</h3>
            <div className="relative h-40 md:h-60 rounded-md bg-backdrop overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d31519.30904403165!2d7.4863232!3d9.071633!3m2!1i1024!2i768!4f13.1!2m1!1sniit%20abuja!5e0!3m2!1sen!2sng!4v1756383471347!5m2!1sen!2sng" width="100%" height="100%"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="flex gap-4">
              <figure className="h-8 w-8 md:h-9 md:w-9 bg-backdrop rounded-full grid place-items-center text-base md:text-lg text-secondary">
                <RiMapPinLine />
              </figure>
              <div className="relative max-w-[14rem]">
                <h4 className="text-sm text-primary font-semibold">Address</h4>
                <p className="text-xs text-primary/70 font-medium">8, Sirakoro Str., Off Blantyre Crescent,  Wuse 2, FCT-Abuja, Nigeria.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <figure className="h-8 w-8 md:h-9 md:w-9 bg-backdrop rounded-full grid place-items-center text-base md:text-lg text-secondary">
                <RiTimeLine />
              </figure>
              <div className="relative max-w-[14rem]">
                <h4 className="text-sm text-primary font-semibold">Office Hours</h4>
                <p className="text-xs text-primary/70 font-medium">Monday - Friday: 8:30AM - 4:00PM.</p>
                <p className="text-xs text-primary/70 font-medium">Saturday: 10:00AM - 2:00PM.</p>
                <p className="text-xs text-primary/70 font-medium">Sunday: Closed.</p>
              </div>
            </div>
          </aside>
          <aside className="flex-1">
            <Form
              form={contactForm}
              layout='vertical'
              onFinish={handleSubmit}
              initialValues={{
                country: 'Nigeria',
              }}
            >
              <Form.Item name={"fullname"} label="Full Name" rules={[{ required: true, message: 'Full Name is required' }]}>
                <Input placeholder='Angela Jones' />
              </Form.Item>
              <Form.Item name={"email"} label="Email Address" rules={[{ required: true, message: 'Email is required' }, {type: "email", message: "Enter a valid email address"}]}>
                <Input type='email' placeholder='angelajones@gmail.com' />
              </Form.Item>
              <Form.Item
                name={"phone"}
                label="Phone Number"
                // rules={[{ len: 14, message: 'Phone Number must be exactly 10 digit' }]}
                children={
                  <PhoneNumberInput
                    placeholder="Enter Phone Number"
                    defaultCountry='NG'
                    onChange={value => contactForm.setFieldValue("phone", value)}
                    international
                    countryCallingCodeEditable={false}
                    flags={flags}
                    className='w-full py-1 px-4 border border-slate-200 rounded-md'
                  />
                }
              />
              <Form.Item
                name={'country'}
                label={'Country'}
                rules={[{ required: true, message: 'Country is required' }]}
                children={
                  <CountryDropdown
                    onChange={value => {
                      contactForm.setFieldValue("country", value)
                      setCountry(value)
                    }}
                    className='w-full py-1 px-4 border border-slate-200 rounded-md'
                  />
                }
              />
              <Form.Item
                name={'region'}
                label={'State/Region'}
                rules={[{ required: true, message: 'Region is required' }]}
                children={
                  <RegionDropdown
                    country={country}
                    onChange={value => contactForm.setFieldValue("region", value)}
                    className='w-full py-1 px-4 border border-slate-200 rounded-md'
                  />
                }
              />
              <Form.Item name="message" label='Write to us' rules={[{ required: true, message: 'Message is required' }]}>
                <TextArea placeholder='Write message...' rows={5} />
              </Form.Item>
              <div className="g-recaptcha -translate-y-2" data-sitekey="6LeZva0AAAP4506LYCRR7RAygcMVB6Hw9H2yb"></div>
              <button type='submit' className="px-6 py-2 rounded-lg bg-primary text-white font-semibold w-max cursor-pointer flex items-center gap-2">Send Message</button>
            </Form>
          </aside>
        </div>
      </section>
    </main>
  )
}
