import { useLoaderData, useParams } from "react-router-dom";

const BrandAdvirticement = () => {
    const brandName= useParams();
    const name = brandName.id;
    console.log(name,"form useParams");
    const AllProducts = useLoaderData();
    const perBrandData = AllProducts.filter(item => item.brandname === name);
    console.log(perBrandData);
    return (
        <div>
            Adverticment part
        </div>
    );
};

export default BrandAdvirticement;