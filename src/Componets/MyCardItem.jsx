import { MdDelete } from 'react-icons/md'
import Swal from 'sweetalert2';

const MyCardItem = ({ cardItem, setMyproducts, MyProducts }) => {
    const { _id, name, rating, price, category, brandname, image } = cardItem;


    const handleDelete = _id => {


        //==================
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://autohub-brand-shop-server-1xi8c9bdl-mds040772-gmailcom.vercel.app/products/mycard/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = MyProducts.filter(user => user._id !== _id);
                            setMyproducts(remaining)
                        }
                    })

            }
        })

    }
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl h-auto">
                <figure><img src={image} alt="Album" className="w-[350px] h-full" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h4>{brandname}</h4>
                    <p>{price}</p>
                    <p>{rating}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(_id)} className="btn bg-red-500 text-white"><MdDelete></MdDelete>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCardItem;