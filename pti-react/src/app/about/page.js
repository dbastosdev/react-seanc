import Image from 'next/image'
import ProductCard from '@/components/ProductCard'

const products = [
  {
    id: 1,
    img: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-salada-mista-2.jpg',
    name: 'Stewed cobbage with sauce',
    price: 5.90
  },
  {
    id: 2,
    img: 'https://www.receiteria.com.br/wp-content/uploads/receitas-com-rap10-218x218.png.webp',
    name: 'Stewed cobbage with sauce',
    price: 5.90
  },
  {
    id: 3,
    img: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-de-liquidificador-rapida-218x218.png.webp',
    name: 'Stewed cobbage with sauce',
    price: 5.90
  }
]

export default function Home() {
  return (
    <div>
      <nav className='flex justify-between p-2 bg-slate-900'> 
        <h1 className='text-3xl'><a href='/'>DoorHub</a></h1>
        <ul className='flex space-x-10 '>
            <li className=''><a href='/about'>About us</a></li>
            <li className=''>Features</li>
            <li className=''>Contact</li>
            <li className=''>Blog</li>
        </ul>
        <button className='rounded-full'>Contact</button>
      </nav>

    <h1 className='text-sky-400'>Essa é a página about</h1>
    <div className='flex justify-between pl-40 pr-40'>
      {/* {products.map(product => <ProductCard key={product.id} product={product}/>)} */}
      <ProductCard products={products} />
    </div>
  
    </div>
  )
}
