import { useState } from "react";
import { useProvide } from "../context/context";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../api/contacts";
import { Helmet } from "react-helmet";
export default function Edit() {
  const { contact, setContact } = useProvide();
  const navigate = useNavigate();

  const location = useLocation();
  const data = location.state;
  const [detail, setDetail] = useState(data);
  const { id, name, email, job, description } = detail;

  async function put() {
    await api.put(`/contact/${id}`, detail);
    var objIndex = contact.findIndex((obj) => obj.id == id);
    contact[objIndex] = detail;
    navigate("/");
  }

  return (
    <div className="maindiv">
      <Helmet>
        <title>Edit Contact</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="ui main ">
        <div className="emptydiv"></div>
        <h2>Edit Contact</h2>
        <form className="ui form">
          <div className="subdiv1">
            <div className="field">
              <label>Name:</label>
              <input
                className="input1"
                type="text"
                name="name"
                placeholder="name..."
                value={name}
                onChange={(e) => {
                  setDetail({ ...detail, name: e.target.value });
                }}
              ></input>
            </div>
            <div className="field">
              <label>Email:</label>
              <input
                className="input1"
                type="text"
                name="email"
                placeholder="email..."
                value={email}
                onChange={(e) => {
                  setDetail({ ...detail, email: e.target.value });
                }}
              ></input>
            </div>
            <div className="field">
              <label>Occupation:</label>
              <input
                className="input1"
                type="text"
                name="job"
                placeholder="job title..."
                value={job}
                onChange={(e) => {
                  setDetail({ ...detail, job: e.target.value });
                }}
              ></input>
            </div>
            <div className="field">
              <label>Description:</label>
              <input
                className="input1"
                type="text"
                name="description"
                placeholder="job description..."
                value={description}
                onChange={(e) => {
                  setDetail({ ...detail, description: e.target.value });
                }}
              ></input>
            </div>
          </div>
          <div className="subdiv2">
            <i
              onClick={put}
              className="edit outline blue alternate outline huge icon"
              style={{ fontSize: "150px", margin: "50px auto" }}
            ></i>
          </div>
        </form>
      </div>
    </div>
  );
}
