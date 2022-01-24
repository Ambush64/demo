import "./index.css";
import Details from "./pages/Details";
import Profile from "./pages/Profile";
import Events from "./pages/Events";
import { useParams } from "react-router-dom";

const App = () => {
  const { id } = useParams();
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Profile />
          <Details />
          <Events />
        </div>
      </div>
    </>
  );
};

export default App;
