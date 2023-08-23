
import "./oquvchilar.css";
export const Oquvchilar = () => {
  const menuOquvchi = [
    {
      fulName: "Jane Cooper",
      yonalish: "Microsoft",
      tellNumber: "(225) 555-0118",
      email: "jane@microsoft.com",
      guruh: "Frontend 010",
      status: "Active",
    },
    {
      fulName: "Floyd Miles",
      yonalish: "Yahoo",
      tellNumber: "(205) 555-0100",
      email: "floyd@yahoo.com",
      guruh: "Frontend 010",
      status: "Inactive",
    },
    {
      fulName: "Ronald Richards",
      yonalish: "Adobe",
      tellNumber: "(302) 555-0107",
      email: "ronald@adobe.com",
      guruh: "Frontend 010",
      status: "Inactive",
    },
    {
      fulName: "Marvin McKinney",
      yonalish: "Tesla",
      tellNumber: "(252) 555-0126",
      email: "marvin@tesla.com",
      guruh: "Frontend 010",
      status: "Active",
    },
    {
      fulName: "Jerome Bell",
      yonalish: "Google",
      tellNumber: "(629) 555-0129",
      email: "jerome@google.com",
      guruh: "Frontend 010",
      status: "Active",
    },
    {
      fulName: "Kathryn Murphy",
      yonalish: "Microsoft",
      tellNumber: "(406) 555-0120",
      email: "kathryn@microsoft.com",
      guruh: "Frontend 010",
      status: "Active",
    },
    {
      fulName: "Jacob Jones",
      yonalish: "Yahoo",
      tellNumber: "(208) 555-0112",
      email: "jacob@yahoo.com",
      guruh: "Frontend 010",
      status: "Active",
    },
    {
      fulName: "Kristin Watson",
      yonalish: "Facebook",
      tellNumber: "(704) 555-0127",
      email: "kristin@facebook.com",
      guruh: "Frontend 010",
      status: "Inactive",
    },
  ];
  return (
    <div className="container">
       <div className="ps-1 pe-1 d-flex justify-content-between">
        <p className="salom">Salom Sherzod</p>
        <input className="search ps-4" value="Search" />
      </div>
      <div className="mt-5 mb-4 d-flex justify-content-between">
        <h2>Hamma O’quvchilar</h2>
        <input className="search ps-4" value="Qidiruv" />
        <div>
        <select>
          <option>All</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>
      </div>
      
      <div>
        <table className="line">
          <td className="tdfulName">F.I.O</td>
          <td className="tdyonalish">Guruh</td>
          <td className="tdtellNumber">Telefon nomer</td>
          <td className="tdemail">Email</td>
          <td className="tdguruh">Guruh</td>
          <td>Status</td>
        </table>
        {menuOquvchi.map((item, index) => (
          <table key={index} className="line d-flex">
            <td className="tdfulName">{item.fulName}</td>
            <td className="tdyonalish">{item.yonalish}</td>
            <td className="tdtellNumber">{item.tellNumber}</td>
            <td className="tdemail">{item.email}</td>
            <td className="tdguruh">{item.guruh}</td>
            <td className="tdstatus">{item.status}</td>
          </table>
        ))}
      </div>
    </div>
  );
};
