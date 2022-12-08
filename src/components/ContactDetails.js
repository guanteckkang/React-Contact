import React from "react";
import { useLocation } from "react-router-dom";
import profile from "../img/profile.png";
import { Helmet } from "react-helmet";

export default function PersonalCard() {
  const location = useLocation();
  const data = location.state;
  const { id, name, email, job, description } = data;

  return (
    <>
      <Helmet>
        <title>{name}</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="emptydiv"></div>
      <div className="ui card">
        <div className="image" style={{ textAlign: "center" }}>
          <div className="ui segment">
            <img style={{ width: "200px" }} alt="broken " src={profile} />
          </div>
        </div>
        <div className="content">
          <div className="header">Name: {name}</div>
          <div className="meta">
            <span className="date">Email: {email}</span>
          </div>
          <div className="job">Title: {job}</div>
          <div className="description">{description}</div>
        </div>
      </div>
    </>
  );
}
