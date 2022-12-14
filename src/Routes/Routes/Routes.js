import { createBrowserRouter } from "react-router-dom";
import Main from "../../components/Main/Main";
import PrivateRoute from "../../contexts/PrivateRoutes/PrivateRoute";
import Catagory from "../../Pages/Cetagory/Cetagory/Catagory";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import News from "../../Pages/News/News/News";
import Profile from "../../Pages/terms/Profile/Profile";
import TermsAndCondition from "../../Pages/terms/TermsAndCondition/TermsAndCondition";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>,
                loader : () => fetch('http://localhost:5000/news')
            },
            {
                path: '/category/:id',
                element: <Catagory></Catagory>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndCondition></TermsAndCondition>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }

        ]
    }
])