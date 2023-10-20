import toast from "react-hot-toast";
import { json, useLoaderData, useParams } from "react-router-dom";

const UpdateProduct = () => {

    const {id} = useParams();
    const productData = useLoaderData();
    
    const updatedProduct = productData.find(singleProduct => singleProduct._id === id);
    console.log(updatedProduct);
    

    const handleSubmit = event => {

        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const brandname = form.brandname.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;

        const productInfo = { image, name, brandname, category, price, rating }

        fetch(`https://autohub-brand-shop-server-ch57x3wps-mds040772-gmailcom.vercel.app/${id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(productInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast.success('Successfully Update Product')
        })

       
    }
    return (
        <div className="lg:mx-96 md:mx-16 mx-10 rounded-xl my-8 bg-gray-200">
            <h3 className="font-bold text-center text-4xl py-10 text-purple-600">Update Your Product</h3>
            <form onSubmit={handleSubmit} className="p-10 border">
                <div className="grid justify-center gap-6 md:grid-cols-2 grid-cols-1 ">
                    <input type="text" placeholder="Image Link" name="image" defaultValue={updatedProduct.image} className="input input-bordered" />
                    <input type="text" placeholder="Name" name="name" defaultValue={updatedProduct.name} className="input input-bordered " />
                    <input type="text" placeholder="Brand Name" defaultValue={updatedProduct.brandname} name="brandname" className="input input-bordered " />
                    <input type="text" placeholder=" category" defaultValue={updatedProduct.category} name="category" className="input input-bordered ;lg:col-span-2" />
                    <input type="text" placeholder="Price" defaultValue={updatedProduct.price} name="price" className="input input-bordered " />
                    <input type="text" placeholder="Rating" defaultValue={updatedProduct.rating} name="rating" className="input input-bordered " />
                </div>
                <button type="submit" className="btn block mx-auto mt-10">Submit</button>

            </form>
        </div>
    );
};

export default UpdateProduct;