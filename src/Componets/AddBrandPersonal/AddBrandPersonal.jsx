
const AddBrandPersonal = () => {
    const handleBrandAdd = event => {
        event.preventDefault();
        const form = event.target;
        const BrandImage = form.brandimage.value;
        const BrandName = form.brandname.value;

        const BrandInfo = {BrandImage,BrandName }
        fetch('https://autohub-brand-shop-server-1xi8c9bdl-mds040772-gmailcom.vercel.app/brands', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(BrandInfo)
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged == true){
                    form.reset()
                }
                console.log(data);
            })
    }
    return (
        <div className="lg:mx-96 md:mx-16 mx-10 rounded-xl my-8 bg-gray-200">
            <h3 className="font-bold text-center text-4xl py-10 text-purple-600">Add Brand</h3>
            <form onSubmit={handleBrandAdd} className="p-10 border">
                <div className="grid justify-center gap-6 md:grid-cols-2 grid-cols-1 ">
                    <input type="text" placeholder="Brand Image" name="brandimage" className="input input-bordered" />
                    <input type="text" placeholder="Brand Name" name="brandname" className="input input-bordered " />
                </div>
                <button type="submit" className="btn block mx-auto mt-10">Add Product</button>

            </form>
        </div>
    );
};

export default AddBrandPersonal;