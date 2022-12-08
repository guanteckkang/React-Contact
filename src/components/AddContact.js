import { useProvide } from "../context/context";
import { Helmet } from "react-helmet";
export default function AddContact() {
  // const { add, nameRef, emailRef, jobRef, descriptionRef } = useProvide();
  const { add, name, email, job, description, state, setState } = useProvide();

  return (
    <div className="maindiv">
      <Helmet>
        <title>Add New Contact</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="ui main ">
        <div className="emptydiv"></div>
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={add}>
          <div className="subdiv1">
            <div className="field">
              <label>Name:</label>
              <input
                required
                className="input1"
                type="text"
                // ref={nameRef}
                value={name}
                onChange={(e) => {
                  setState((prevState) => {
                    return { ...prevState, name: e.target.value };
                  });
                }}
              ></input>
            </div>
            <div className="field">
              <label>Email:</label>
              <input
                required
                className="input1"
                type="email"
                // ref={emailRef}
                value={email}
                onChange={(e) => {
                  setState((prevState) => {
                    return { ...prevState, email: e.target.value };
                  });
                }}
              ></input>
            </div>
            <div className="field">
              <label>Occupation:</label>
              <input
                required
                className="input1"
                type="text"
                // ref={jobRef}
                value={job}
                onChange={(e) => {
                  setState((prevState) => {
                    return { ...prevState, job: e.target.value };
                  });
                }}
              ></input>
            </div>
            <div className="field">
              <label>Description:</label>
              <input
                required
                className="input1"
                type="text"
                // ref={descriptionRef}
                value={description}
                onChange={(e) => {
                  setState((prevState) => {
                    return { ...prevState, description: e.target.value };
                  });
                }}
              ></input>
            </div>
          </div>
          <div className="subdiv2">
            <button
              className="ui button blue "
              style={{ fontSize: "60px", margin: "30px auto" }}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
