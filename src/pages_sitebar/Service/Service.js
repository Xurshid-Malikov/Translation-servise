import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'

export const Service = () => {
  const [servise, setServise] = useState({});

  useEffect(() => {
    axios
      .get("http://24.199.117.223:8080/api/v1/services/w-sec/")
      .then((res) => setServise(res.data))
      .catch((err) => console.log(err));
  }, []);

  const Icon = useRef();
  const NameUz = useRef();
  const NameRu = useRef();
  const NameEng = useRef();
  const ShortInfoUz = useRef();
  const ShortInfoRu = useRef();
  const ShortInfoEng = useRef();
  const FullInfoUz = useRef();
  const FullInfoRu = useRef();
  const FullInfoEng = useRef();
  const Status = useRef();

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    var formData = new FormData();
    formData.append("icon", Icon.current.files[0]);
    formData.append("nameUz", NameUz.current.value);
    formData.append("nameRu", NameRu.current.value);
    formData.append("nameEng", NameEng.current.value);
    formData.append("shortInfoUz", ShortInfoUz.current.value);
    formData.append("shortInfoRu", ShortInfoRu.current.value);
    formData.append("shortInfoEng", ShortInfoEng.current.value);
    formData.append("fullInfoUz", FullInfoUz.current.value);
    formData.append("fullInfoRu", FullInfoRu.current.value);
    formData.append("fullInfoEng", FullInfoEng.current.value);
    formData.append("status", Status.current.value);

    axios
      .post("http://24.199.117.223:8080/api/v1/services/", formData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {servise.length && (
        <ul>
          {servise.map((e) => (
            <li>
              <p>{e.id}</p>
              <img src={`http://24.199.117.223:8080/api/v1/services/w-sec/` + e.icon} />
              <h2>{e.nameUz}</h2>
              <p>{e.status}</p>
            </li>
          ))}
        </ul>
      )}
      <form onSubmit={handleSubmitForm}>
        <input ref={Icon} type="file" name="icon" placeholder="Icon..." />
        <input ref={NameUz} type="text" name="nameUz" placeholder="NameUz..." />
        <input ref={NameRu} type="text" name="nameRu" placeholder="NameRu..." />
        <input ref={NameEng} type="text" name="nameEng" placeholder="NameEng..." />
        <input ref={ShortInfoUz} type="text" name="shortInfoUz" placeholder="ShortInfoUz..." />
        <input ref={ShortInfoRu} type="text" name="shortInfoRu" placeholder="ShortInfoRu..." />
        <input ref={ShortInfoEng} type="text" name="shortInfoEng" placeholder="ShortInfoEng..." />
        <input ref={FullInfoUz} type="text" name="fullInfoUz" placeholder="FullInfoUz..." />
        <input ref={FullInfoRu} type="text" name="fullInfoRu" placeholder="FullInfoRu..." />
        <input ref={FullInfoEng} type="text" name="fullInfoEng" placeholder="FullInfoEng..." />
        <select ref={Status} typeof="text" name="status">
          <option value="PUBLISH">PUBLISH</option>
          <option value="UN_PUBLISH">UN_PUBLISH</option>
        </select>
        <button type="submit">Qo'shish</button>
      </form>
    </div>
  );
};