// import MedCard from "../Components/MedCard";
// import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";
// import Shelcal from "../Meds/Shelcal.PNG";
// import Zincovit from "../Meds/Zincovit.PNG";
// import Dolo from "../Meds/Dolo.PNG";
// import Drise from "../Meds/DRise.PNG";

// function Products() {
//     const products = [
//         {
//             id: 1,
//             name: "Dolo 650",
//             url: Dolo,
//             price: 50,
//             angle: 0
//         },
//         {
//             id: 2,
//             name: "Zincovit",
//             url: Zincovit,
//             price: 150,
//             angle: 90
//         },
//         {
//             id: 3,
//             name: "Shelcal 500",
//             url: Shelcal,   
//             price: 131,
//             angle: 180
//         },
//         {
//             id: 4,
//             name: "D-Rise 60k",
//             url: Drise,
//             price: 250,
//             angle: 210
//         },
//     ];

//     return (
//         <div className="home-bg">
//         <Navbar />
//         <div className="flex mt-0 mb-0 bg-home-bg flex-wrap justify-center">
//             {products.map((med) => (
//                 <MedCard key = {med.id} name = {med.name} price={med.price} url = {med.url} angle = {med.angle}/>
//             ))}
//         </div>
//         <Footer />
//         </div>
//     );
// }

// export default Products;



import { useState } from "react";
import axios from "axios";
import MedCard from "../Components/MedCard";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Shelcal from "../Meds/Shelcal.PNG";
import Zincovit from "../Meds/Zincovit.PNG";
import Dolo from "../Meds/Dolo.PNG";
import Drise from "../Meds/DRise.PNG";

function Products() {
    const [arr, setArr] = useState([]);
    const products = [
    {
      id: 1,
      name: "Dolo 650",
      url: Dolo,
      price: 50,
      angle: 0,
    },
    {
      id: 2,
      name: "Zincovit",
      url: Zincovit,
      price: 150,
      angle: 270,
    },
    {
      id: 3,
      name: "Shelcal 500",
      url: Shelcal,
      price: 131,
      angle: 180,
    },
    {
      id: 4,
      name: "D-Rise 60k",
      url: Drise,
      price: 250,
      angle: 90,
    },
  ];

  return (
    <div className="bg-home-bg">
      <Navbar />
      <div className="flex mt-5 mb-5 flex-wrap justify-center">
        {products.map((med) => (
          <MedCard
            key={med.id}
            name={med.name}
            price={med.price}
            url={med.url}
            angle={med.angle}
            setArrFunc={setArr}
            />
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-l px-5 py-2.5 mb-8 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        //   onClick={handleCheckout}
        //   disabled={cart.length === 0}
        >
          Checkout
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
