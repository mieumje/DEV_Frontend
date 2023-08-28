import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { LicenseManager } from "ag-grid-enterprise";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";

LicenseManager.setLicenseKey(import.meta.env.VITE_AG_GRID_KEY);

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
