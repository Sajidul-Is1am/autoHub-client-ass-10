import { useLoaderData } from "react-router-dom";
import MyCardItem from "../../Componets/MyCardItem";
import { useState } from "react";

const MyCard = () => {
    const loadedProduct = useLoaderData();
    // console.log(loadedProduct);
    const [MyProducts, setMyproducts] = useState(loadedProduct)

    return (
        <div>
            {/* <BsFillCartCheckFill></BsFillCartCheckFill> */}
            <div>
                <div className="grid md:grid-cols-2 grid-cols-1 lg:mx-24 md:mx-16 mx-10 my-20 gap-10">
                    {
                        MyProducts.map(cardItem => <MyCardItem
                            key={cardItem._id}
                            cardItem={cardItem}
                            loadedProduct={loadedProduct} 
                            setMyproducts={setMyproducts}
                        ></MyCardItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyCard;