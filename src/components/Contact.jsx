import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0A192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/02528340-9e3b-4f17-aa54-26b7ee0bee92" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#e69b3a] text-gray-300'>Contact</p>
                <p className='text-white py-4'>Submit form below or email me at bakej07@gmail.com</p>
            </div>
            <input className='bg-gray-300 p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-gray-300' type="email" placeholder='Email' name='email' />
            <textarea className='bg-gray-300 p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#e69b3a] hover:border-[#e69b3a] px-4 py-3 mx-auto my-8 flex items-center'>Submit</button>
        </form>
    </div>
  )
}

export default Contact