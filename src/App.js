import logo from "./logo.svg";
import "./App.css";
import SharedLayout from "./components/SharedLayout";
import Test from "./components/Test";
import Test2 from "./components/Test2";
import KilamForm from "./components/Form/KilamForm";

function App() {
  return (
    <div className="App">
      <SharedLayout>
        {/* <Test />
        <Test2 /> */}
        <KilamForm/>
      </SharedLayout>
    </div>
  );
}

export default App;
