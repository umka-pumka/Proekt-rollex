
import "./hero.css"
import logo from '../.././shared/assets/logo.png'

const herodata = [
  {
    
    description: "САНКТ-ПЕТЕРБУРГ",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra.",
    logo: "logo"
  },
]
const Hero = () => {
  return (
    <div id="hero">
      <div className="">

        {herodata.map((h, index) => (
          <div key={index}>

            <div className="porten">
              <div>
                <img src={logo} alt="" />
                <div className="line"></div>
                <h5> {h.title}</h5>
              </div>
            </div>
            <p> {h.p}</p>
          </div>))}
      </div>
    </div>
  )
}

export default Hero