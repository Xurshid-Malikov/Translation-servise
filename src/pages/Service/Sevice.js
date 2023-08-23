import About from "../../img/about_img.jpg";
import { NavLink } from "react-router-dom";
import "./service.css";
import styled from "styled-components";

export const Service = () => {
  return (
    <>
      <section className="hero_aboutUs">
        <div className="container">
          <div className="hero_aboutUs_inner">
            <h2 className="hero_aboutUs_title">Our Services</h2>
            <img className="hero_aboutUs_img" width="500" src={About} />
          </div>
        </div>
      </section>
      <section className="about">
        <div className="container">
          <div className="about_inner">
            <div className="about_left">
              <h3 className="about_title">We Focus On Many Industries</h3>
              <p className="about_text service_about_text">
                Quis egestas felis eu fermentum adarcu suscipit quis ugravida
                dolor amet justo In purus integer dui enim vitae vitae congue
                volutpat tincidunt sed non tempor massa ultricies egetuiamet
                just purus integer dui enim vitae vitae congu volutpat tincidunt
                sed ac non tempor massa ultricies eget.
              </p>
            </div>
            <img
              className="about_img"
              src={About}
              width="500"
              alt="About translante"
            />
          </div>
          <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}} >
            <NavLink className="service_link" style={{width: 600}} to="/#">
              <img
                className="service_link_img"
                width="50"
                height="60"
                src={About}
              />
              <div className="service_link_div">
                <h3 className="service_link_title">Translation Service</h3>
                <p className="service_link_text">
                  Mattis pellentesque aenean viverra aliquam molestie eget.
                </p>
              </div>
            </NavLink>
            <NavLink className="service_link"  style={{width: 600}} to="/#">
              <img
                className="service_link_img"
                width="50"
                height="60"
                src={About}
              />
              <div className="service_link_div">
                <h3 className="service_link_title">Medical Translation</h3>
                <p className="service_link_text">
                  Mattis pellentesque aenean viverra aliquam molestie eget.
                </p>
              </div>
            </NavLink>
            <NavLink className="service_link" style={{width: 600}} to="/#">
              <img
                className="service_link_img"
                width="50"
                height="60"
                src={About}
              />
              <div className="service_link_div">
                <h3 className="service_link_title">Business Translation</h3>
                <p className="service_link_text">
                  Mattis pellentesque aenean viverra aliquam molestie eget.
                </p>
              </div>
            </NavLink>
            <NavLink className="service_link" style={{width: 600}} to="/#">
              <img
                className="service_link_img"
                width="50"
                height="60"
                src={About}
              />
              <div className="service_link_div">
                <h3 className="service_link_title">Document Translation</h3>
                <p className="service_link_text">
                  Mattis pellentesque aenean viverra aliquam molestie eget.
                </p>
              </div>
            </NavLink>
            <NavLink className="service_link" style={{width: 600}} to="/#">
              <img
                className="service_link_img"
                width="50"
                height="60"
                src={About}
              />
              <div className="service_link_div">
                <h3 className="service_link_title">Legal Translation</h3>
                <p className="service_link_text">
                  Mattis pellentesque aenean viverra aliquam molestie eget.
                </p>
              </div>
            </NavLink>
            <NavLink className="service_link" style={{width: 600}} to="/#">
              <img
                className="service_link_img"
                width="50"
                height="60"
                src={About}
              />
              <div className="service_link_div">
                <h3 className="service_link_title">Professional Translation</h3>
                <p className="service_link_text">
                  Mattis pellentesque aenean viverra aliquam molestie eget.
                </p>
              </div>
            </NavLink>
          </div>
        </div>
      </section>
      <section className="choose">
        <div className="container">
          <div className="choose_inner">
            <h2 className="choose_title">Why Choose Us</h2>
            <p className="choose_text">
              Quis egestas felis eu fermentum adarcu suscipit quis ut gravida
              dolor amet justo In purus integer dui enim vitae vitae congue
              volutpat tincidunt sed ac non tempor massa.
            </p>
            <div className="choose_bottom choose_form">
              <div className="choose_left ">
                <ul className="choose_list">
                  <li className="choose_item">
                    <img
                      className="choose_item_img"
                      width="50"
                      height="60"
                      src={About}
                    />
                    <h3 className="choose_item_title">24 Customer Services</h3>
                    <p className="choose_item_text">
                      Suspendisse morbi mauris gravida tellus integer egestas
                      ucibus tellus inut condimentum blandit mus auctor.
                    </p>
                  </li>
                  <li className="choose_item">
                    <img
                      className="choose_item_img"
                      width="50"
                      height="60"
                      src={About}
                    />
                    <h3 className="choose_item_title">Guarantee</h3>
                    <p className="choose_item_text">
                      Suspendisse morbi mauris gravida tellus integer egestas
                      ucibus tellus inut condimentum blandit mus auctor.
                    </p>
                  </li>
                </ul>
                <ul className="choose_list">
                  <li className="choose_item">
                    <img
                      className="choose_item_img"
                      width="50"
                      height="60"
                      src={About}
                    />
                    <h3 className="choose_item_title">Fast Delivery</h3>
                    <p className="choose_item_text">
                      Suspendisse morbi mauris gravida tellus integer egestas
                      ucibus tellus inut condimentum blandit mus auctor.
                    </p>
                  </li>
                  <li className="choose_item">
                    <img
                      className="choose_item_img"
                      width="50"
                      height="60"
                      src={About}
                    />
                    <h3 className="choose_item_title">Free Consultation</h3>
                    <p className="choose_item_text">
                      Suspendisse morbi mauris gravida tellus integer egestas
                      ucibus tellus inut condimentum blandit mus auctor.
                    </p>
                  </li>
                </ul>
              </div>
              <Hero_form
                action="https://echo.htmlacademy.ru/"
                method="POST"
                className="hero_form about_form"
              >
                <Form_title className="form_title">
                  Get Your Translation Now
                </Form_title>
                <Form_text className="form_text">
                  Suspendisse morbi mauris gravida tellus integer ucibus tellus
                  inut condimentum blandit mus auctor nulla.
                </Form_text>
                <label className="hero_label">
                  <select name="Translate from" required>
                    <option selected disabled value="">
                      Translate from
                    </option>
                    <option value="option2">English</option>
                    <option value="option3">Uzbek</option>
                  </select>
                  <select name="Translate to" required>
                    <option selected disabled value="">
                      Translate to
                    </option>
                    <option value="option12">Uzbek</option>
                    <option value="option13">English</option>
                  </select>
                  <select name="Select Service" required>
                    <option selected disabled value="">
                      Select Service
                    </option>
                    <option value="option22">Service 1</option>
                    <option value="option23">Service 2</option>
                  </select>
                  <Form_input
                    required
                    className="form_input"
                    type="tel"
                    name="tel"
                    placeholder="Tel"
                    minlength="7"
                    maxlength="13"
                  />
                  <Form_input
                    required
                    className="form_input"
                    type="number"
                    name="raqam"
                    aria-label="raqam"
                    placeholder="0"
                    min="1"
                    max="100000"
                  ></Form_input>
                </label>
                <Form_submit
                  className="form_submit"
                  type="submit"
                  value="Get started"
                />
              </Hero_form>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <div className="container">
          <div className="testimonials_inner">
            <h2 className="testimonials_title">We Focus On Many Industries</h2>
            <p className="testimonials_text">
              Quis egestas felis eu fermentum adarcu suscipit quis ut gravida
              dolor amet justo In purus integer dui enim vitae vitae congue
              volutpat tincidunt sed ac non tempor massa.
            </p>
            <ul className="testimonials_list">
              <li className="testimonials_item">
                <img
                  className="testimonials_item_img"
                  width="50"
                  height="60"
                  src={About}
                />
                <p className="testimonials_item_text">
                  “ Augue sed viverra nulla Interdum mia bibendum lerisqu ictuam
                  tincid nec feugi ugue tincidunt esutiamum diam ruoa turpis
                  Nuncsed Augueed viverra nulla Interdum Quis egestas felis eu
                  fermentum adarcu suscipit quis ut gravida dolo. ”
                </p>
                <p className="testimonials_item_name">Mark Grant</p>
                <p className="testimonials_item_type">Document Translation</p>
              </li>
              <li className="testimonials_item">
                <img
                  className="testimonials_item_img"
                  width="50"
                  height="60"
                  src={About}
                />
                <p className="testimonials_item_text">
                  “ Augue sed viverra nulla Interdum mia bibendum lerisqu ictuam
                  tincid nec feugi ugue tincidunt esutiamum diam ruoa turpis
                  Nuncsed Augueed viverra nulla Interdum Quis egestas felis eu
                  fermentum adarcu suscipit quis ut gravida dolo. ”
                </p>
                <p className="testimonials_item_name">Mark Grant</p>
                <p className="testimonials_item_type">Document Translation</p>
              </li>
              <li className="testimonials_item">
                <img
                  className="testimonials_item_img"
                  width="50"
                  height="60"
                  src={About}
                />
                <p className="testimonials_item_text">
                  “ Augue sed viverra nulla Interdum mia bibendum lerisqu ictuam
                  tincid nec feugi ugue tincidunt esutiamum diam ruoa turpis
                  Nuncsed Augueed viverra nulla Interdum Quis egestas felis eu
                  fermentum adarcu suscipit quis ut gravida dolo. ”
                </p>
                <p className="testimonials_item_name">Mark Grant</p>
                <p className="testimonials_item_type">Document Translation</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

const Hero_form = styled.form`
  margin-top: 60px;
  background: var(
    --collour-button,
    linear-gradient(90deg, #f46141 0%, #ffc202 100%)
  );
  max-width: 420px;
  height: 550px;
  padding: 40px 30px;
  border-radius: 20px;
  margin-bottom: 50px;
  @media only screen and (max-width: 950px) {
    max-width: 300px;
  }
  @media only screen and (max-width: 768px) {
    width: 400px;
    margin: auto;
    margin-top: 40px;
    max-width: 60%;
  }
  @media only screen and (max-width: 576px) {
    height: 440px;
    padding-top: 20px;
  }
`;
const Form_title = styled.h3`
  font-size: 30px;
  margin: 0;
  @media only screen and (max-width: 950px) {
    font-size: 25px;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
  @media only screen and (max-width: 576px) {
    font-size: 22px;
    margin-top: 0px;
  }
`;
const Form_text = styled.p`
  font-size: 20px;
  margin: 0;
  margin-bottom: 20px;
  @media only screen and (max-width: 950px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    margin-top: 10px;
  }
  @media only screen and (max-width: 576px) {
    font-size: 16px;
    margin-top: 7px;
  }
`;
const Form_input = styled.input`
  display: block;
  width: 390px;
  height: 52px;
  border-radius: 8px;
  border: none;
  padding: 0 10px;
  margin-bottom: 20px;
  @media only screen and (max-width: 950px) {
    max-width: 270px;
  }
  @media only screen and (max-width: 768px) {
    width: 400px;
    max-width: 94%;
    margin-right: 0;
  }
  @media only screen and (max-width: 576px) {
    margin-bottom: 15px;
    max-width: 93%;
    height: 45px;
  }
  @media only screen and (max-width: 576px) {
    max-width: 92%;
  }
`;
const Form_submit = styled.input`
  width: 406px;
  height: 50px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  @media only screen and (max-width: 950px) {
    max-width: 290px;
  }
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    margin-right: 0;
  }
  @media only screen and (max-width: 576px) {
    height: 45px;
  }
`;
