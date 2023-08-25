import { Modal } from "../../components/Modal/Modal";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export const Social_media = () => {
  const [dishes, setDishes] = useState({});

  // const [modal, setModal] = useState(false);
  // const [edit, setEdit] = useState(false);

  useEffect(() => {
    axios
      .get("http://24.199.117.223:8080/api/v1/social-medias/w-sec/")
      .then((res) => setDishes(res.data))
      .catch((err) => console.log(err));
  }, []);

  const Icon = useRef();
  const Name = useRef();
  const Link = useRef();
  const Turi = useRef();

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    const formData = new FormData();

    const {
      Icon,
      Name,
      Link,
      Turi,
    } = evt.target.elements;

    formData.append("icon", Icon.current.value);
    formData.append("name", Name.current.value);
    formData.append("link", Link.current.value);
    formData.append("status", Turi.current.value);

    axios
      .post("http://24.199.117.223:8080/api/v1/social-medias/", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {dishes.length && (
        <ul>
          {dishes.map((e) => (
            <li>
              {/* <img src={`http://24.199.117.223:8080/api/v1/` + e.icon} alt={e.name} /> */}
              <h2>{e.name}</h2>
              <p>{e.link}</p>
              <p>{e.status}</p>
            </li>
          ))}
        </ul>
      )}

      {/* <button onClick={() => setModal(true)}>Qo'shish</button>
      <button onClick={() => setEdit(true)}>Taxrirlash</button>
      <Modal modal={modal} setModal={setModal} status={"Qo'shish"}> */}
      <form onSubmit={handleSubmitForm}>
        <input ref={Icon} type="text" name="icon" placeholder="Icon..." />
        <input ref={Name} type="text" name="name" placeholder="Name..." />
        <input ref={Link} type="text" name="link" placeholder="Link..." />
        <select ref={Turi} typeof="text" name="status">
          <option value="PUBLISH">PUBLISH</option>
          <option value="UN_PUBLISH">UN_PUBLISH</option>
        </select>
        <button type="submit">Qo'shish</button>
      </form>
      {/* </Modal>  */}
    </div>
  );
};
