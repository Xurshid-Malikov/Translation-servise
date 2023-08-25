import { Modal } from "../../components/Modal/Modal";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";



export const User = () => {
  const [users, setUsers] = useState({});


  // Step 1: Retrieve JSON string from local storage
  const jsonString = localStorage.getItem("token");

  // Step 2: Parse the JSON string to an object
  const data = JSON.parse(jsonString);

  // Step 3: Access the 'message' property
  const token = data.massage;
  console.log(token);

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json", // Set your desired content type
  };



  useEffect(() => {
    axios
      .get("http://24.199.117.223:8080/api/v1/users/", {
        headers})
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const Icon = useRef();
  const Name = useRef();
  const Link = useRef();
  const Turi = useRef();

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    var formData = new FormData();
    formData.append("fullName", Icon.current.value);
    formData.append("phoneNum", Name.current.value);
    formData.append("password", Link.current.value);
    formData.append("ROLE_PUBLISHER", Turi.current.value);

    axios
      .post("http://24.199.117.223:8080/api/v1/users/", formData, {
        headers,
      })
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };
 
  return (
    <div>
      {users.length && (
        <ul>
          {users.map((e) => (
            <li>
              <h2>{e.fullName}</h2>
              <p>{e.phoneNum}</p>
              <p>{e.password}</p>
            </li>
          ))}
        </ul>
      )}

      <form onSubmit={handleSubmitForm}>
        <input ref={Icon} type="text" name="fullName" placeholder="fullName..." />
        <input ref={Name} type="text" name="phoneNum" placeholder="phoneNum..." />
        <input ref={Link} type="text" name="password" placeholder="password..." />
        <select ref={Turi} typeof="text" name="status">
          <option value="ROLE_ADMIN">ROLE_ADMIN </option>
          <option value="ROLE_PUBLISHER">ROLE_PUBLISHER</option>
        </select>
        <button type="submit">Qo'shish</button>
      </form>
    </div>
  );
};
