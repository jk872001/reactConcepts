import React from "react";
import Body from "./components/Body";
import Header from "./components/Header";
// import {Love} from "./Girlfriend";
import {
  createBrowserRouter,
  Outlet
} from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PageNotFound from "./pages/PageNotFound";
import RestaurantMenu from "./components/RestaurantMenu";
function App() {
  return (
    <React.Fragment>

      <Header />
      <Outlet />
    </React.Fragment>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/aboutus",
        element: <AboutUs />,

      },
      {
        path: "/contactus",
        element: <ContactUs />,

      },
      {
        path: "/",
        element: <Body />,

      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,

      },
    ],
  },
]);

export default App;
