import { useLoaderData, useParams } from "react-router-dom";
import { BiSolidCartAdd } from 'react-icons/bi'
import toast from "react-hot-toast";

const Details = () => {
    const { model } = useParams()
    const detailsData = useLoaderData();
    const carDetails = detailsData.find(car => car.name === model);
    const { name, rating, price, category, brandname, image, description } = carDetails

    const addedData = { name, rating, price, category, brandname, image, description }

    const handleAddToCard = () => {
        fetch(`https://autohub-brand-shop-server-ch57x3wps-mds040772-gmailcom.vercel.app/mycard`, {
            method: "POST",
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify(addedData)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Add This Product in Cart')
                console.log(data);
            })
    }

    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:mx-24 md:mx-16 mx-10 gap-10 mt-20 items-center">
            <div className="">
                <img src={image} alt="" className="h-[450px] w-full" />
            </div>
            <div className="space-y-6">
                <h4 className="text-xl flex items-center gap-3"><span className="text-2xl font-bold">Car Model : </span> {name}</h4>
                <h4 className="text-xl flex items-center gap-3"><span className="text-2xl font-bold">Brand Name : </span> {brandname}</h4>
                <h4 className="text-xl flex items-center gap-3"><span className="text-2xl font-bold">Category :  </span> {category}</h4>
                <h4 className="text-xl flex items-center gap-3"><span className="text-2xl font-bold">Price :  </span>   {price}</h4>
                <h4 className="text-xl flex items-center gap-3"><span className="text-2xl font-bold">Rating :  </span>  {rating}</h4>
                <h5 className="text-xl max-w-2xl"><span className=" text-2xl font-bold">Here is a short description : </span> {description}</h5>
                <button onClick={handleAddToCard} className="btn bg-orange-500 text-white">
                    Add to Cart
                    <BiSolidCartAdd></BiSolidCartAdd>
                </button>
            </div>
        </div>
    );
};

export default Details;