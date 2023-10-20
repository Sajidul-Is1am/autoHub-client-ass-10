import MyCardItem from "../../Componets/MyCardItem";
import { useEffect, useState } from "react";
import Footer from "../../Componets/Footer/Footer";

const MyCard = () => {
   
    const [MyProducts, setMyproducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products/mycard')
        .then(res=>res.json())
        .then(data=>{
            
            setMyproducts(data)
        })
    },[MyProducts])

    // console.log(loadedProduct);

    return (
        <div>
            {/* <BsFillCartCheckFill></BsFillCartCheckFill> */}
            <div>
                <div className="grid md:grid-cols-2 grid-cols-1 lg:mx-24 md:mx-16 mx-10 my-20 gap-10">
                    {
                        MyProducts.map(cardItem => <MyCardItem
                            key={cardItem._id}
                            cardItem={cardItem}
                            loadedProduct={MyProducts}
                            setMyproducts={setMyproducts}
                        ></MyCardItem>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyCard;