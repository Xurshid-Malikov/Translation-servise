import "./guruhlar.css";
export const Guruhlar = () => {
  const menuGuruh = [
    {
      sana: "December 20, 2022",
      guruh: "Frontent 010",
      soni: "O’quvchilar soni : 6",
      ortacha: "O’rtacha o’z: 70%",
    },
    {
      sana: "December 20, 2022",
      guruh: "Backend 001",
      soni: "O’quvchilar soni : 6",
      ortacha: "O’rtacha o’z: 70%",
    },
    {
      sana: "December 20, 2022",
      guruh: "Frontent 010",
      soni: "O’quvchilar soni : 6",
      ortacha: "O’rtacha o’z: 70%",
    },
    {
      sana: "December 20, 2022",
      guruh: "Frontent 010",
      soni: "O’quvchilar soni : 6",
      ortacha: "O’rtacha o’z: 70%",
    },
    {
      sana: "December 20, 2022",
      guruh: "Frontent 010",
      soni: "O’quvchilar soni : 6",
      ortacha: "O’rtacha o’z: 70%",
    },
    {
      sana: "December 20, 2022",
      guruh: "Backend 001",
      soni: "O’quvchilar soni : 6",
      ortacha: "O’rtacha o’z: 70%",
    },
  ];
  return (
    <div className="container_guruh">
      <div className="ps-4 pe-4 d-flex justify-content-between">
        <p className="salom">Salom Sherzod</p>
        <input className="search ps-4" value="Search" />
      </div>
      <div className="pt-4 ms-4 me-5 d-flex justify-content-between">
        <h2 className="mb-3 guri">Guruhlar</h2>
        <p className="guri_text">Oktabr, 27</p>
      </div>
      <div className="guruh_card">
        {menuGuruh.map((item, index) => (
          <div key={index} className="guruh">
            <div className="guruhSana">{item.sana}</div>
            <div className="guruh-g">{item.guruh}</div>
            <div className="guruhSoni">{item.soni}</div>
            <div className="guruhOrtacha">{item.ortacha}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
