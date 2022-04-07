import "./App.css";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
  document.title = 'YouTube'
  return (
    <>
      <div id="app">
        <div> {<Sidebar />}</div>
        <div> {<MainContent />}</div>
      </div>
    </>
  );
}

export default App;
