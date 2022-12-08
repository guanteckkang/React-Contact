import { useProvide } from "../context/context";

export default function ContactList() {
  const { search, setSearch, renderlist, filter } = useProvide();

  return (
    <div className="ui celled list">
      <div className="emptydiv"></div>
      <h2 style={{ display: "inline-block" }}>Contact List</h2>
      <div
        className="ui search"
        style={{
          display: "inline-block",
          marginLeft: "30px",
        }}
      >
        <div className="ui icon input">
          <input
            // ref={inputRef}
            type="text"
            className="prompt"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>

          <i className="search icon"></i>
        </div>
        <i
          onClick={() => setSearch("")}
          className="x icon"
          style={{ marginLeft: "5px" }}
        ></i>
      </div>
      <h4>Result found: {filter.length}</h4>
      {filter.length === 0 ? (
        <h2>No list</h2>
      ) : (
        <div className="grid">{renderlist}</div>
      )}
    </div>
  );
}
