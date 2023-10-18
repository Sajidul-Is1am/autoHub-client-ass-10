const AddProduct = () => {

    




    return (
        <div className="lg:mx-96 md:mx-16 mx-10 rounded-xl my-8 bg-gray-200">
            <h3 className="font-bold text-center text-4xl py-10 text-purple-600">Add the products you like</h3>
            <form className="p-10 border">
                <div className="grid justify-center gap-6 md:grid-cols-2 grid-cols-1 ">
                    <input type="text" placeholder="Image Link" className="input input-bordered col-span-2" />
                    <input type="text" placeholder="Name" className="input input-bordered " />
                    <input type="text" placeholder="Brand Name" className="input input-bordered " />
                    <input type="text" placeholder=" category" className="input input-bordered " />
                    <input type="text" placeholder="Type here" className="input input-bordered " />
                    <input type="text" placeholder="Short description" className="input input-bordered col-span-2" />
                    <input type="text" placeholder="Price" className="input input-bordered " />
                    <input type="text" placeholder="Rating" className="input input-bordered " />
                </div>
                <button className="btn block mx-auto mt-10">Add Product</button>

            </form>
        </div>
    );
};

export default AddProduct;