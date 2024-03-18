// import { invoke } from "@tauri-apps/api/tauri";
import "./App.scss";
import SudokuGrid from "./components/SudokuGrid";
import KeyPad from "./components/KeyPad";

function App() {
  //   async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  // setGreetMsg(await invoke("greet", { name }));
  //   }
  return (
    <div className="container">
      <h1>Sudoku Solver</h1>

      <div className="row">
        <SudokuGrid />
        <KeyPad />
      </div>
    </div>
  );
}

export default App;
