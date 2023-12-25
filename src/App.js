import "./App.css";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import CustumIteamProvider from "./itemContext";

function App() {
  return (
    <CustumIteamProvider>
      <div className="App">
        <h2>Shopping Cart</h2>

        <Navbar />
        <Items />
      </div>
    </CustumIteamProvider>
  );
}
export default App;
