'use client'
import React from 'react'
 import { usePathname } from 'next/navigation'
function commonabout({children}) {
  const path = usePathname();
  console.log(path)
  return (
    <>
    
    <div>
    { path !== '/about/aboutstudent' ?(
        <h1>About Common Page</h1>
      )
      : null }
        <br /><br /><br />
       {children}
    </div>
    
 
  </>
  )
}

export default commonabout
