import logo from "../Logo-Transparentbg.png";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" class="flex items-center">
                    <img src={logo} class="h-10 mr-3" alt="MedMaster" />
                    <span class="self-center text-3xl font-bold whitespace-nowrap dark:text-white">MedMaster</span>
                </Link>
                <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                <ul class="flex flex-col text-xl font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                    <li>
                    <Link to="/" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</Link>
                    </li>
                    <li>
                    <Link to="/Products" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Products</Link>
                    </li>
                    <li>
                    <a href = "https://www.practo.com/consult" className="inline-flex justify-center items-center py-1 px-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">Consult Doctor</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;