import Image from 'next/image'

export default function Home() {
  return (
    // as classes aqui são do tailwindcss ver documentação para detalhes
    <nav className='flex justify-between p-2 bg-slate-900'> 
      <h1 className='text-3xl'>Doorhub</h1>
      <ul className='flex space-x-10 '>
        <li className=''><a href='/about'>About us</a></li>
        <li className=''>Features</li>
        <li className=''>Contact</li>
        <li className=''>Blog</li>
      </ul>
      <button className='rounded-full'>Contact</button>
    </nav>
  )
}
