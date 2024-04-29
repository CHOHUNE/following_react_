import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

const Loading = <div>Loading....</div>
const ProductsList =  lazy(() => import("../pages/products/ListPage"))

const ProductAdd = lazy ( ()=> import ("../pages/products/AddPage"))

const productsRouter = () => {

    return [
        {
            path: "list",
            element: <Suspense fallback={Loading}><ProductsList/></Suspense>
        },
        {
            path: "",
            element: <Navigate replace to="/products/list"/>
        },
        {
            path: "add",
            element: <Suspense fallback={Loading} ><ProductAdd/></Suspense>
        }


    ]
}

export default productsRouter;