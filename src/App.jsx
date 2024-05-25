import {useState} from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from "./components/Hero/Hero.jsx";
import Features from "./components/Features/Features.jsx"
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts.jsx";
function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Navbar></Navbar>
            <Hero></Hero>
            <Features></Features>
            <FeaturedProducts></FeaturedProducts>
        </>
    )
}

export default App
