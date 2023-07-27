import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0A192f] flex justify-center items-center p-4'>
        <form action="" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#e69b3a] text-gray-300'>Contact</p>
                <p className='text-grey-300 py-4'>Submit form below or email me at bakej07@gmail.com</p>
            </div>
            <input className='bg-gray-300 p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-gray-300' type="email" placeholder='Email' name='email' />
            <textarea className='bg-gray-300 p-2' name="message" rows="10" placeholder='Message'></textarea>
        </form>
    </div>
  )
}

export default Contact