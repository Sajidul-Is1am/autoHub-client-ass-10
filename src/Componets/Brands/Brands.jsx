import  { useEffect, useState } from 'react';
import BrandItem from "../BrandItem/BrandItem";

const Brands = () => {
    const [brands,setBrands] = useState([])

    useEffect(() => {
        fetch('https://autohub-brand-shop-server-1xi8c9bdl-mds040772-gmailcom.vercel.app/brands')
        .then(res => res.json())
        .then(data => setBrands(data))
    },[])
    
    
    
    return (
        <div className="lg:mx-24 md:mx-16 mx-10">
            <div className="text-center my-20">
                <h4 className="text-xl font-semibold">Available Brand</h4>
                <h3 className="text-4xl font-bold mt-3 text-mainColor">Cars Collections</h3>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-14">
                {
                    brands.map(item => <BrandItem key={item._id} item={item}></BrandItem>)
                }
            </div>
            
        </div>
    );
};

export default Brands;