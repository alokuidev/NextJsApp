import Link from 'next/link'
import React from 'react'
const  page = () => {
  return (
    <div>
        <h1 className="text-2xl font-bold text-center sm:text-left">Hello Login Page</h1>
        <br /><br />
        <Link href="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Go to Homepage</Link>
    </div>
  )
}

export default page
