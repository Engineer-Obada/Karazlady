import Navbar from '../component/Navbar/Navbar'
import Category from '../component/Category/Category'
import Hero from '../component/Hero/Hero'
import Products from '../component/Product/Products'
import { useState } from 'react'
// import Barbottom from '../component/Bar/Barbottom'

function HomePage() {
const[count,setCount] = useState(0)

  return (
    <>
      <Navbar count={count} />
      <Category />
      <Hero />
      <Products setCount={setCount} count={count} />
    </>
  )
}

export default HomePage