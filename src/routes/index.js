import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Employees from '../pages/employees/Employees';
import AddEmployee from '../pages/employees/AddEmployee';
import Salaries from '../pages/salaries/Salaries';
import Vendors from '../pages/vendors/Vendors';
import PurchaseOrders from "../pages/purchaseorders/PurchaseOrders";
import Invoice from '../pages/invoice/Invoice';
import JobCard from '../pages/jobcard/JobCard';
import Products from '../pages/products/Products';
import Packages from '../pages/packages/Packages';
import Signin from "../pages/signin/Signin";
import Error from "../pages/error";
import Layout from "../shared/layout/Layout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Signin />,
                errorElement: <Error />
            },
            {
                path: '/dashboard',
                element: <Dashboard />,
                errorElement: <Error />
            },
            {
                path: '/employees',
                element: <Employees />,
                errorElement: <Error />
            },
            {
                path: '/employees/add',
                element: <AddEmployee />,
                errorElement: <Error />
            },
            {
                path: '/salaries',
                element: <Salaries />,
                errorElement: <Error />
            },
            {
                path: '/vendors',
                element: <Vendors />,
                errorElement: <Error />
            },
            {
                path: '/purchaseorders',
                element: <PurchaseOrders />,
                errorElement: <Error />
            },
            {
                path: '/invoice',
                element: <Invoice />,
                errorElement: <Error />
            },
            {
                path: '/jobcard',
                element: <JobCard />,
                errorElement: <Error />
            },
            {
                path: '/products',
                element: <Products />,
                errorElement: <Error />
            },
            {
                path: '/packages',
                element: <Packages />,
                errorElement: <Error />
            }
        ]
    }
])