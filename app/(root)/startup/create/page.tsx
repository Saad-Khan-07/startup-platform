import { auth } from '@/auth'
import StartForm from '@/components/StartForm'
import { redirect } from 'next/navigation';
import React from 'react'

async function page() {
    const session= await auth();
    if(!session) redirect("/");
  return (
    <>
     <section className='pink_container !min-h-[230px]'>
        <h1 className='heading'>Submit your startup</h1>   
     </section> 
     <StartForm/>
    </>
  )
}

export default page
