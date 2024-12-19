import { createBrowserRouter } from "react-router-dom";
import App from "../Pages/Home/App";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>
    }
])

export default router
