import { Link } from "react-router-dom";

const BrandItem = ({item}) => {
    const {_id,BrandName,BrandImage} = item;
    console.log(BrandName);
    // console.log(BrandName);
    return (
        <div>
            <Link to={ `/products/${BrandName}`}>
                <div className="card  glass">
                    <figure><img src={BrandImage} alt="car!" className="lg:h-[400px] w-full" /></figure>
                    <div className="card-body h-40">
                        <h3 className="text-3xl font-bold "><span className="text-[#36ae90]">Brand Name :</span>  {BrandName}</h3>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BrandItem;