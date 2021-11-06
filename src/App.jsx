import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import SwipeButtons from './components/SwipeButtons'
import TinderCards from './components/TinderCards'

function App() {
  const [products, setProducts] = useState([])
  const loadProducts = () => {
    const url = `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data))
  }
  useEffect(() => {
    loadProducts()
  }, [])
  return (
    <div className="app">
      <Header />
      <TinderCards products={products} />
      <SwipeButtons setProducts={setProducts} />
    </div>
  )
}

export default App
