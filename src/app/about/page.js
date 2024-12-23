import Link from 'next/link'
import React from 'react'
const page = () => {
  return (
    <div>
        <h1>This is About Page</h1>
        <Link href="/">Go to Homepage</Link>
        <br />
        <Link href='/about/aboutus'>About</Link>
        <br />
        <Link href='/about/aboutstudent'>About Student</Link>
    </div>
  )
}

export default page
