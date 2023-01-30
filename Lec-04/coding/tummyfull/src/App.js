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
import useOnline from "./hooks/useOnline";
function App() {

 const isOnline=useOnline();

 if(!isOnline)
 {
  return <h1>Offline! Please check your internet connection</h1>
 }
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
