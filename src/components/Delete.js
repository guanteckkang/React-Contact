import { useProvide } from "../context/context";
import { useLocation } from "react-router-dom";
import profile from "../img/profile.png";
import { Helmet } from "react-helmet";
export default function Delete() {
  const { removeitem } = useProvide();

  const location = useLocation();
  const data = location.state;
  const { id, name, email, job, description } = data;

  return (
    <>
      <Helmet>
        <title>Delete Contact</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="emptydiv"></div>
      <div>
        <h1>Are you sure you wanted to delete this personal contact?</h1>
        <div className="maindiv">
          <div className="ui card subdiv1">
            <div className="image">
              <div className="ui segment">
                <img style={{ width: "200px" }} alt="broken " src={profile} />
              </div>
            </div>
            <div className="content">
              <div className="header">{name}</div>
              <div className="meta">
                <span className="date">{email}</span>
              </div>
              <div className="description">
                {job},{description}
              </div>
            </div>
          </div>
          <div className="subdiv2">
            <i
              onClick={() => {
                removeitem(id);
              }}
              className="trash red alternate outline huge icon"
              style={{ fontSize: "150px", margin: "50px auto" }}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
}
