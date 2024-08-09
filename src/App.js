import ReactDOM from "react-dom/client";
import { lazy,StrictMode,Suspense, useEffect, useState } from "react";
import Header from "./componets/Header";
import Body from "./componets/Body";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./componets/About";
// import Contact from "./componets/Contact";
import ErrorPage from "./componets/ErrorPage";
import RestaurantMenu from "./componets/RestaurantMenu";

import UserContext from "./utils/UserContext";

const Contact = lazy(()=>import("./componets/Contact"))

const App = () => {

  const[authenticatedUser,setAuthenticatedUser] = useState("default user");

  useEffect(()=>{
    const data = {"authenticatedUser":"Sai Vulavapati"}
    setAuthenticatedUser(data.authenticatedUser)
  },[])

  return(
    <>
    <UserContext.Provider value={{"loggedUser":authenticatedUser,setAuthenticatedUser}}>
      <Header />
      <Outlet/>
    </UserContext.Provider>
  </>
  )
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children:[{
      path:"/",
      element:<Body/>
    },{
      path: "/about",
      element: <About/>,
    },
    {
      path: "/contact",
      element: <Suspense fallback={<h1>Loading...</h1>}><Contact/></Suspense>,
    },
    {
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>
    }
  ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<StrictMode>
  <RouterProvider router={appRouter} />
</StrictMode>);
