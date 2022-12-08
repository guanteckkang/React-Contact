import { Link } from "react-router-dom";

export default function ContactCard({ list }) {
  const { id, name, email, job, description } = list;

  return (
    <div className="ui card" style={{ minHeight: "250px", margin: "0px auto" }}>
      <div className="image" style={{ textAlign: "center" }}>
        <div className="ui segment">
          <i aria-hidden="true" className="users huge  icon"></i>
        </div>
      </div>

      <div className="content">
        <Link to={`/contact/${id}`} state={list}>
          <div className="header">{name}</div>
          <div className="meta">
            <span className="date">{email}</span>
          </div>
          <div className="description">
            {job}, {description}
          </div>
        </Link>
      </div>
      <div className="extra content" style={{ textAlign: "center" }}>
        <Link to="/edit" state={list}>
          <button className="ui button blue ">Edit</button>
        </Link>
        <Link to="/delete" state={list}>
          <button className="ui button blue ">Delete</button>
        </Link>
      </div>
    </div>
  );
}
