import { useState } from "react";
import axios from "axios";

function MedCard(props, {setArrFunc}) {
    const [angle, setAngle] = useState(0);
    const [cart, setCart] = useState([]);

    const handleAngleChange = async (newAngle) => {
        setAngle(newAngle);
        try {
        const { data } = await axios.post(
            'http://localhost:2000/dispense',
            {
                angle: newAngle.toString(),
            },
            {
                headers: {'Content-Type': 'application/json',},
            }
        );
        console.log(data);
        handleAddToCart(props)
        } 
        catch (error) {
        console.log(error);
        }
    }

    const handleAddToCart = (med) => {
        setCart([...cart, med]);
        console.log("added to cart")
        console.log(med.name)
      };
    
    const handleCheckout = async () => {
    try {
        for (let i = 0; i < cart.length; i++) {
        const { data } = await axios.post(
            "http://localhost:2000/dispense",
            {
            angle: cart[i].angle.toString(),
            },
            {
            headers: { "Content-Type": "application/json" },
            }
        );
        console.log(data);
        }
        setCart([]);
    } catch (error) {
        console.log(error);
    }
    };

    return ( 
        <div className="w-full max-w-sm bg-white justify-center border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
            <div className="flex justify-center"><img className="p-8 h-64 rounded-t-lg" src={props.url} alt="product image" /></div>
            <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">₹{props.price}</span>
                    <button href="#" onClick = {() => handleAngleChange(props.angle)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
                </div>
            </div>
        </div>
     );
}

export default MedCard;