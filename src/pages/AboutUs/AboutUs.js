import { NavLink } from "react-router-dom";
import "./aboutUs.css";
import About from "../../img/about_img.jpg";
import styled from "styled-components";

export const AboutUs = () => {
  return (
    <>
      <section className="hero_aboutUs">
        <div className="container">
          <div className="hero_aboutUs_inner">
            <h2 className="hero_aboutUs_title">About Us</h2>
            <img className="hero_aboutUs_img" src={About} />
          </div>
        </div>
      </section>
      <section className="about">
        <div className="container">
          <div className="about_inner">
            <div className="about_left">
              <h3 className="about_title">About Translantic</h3>
              <p className="about_text">
                Quis egestas felis eu fermentum adarcu suscipit quis ugravida
                dolor amet justo In purus integer dui enim vitae vitae congue
                volutpat tincidunt sed non tempor massa ultricies egetuiamet
                just purus integer dui enim vitae vitae congu volutpat tincidunt
                sed ac non tempor massa ultricies eget.
              </p>
              <p className="about_text">
                Quis egestas felis eu fermentum adarcu suscipit quis gravida
                dolor amet justo In purus integer dui enim vitae vitae congue
                volutpat tincidunt sed ac non tempor massa ultricies eget .
              </p>
              <NavLink className="about_link" to="/#">
                Read More
              </NavLink>
            </div>
            <img
              className="about_img"
              src={About}
              width="600"
              alt="About translante"
            />
          </div>
        </div>
      </section>
      <section className="about">
        <div className="container">
          <div className="about_inner aboutInner">
            <img
              className="about_img"
              src={About}
              width="600"
              alt="About translante"
            />
            <div className="about_left aboutLeft">
              <h3 className="about_title">Professional Translation</h3>
              <p className="about_text">
                Quis egestas felis eu fermentum adarcu suscipit quis ugravida
                dolor amet justo In purus integer dui enim vitae vitae congue
                volutpat tincidunt sed non tempor massa ultricies egetuiamet
                just purus integer dui enim vitae vitae congu volutpat tincidunt
                sed ac non tempor massa ultricies eget.
              </p>
            </div>
          </div>
          <div className="about_inner">
            <div className="about_left">
              <h3 className="about_title">We Work Quickly & Precisely</h3>
              <p className="about_text">
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
              width="600"
              alt="About translante"
            />
          </div>
        </div>
      </section>
      <section className="sevice">
        <div className="container">
          <div className="service_inner">
            <h2 className="service_title">We Focus On Many Industries</h2>
            <div
              className="service_inner_div about_service"
              style={{ marginTop: 0 }}
            >
              <div>
                <p
                  className="service_text about_service_text"
                >
                  Quis egestas felis eu fermentum adarcu suscipit quis ut
                  gravida dolor amet justo In purus integer dui enim vitae vitae
                  congue volutpat tincidunt sed ac non tempor massa.
                </p>
                <div className="about_service_inner">
                  <NavLink
                    className="service_link"
                    style={{ marginTop: 50 }}
                    to="/#"
                  >
                    <img
                      className="service_link_img"
                      width="50"
                      height="60"
                      src={About}
                    />
                    <div className="service_link_div">
                      <h3 className="service_link_title">
                        Translation Service
                      </h3>
                      <p className="service_link_text">
                        Mattis pellentesque aenean viverra aliquam molestie
                        eget.
                      </p>
                    </div>
                  </NavLink>
                  <NavLink className="service_link" to="/#">
                    <img
                      className="service_link_img"
                      width="50"
                      height="60"
                      src={About}
                    />
                    <div className="service_link_div">
                      <h3 className="service_link_title">
                        Translation Service
                      </h3>
                      <p className="service_link_text">
                        Mattis pellentesque aenean viverra aliquam molestie
                        eget.
                      </p>
                    </div>
                  </NavLink>
                  <NavLink className="service_link" to="/#">
                    <img
                      className="service_link_img"
                      width="50"
                      height="60"
                      src={About}
                    />
                    <div className="service_link_div">
                      <h3 className="service_link_title">
                        Translation Service
                      </h3>
                      <p className="service_link_text">
                        Mattis pellentesque aenean viverra aliquam molestie
                        eget.
                      </p>
                    </div>
                  </NavLink>
                </div>
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
