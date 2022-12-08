import "./App.css";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import PersonalCard from "./components/ContactDetails";
import Delete from "./components/Delete";
import Edit from "./components/Edit";
import { ValueProvider } from "./context/context";
import { Helmet } from "react-helmet";

export default function App() {
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Helmet>
          <title>Contact Management</title>
          <meta
            name="description"
            content="An advance contact management website"
          />
        </Helmet>

        <ValueProvider>
          <Routes>
            <Route path="/" element={<ContactList />} />
            <Route path="/addcontact" element={<AddContact />} />
            <Route path="/contact/:id" element={<PersonalCard />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/delete" element={<Delete />} />
            <Route
              path="*"
              element={
                <>
                  <div className="emptydiv"></div>
                  <h1>404 not found</h1>
                </>
              }
            />
          </Routes>
        </ValueProvider>
      </Router>
    </div>
  );
}
