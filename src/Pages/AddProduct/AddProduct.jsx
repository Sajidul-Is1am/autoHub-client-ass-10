import toast from "react-hot-toast";

const AddProduct = () => {

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const brandname = form.brandname.value;
        const category = form.category.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;

        const productInfo = { image, name, brandname, category, description, price, rating }
        fetch('https://autohub-brand-shop-server-ch57x3wps-mds040772-gmailcom.vercel.app', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged == true) {
                    toast.success('Successfully Added Product')
                    form.reset()
                }
                console.log(data);
            })
    }




    return (
        <div className="lg:mx-96 md:mx-16 mx-10 rounded-xl my-8 bg-gray-200">
            <h3 className="font-bold text-center text-4xl py-10 text-purple-600">Add the products you like</h3>
            <form onSubmit={handleSubmit} className="p-10 border">
                <div className="grid justify-center gap-6 md:grid-cols-2 grid-cols-1 ">
                    <input type="text" placeholder="Image Link" name="image" className="input input-bordered lg:col-span-2" />
                    <input type="text" placeholder="Name" name="name" className="input input-bordered " />
                    <input type="text" placeholder="Brand Name" name="brandname" className="input input-bordered " />
                    <input type="text" placeholder=" category" name="category" className="input input-bordered ;lg:col-span-2" />

                    <input type="text" placeholder="Short description" name="description" className="input input-bordered lg:col-span-2" />
                    <input type="text" placeholder="Price" name="price" className="input input-bordered " />
                    <input type="text" placeholder="Rating" name="rating" className="input input-bordered " />
                </div>
                <button type="submit" className="btn block mx-auto mt-10">Add Product</button>

            </form>
        </div>
    );
};

export default AddProduct;