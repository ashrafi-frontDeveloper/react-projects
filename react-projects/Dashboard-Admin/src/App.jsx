import { RouterProvider } from "react-router";
import router from "./routes";
import { ScrollRestoration } from "react-router";
import "./../public/css/index.css"
import "./../public/css/fonts.css"

const App = () => {
  return (
    <RouterProvider router={router}>
      <ScrollRestoration />
    </RouterProvider>
  );
};

export default App;