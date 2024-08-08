import ReactDOM from "react-dom/client";
import Header from "./componets/Header";
import Body from "./componets/Body";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./componets/About";
// import Contact from "./componets/Contact";
import ErrorPage from "./componets/ErrorPage";
import RestaurantMenu from "./componets/RestaurantMenu";
import { lazy,Suspense } from "react";

const Contact = lazy(()=>import("./componets/Contact"))

const App = () => (
  <>
    <Header />
    <Outlet/>
  </>
);

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
root.render(<RouterProvider router={appRouter} />);
