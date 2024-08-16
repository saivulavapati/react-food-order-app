import ReactDOM from "react-dom/client";
import { lazy,StrictMode,Suspense, useEffect, useState } from "react";
import Header from "./componets/Header";
import Body from "./componets/Body";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./componets/About";
// import Contact from "./componets/Contact";
import ErrorPage from "./componets/ErrorPage";
import RestaurantMenu from "./componets/RestaurantMenu";
import { Provider } from "react-redux";
import Cart from "./componets/Cart";
import UserContext from "./utils/UserContext";
import appStore from "./redux/appStore";

const Contact = lazy(()=>import("./componets/Contact"))

const App = () => {

  const[authenticatedUser,setAuthenticatedUser] = useState("default user");

  useEffect(()=>{
    const data = {"authenticatedUser":"Sai Vulavapati"}
    setAuthenticatedUser(data.authenticatedUser)
  },[])

  return(
    <Provider store={appStore}>
    <UserContext.Provider value={{"loggedUser":authenticatedUser,setAuthenticatedUser}}>
      <Header />
      <Outlet/>
    </UserContext.Provider>
  </Provider>
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
      path: "/cart",
      element: <Suspense fallback={<h1>Loading...</h1>}><Cart/></Suspense>,
    },
    {
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>
    }
  ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={appRouter} />
);
