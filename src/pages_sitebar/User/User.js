import { Modal } from "../../components/Modal/Modal";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";



export const User = () => {
  const [dishes, setDishes] = useState({});

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
    var formData = new FormData();
    formData.append("icon", Icon.current.files[0]);
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
              <h2>{e.name}</h2>
              <p>{e.link}</p>
              <p>{e.status}</p>
            </li>
          ))}
        </ul>
      )}

      <form onSubmit={handleSubmitForm}>
        <input ref={Icon} type="file" name="icon" placeholder="Icon..." />
        <input ref={Name} type="text" name="name" placeholder="Name..." />
        <input ref={Link} type="text" name="link" placeholder="Link..." />
        <select ref={Turi} typeof="text" name="status">
          <option value="ROLE_ADMIN">ROLE_ADMIN </option>
          <option value="ROLE_PUBLISHER">ROLE_PUBLISHER</option>
        </select>
        <button type="submit">Qo'shish</button>
      </form>
    </div>
  );
};
