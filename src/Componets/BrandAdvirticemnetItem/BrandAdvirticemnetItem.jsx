import { FcRating } from 'react-icons/fc'
import { FaMoneyCheckAlt } from 'react-icons/fa'
import { TbListDetails } from 'react-icons/tb'
import { LuArrowBigUpDash } from 'react-icons/lu'
import { Link } from 'react-router-dom';

const BrandAdvirticemnetItem = ({ brand }) => {
    const {_id, rating, price, category, brandname, name, image } = brand;

    console.log(brand);
    
    return (
        <div>
            <div className="card bg-base-100 shadow-xl rounded">
                <figure><img src={image} alt="Shoes" className="h-[280px] w-full" /></figure>
                <div className="card-body h-[300px]">
                    <h2 className="card-title">
                        {brandname}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p><span className='font-bold'>Car Model : </span>{name}</p>
                    <p><span className='font-bold'>Category : </span>{category}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline p-4"><FaMoneyCheckAlt className='mr-2 text-orange-600'></FaMoneyCheckAlt>{price}</div>
                        <div className="badge badge-outline p-4"><FcRating className='mr-2'></FcRating>{rating}</div>
                    </div>
                    <div className='flex justify-between mt-2'>
                        <Link to={ `/products/details/${name}`}>
                            <button className="btn rounded-full">
                                Details
                                <TbListDetails className='text-mainColor'></TbListDetails>
                            </button>
                        </Link>
                        <Link to={`/update/${_id}`}>
                            <button className="btn  rounded-full">
                                Update
                                <LuArrowBigUpDash className='text-mainColor'></LuArrowBigUpDash>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandAdvirticemnetItem;