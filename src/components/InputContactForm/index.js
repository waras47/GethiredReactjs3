import { useState } from "react";

// TODO: Uncomment baris kode di bawah untuk meng-import fungsi addNewContact dari services/index.js
import { addNewContact } from "../../services";

import "./style.css";

const InputContactForm = (props) => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  // TODO: Uncomment baris kode di bawah untuk mendapatkan fungsi handleGetContacts dari props
  const { handleGetContacts } = props;

  const resetInputValue = () => {
    setFullName("");
    setPhoneNumber("");
    setEmail("");
  };

  // TODO: Uncomment baris kode di bawah untuk memanggil fungsi mengirim data kontak baru yang sudah diimport sebelumnya dari services/index.js lalu panggil fungsi untuk mengambil semua data kontak dari api dan mereset value yang ada di setiap input field
  const handleSubmit = async () => {
    await addNewContact({
      full_name: fullName,
      phone_number: phoneNumber,
      email,
    });

    handleGetContacts();
    resetInputValue();
  };

  const allowSubmit = !(!fullName || !phoneNumber || !email);

  return (
    <div className="input-contact__form-container">
      <h1 data-cy="header-title">Devcode Contact Manager</h1>
      <div className="input-contact__form">
        <label htmlFor="nama">Nama Lengkap</label>
        <div>
          <input
            data-cy="input-nama"
            type="text"
            name="nama"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Masukkan Nama Lengkap"
          />
        </div>
        <label htmlFor="telepon">No. Telepon</label>
        <div>
          <input
            data-cy="input-telepon"
            type="text"
            name="telepon"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Masukkan Nomor Telepon"
          />
        </div>
        <label htmlFor="email">Email</label>
        <div>
          <input
            data-cy="input-email"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan Email"
          />
        </div>
        <button disabled={!allowSubmit} data-cy="btn-submit" onClick={handleSubmit}>
          Simpan
        </button>
      </div>
    </div>
  );
};

export default InputContactForm;
