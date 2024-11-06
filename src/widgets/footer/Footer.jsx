import { Link, NavLink } from "react-router-dom"
import "./footer.css"

const dataCategories = [

  {
    name: "часы",
    path: "/"
  },
  {
    name: "браслеты",
    path: "/"
  },
  {
    name: "ремни",
    path: "/"
  },
  {
    name: "ювелирные изделия",
    path: "/"
  },
  {
    name: "запонки",
    path: "/"
  },

]
const Footer = () => {
  return (
    <div className="">
      <div className="footer ">

        <div className="footer_text">
          <div className="footer_store">
            <h3>О магазине</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet consectetur vel vitae aliquam dictum suspendisse. Lobortis eget consequat, tellus et et sed turpis. Pretium quisque vitae, amet, porttitor odio ultricies massa pharetra leo. Et ipsum urna fames in sit mi ultrices nisi, nunc.</p>
          </div>
          <div className="footer_categories">
            <h3>Категории</h3>
            <div>
              {dataCategories.map((page) => (
                <Link key={page.name} to={page.path} className="link">
                  {page.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="footer_mailing">
            <h3>Рассылка</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh.</p>
          </div>
        </div>
      </div>
      <div className="footer_end">
        <p>© 2020 Все права защищены</p>
        <NavLink className="figma">Сделано Figma.info</NavLink>
      </div>
    </div>
  )
}

export default Footer