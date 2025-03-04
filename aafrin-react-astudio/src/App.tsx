import "./App.css";
import "./index.css";
import "./assets/fonts/neutra-text-bold-5871e1605afa2.otf";
import "./assets/fonts/neutra-text-tf-5871e0b0704ed.otf";
import Users from "./components/Users";

function App() {
  return (
    <>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Users
      </button>

      <button
        type="button"
        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        Products
      </button>

      <br />

      <Users />
    </>
  );
}

export default App;
