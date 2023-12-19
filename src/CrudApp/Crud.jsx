import React from 'react';
import { useState } from 'react';
import './Crud.css'

const App = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({ name: '', email: '', address: '' });
  const [userData, setUserData] = useState([]);
  const [update, setUpdate] = useState(null);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  function adduser() {
    if (update !== null) {
      updated();
      return;
    }

    setUserData([...userData, user]);
    closeModal();
  }

  function handleDelete(index) {
    const del = userData.filter((v, i) => i !== index);
    setUserData(del);
  }

  function handleUpdate(index) {
    setOpen(true);
    setUser({ ...userData[index] });
    setUpdate(index);
  }

  function updated() {
    const updatedRecords = [...userData];
    updatedRecords[update] = { ...user };
    setUserData(updatedRecords);
    setUser({ name: '', email: '', address: '' });
    setUpdate(null);
    closeModal();
  }

  return (
    <div className="app">
      <nav>
        <h1>Crud App</h1>
        <button onClick={openModal}>Add User</button>
      </nav>
      <hr />
      <center>
        <table border={1} rules="all">
          <thead>
            <tr>
              <td>
                <b>Name</b>
              </td>
              <td>
                <b>Email</b>
              </td>
              <td>
                <b>Address</b>
              </td>
              <td>
                <b>Action</b>
              </td>
            </tr>
          </thead>
          <tbody>
            {userData.length > 0 &&
              userData.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td>
                      <button onClick={() => handleUpdate(index)}>Edit</button>
                      <button onClick={() => handleDelete(index)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4}>@CopyRight Sahil Nadaf</td>
            </tr>
          </tfoot>
        </table>
      </center>

      {open && (
        <div>
          <h1>Enter Your Data</h1>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter Your Email"
            name="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter Your Address"
            name="address"
            value={user.address}
            onChange={(e) => setUser({ ...user, address: e.target.value })}
          />
          <br />
          <br />
          <button onClick={adduser}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default App;
