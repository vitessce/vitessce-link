import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
