
import { NavLink } from "react-router-dom";
import About from "../../img/about_img.jpg";
export const Contact = () => {
  return(
    <>
      <section className="hero_aboutUs">
        <div className="container">
          <div className="hero_aboutUs_inner">
            <h2 className="hero_aboutUs_title">Contact Us</h2>
            <img className="hero_aboutUs_img" width="500" src={About} />
          </div>
        </div>
      </section>
    </>
  )
}