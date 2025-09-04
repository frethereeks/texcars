import React from 'react'
import { ASSETS } from '../assets'
import { Form, Input } from 'antd'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'

export default function Login() {
    const [loginForm] = Form.useForm()
    const dispatch = useDispatch()

    const handleSubmit = (values) => {
        if (values.email === "admin@texcars.com") {
            dispatch({ payload: { email: values.email }, type: "site/login" })
            toast.success("Login successful. Redirecting...", { id: "123" })
            setTimeout(() => {
                window.location.replace("/dashboard/overview")
            }, 1500);
        }
        else {
            toast.error("Invalid credentials supplied. Please, try again", { id: "123" })
        }
        console.log('Form values:', values)
    }

    return (
        <main className='min-h-screen relative py-20 bg-white'>
            <div className="min-h-screen container mx-auto flex flex-col md:flex-row gap-6">
                <aside className="relative flex-1 hidden md:block">
                    <img src={ASSETS['shadowed_red_car']} alt="shadowed_red_car" className="absolute top-0 left-0 w-full h-full bg-cover" />
                </aside>
                <aside className="flex-1 h-full grid place-items-center p-4 md:p-10">
                    <Form
                        form={loginForm}
                        onFinish={(values) => handleSubmit(values)}
                        layout='vertical'
                        size='medium'
                        className='w-full md:max-w-md rounded-md p-4 bg-white'
                    >
                        <h3 className="text-lg md:text-2xl font-semibold font-serif text-primary mt-4 leading-tight">Login to your <span className="text-secondary">Account</span></h3>
                        <p className="text sm md:text-base text-text mb-4">Enter your credentials below</p>
                        <Form.Item
                            label="Email Address"
                            name="email"
                            rules={[{ required: true, message: 'Email is required' }, { type: "email", message: "Enter a valid email address" }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name={"password"}
                            rules={[{ required: true, message: 'Password is required' }, { min: 6, message: "Password must be at least 6 characters" }]}
                        >
                            <Input type='password' />
                        </Form.Item>
                        <button type="submit" className="py-2 px-6 md:px-10 rounded-md cursor-pointer bg-primary text-backdrop w-max">Login</button>
                    </Form>
                </aside>
            </div>
        </main>
    )
}
