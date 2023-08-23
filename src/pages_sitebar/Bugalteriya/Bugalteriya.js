import { useState } from "react";
import { Modal } from "../../components/Modal/Modal"


export const Bugalteriya =() => {
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState(false);
  return(
    <div>
      <h2>Bugalteriya</h2>
      <button onClick={() => setModal(true)}>Qo'shish</button>
      <button onClick={() => setEdit(true)}>Taxrirlash</button>
      <Modal modal={modal} setModal={setModal} status={"Qo'shish"}>
        <form methot="post">
          <input type="text" name="name" placeholder="Name..." />
          <button type="submit">Qo'shish</button>
        </form>
      </Modal>
      <Modal modal={edit} setModal={setEdit} status={"Taxrirlash"}>
        <form methot="post">
          <input type="text" name="name" placeholder="Name..." />
          <button type="submit">Taxrirlash</button>
        </form>
      </Modal>
    </div>
  )
}