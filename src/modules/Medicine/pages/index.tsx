import React from 'react'

function SpreadLine() {
  return (
    <>
      <div className='h-4 bg-black w-[1px] m-1.5'></div>
    </>
  )
}

function Header() {
  return (
    <>
      <div className='flex items-center font-bold text-lg'>
        A01
        <SpreadLine />
        男
        <SpreadLine />
        70
        <SpreadLine />
        陈大文
      </div>
    </>
  )
}

export default function Medicine() {
  return (
    <div className='p-4'>
      <Header />
    </div>
  )
}
