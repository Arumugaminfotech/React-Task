import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="Container">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
}
