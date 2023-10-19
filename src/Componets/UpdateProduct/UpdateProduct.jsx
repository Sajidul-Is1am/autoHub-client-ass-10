
const UpdateProduct = () => {



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

       
    }
    return (
        <div className="lg:mx-96 md:mx-16 mx-10 rounded-xl my-8 bg-gray-200">
            <h3 className="font-bold text-center text-4xl py-10 text-purple-600">Update Your Product</h3>
            <form onSubmit={handleSubmit} className="p-10 border">
                <div className="grid justify-center gap-6 md:grid-cols-2 grid-cols-1 ">
                    <input type="text" placeholder="Image Link" name="image" className="input input-bordered" />
                    <input type="text" placeholder="Name" name="name" className="input input-bordered " />
                    <input type="text" placeholder="Brand Name" name="brandname" className="input input-bordered " />
                    <input type="text" placeholder=" category" name="category" className="input input-bordered ;lg:col-span-2" />
                    <input type="text" placeholder="Price" name="price" className="input input-bordered " />
                    <input type="text" placeholder="Rating" name="rating" className="input input-bordered " />
                </div>
                <button type="submit" className="btn block mx-auto mt-10">Submit</button>

            </form>
        </div>
    );
};

export default UpdateProduct;