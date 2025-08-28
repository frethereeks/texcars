import React from 'react'

export default function Footer() {
    return (
        <footer className='relative p-4 bg-primary'>
            <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="sm:col-span-2 lg:col-span-3 text-secondary text-sm text-center p-2">
                    &copy; {new Date().getFullYear()} Texcars. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
