import Card from "./Card";
import { Link } from "react-router-dom";

function Main() {
    return (
        <div className = "h-auto">
            <div>
                <section>
                    <div className="py-8 px-4 mx-auto mt-6 mb-7 max-w-screen-xl text-center lg:py-16">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Get your Medicines instantly</h1>
                        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-white">Join us to experience a new way of dispensing medicines without human intervention</p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                            <Link to="/Products" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">Browse Products</Link>
                        </div>
                    </div>
                </section>
            </div>
            <div className="flex flex-row">
                <div className="basis-1/3">
                    <Card 
                    title = {"What is MedMaster?"} 
                    body = {"MedMaster is a revolutionary solution that aims to transform the pharmacy industry by using robotics and automation to fulfill prescription orders with accuracy and efficiency."}
                    />
                </div>
                <div className="basis-1/3">
                    <Card 
                    title = {"Why use MedMaster?"}
                    body = {"MedMaster allows customers to upload their prescription through a user-friendly interface or scan a QR and select their medicines, and a hidden robot automagically dispenses their medicines. It's that easy."}
                    />
                </div>
                <div className="basis-1/3">
                    <Card 
                    title = {"About MedMaster"} 
                    body = {"The system is built using a modern tech stack, including React.js, Node.js and Express.js for the frontend and backend."}
                    />
                </div>
            </div>
        </div>
    );
}

export default Main;