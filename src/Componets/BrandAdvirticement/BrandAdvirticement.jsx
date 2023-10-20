import { useLoaderData } from "react-router-dom";
import BrandAdvirticemnetItem from "../BrandAdvirticemnetItem/BrandAdvirticemnetItem";
import Footer from "../Footer/Footer";

const BrandAdvirticement = () => {
    const AllProducts = useLoaderData();
    return (

        <div>
            <div>
                {
                    (AllProducts == '') ? '' :
                        <div className="carousel w-full">
                            <div id="slide1" className="carousel-item relative w-full md:h-[600px]">
                                <img src="https://i.ibb.co/WfNbbns/car-offer-02.jpg" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide3" className="btn btn-circle">❮</a>
                                    <a href="#slide2" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide2" className="carousel-item relative w-full md:h-[600px]">
                                <img src="https://i.ibb.co/SvvQfqL/car-offer-01.jpg" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" className="btn btn-circle">❮</a>
                                    <a href="#slide3" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide3" className="carousel-item relative w-full md:h-[600px]">
                                <img src="https://i.ibb.co/ftcrdyD/car-offer-03.jpg" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" className="btn btn-circle">❮</a>
                                    <a href="#slide1" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </div>
                }
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mx-4 gap-4 my-20">

                {
                    (AllProducts == '') ? <>
                        <div className="lg:col-span-4 md:col-span-2 col-span-1 ">
                            <div className="flex flex-col h-screen justify-center items-center">
                            <h1 className="md:text-7xl text-5xl mb-20 font-bold">Opps Sorry..</h1>
                            <h2 className="md:text-5xl text-xl font-semibold">This Brand Adverticement Are Not Avilable </h2>
                            </div>
                        </div>
                    </>
                        : AllProducts.map(brand => <BrandAdvirticemnetItem key={brand._id} brand={brand}></BrandAdvirticemnetItem>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default BrandAdvirticement;