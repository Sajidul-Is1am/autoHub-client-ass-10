const PowerFul = () => {
    return (
        <div className="bg-black py-16 my-20 text-white">
            <div className="text-center mb-16">
                <h4 className="text-xl font-semibold">Top Power</h4>
                <h3 className="text-4xl font-bold mt-3 text-red-600">Engine Spacifications</h3>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 items-center  lg:mx-24 md:mx-16 mx-10">
                <div className="col-span-2">
                    <div className=" mb-8">
                        <h2 className="text-7xl font-bold uppercase">Powerful</h2>
                        <h3 className="text-3xl my-3">Handcrafted Engine</h3>
                        <p className="text-xl">GLA999 comes with 999 horsepower motor. The Engine will get up to speed of 180 mph in seconds.</p>
                    </div>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 my-6 w-full text-center">   
                        <div className="card shadow-xl border-2 border-rose-600 p-4">
                            <figure><img src="https://i.ibb.co/JtzNZjs/Meximum-Power-icon.png" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title block text-center font-bold">Maximum Power</h2>
                                <p className="text-3xl font-semibold text-red-600">Acceleration 0-60km/h</p>
                                <p className="text-xl font-medium">at 9000 rpm</p>
                            </div>
                        </div>
                        <div className="card  shadow-xl border-2 p-4 border-rose-600">
                            <figure><img src="https://i.ibb.co/FbWMkh8/speed-icon.png" alt="Shoes" /></figure>
                            <div className="card-body ">
                                <h2 className="card-title block text-center">Acceleration 0-60km/h</h2>
                                <p className="text-3xl font-semibold text-red-600">3.4 SEC </p>
                                <p className="text-xl font-medium">0-60km/h </p>
                            </div>
                        </div>
                        <div className="card  shadow-xl border-2 p-4 border-rose-600">
                            <figure><img src="https://i.ibb.co/ggB5ZJk/car-body-icon.png" alt="Shoes" /></figure>
                            <div className="card-body ">
                                <h2 className="card-title block text-center">Body</h2>
                                <p className="text-3xl font-semibold text-red-600">Retractable </p>
                                <p className="text-xl font-medium">Hard-top</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <img src="https://i.ibb.co/BKGy4f2/car-engine.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default PowerFul;

// https://i.ibb.co/FbWMkh8/speed-icon.png
//
// 



