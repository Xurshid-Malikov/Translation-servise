import axios from "axios";
import { useEffect, useState } from "react";

export const Comment = () => {
  const [langs, setLangs] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://24.199.117.223:8080/api/v1/languages/w-sec/",
    })
      .then(function (response) {
        setLangs(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Comment</h2>
      {langs.map((e) => (
        <ul key={e.id}>
          <p>{e.nameUz}</p>
          <p>{e.nameRu}</p>
          <p>{e.nameEng}</p>
        </ul>
      ))}
    </div>
  );
};
