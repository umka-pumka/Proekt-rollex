import Brands from "../../components/brands/Brands"
import Collection from "../../components/collection/Collection"
import Hero from "../../components/hero/Hero"
import New from "../../components/new/New"
import Season from "../../components/season/Season"



const Home = () => {
  return (
    <div >
      <Hero />
      <Season />
      <Collection />
      <New/>
      <Brands />
    </div>
  )
}

export default Home