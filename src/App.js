import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/footerComponent/Footer";
import Topic from "./components/ptuTopicComponent/Topic";
import AboutPtu from "./components/aboutComponent/AboutPtu";
import StudentCount from "./components/studentCount/count";

function App() {
  return (
    <div className="App">
      {/* <Topic /> */}
      {/* <Footer /> */}
      {/* <AboutPtu /> */}
      <StudentCount />
    </div>
  );
}

export default App;
