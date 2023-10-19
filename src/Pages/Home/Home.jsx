import AutoSlideBrand from "../../Componets/AutoSlideBrand/AutoSlideBrand";
import Banner from "../../Componets/Banner/Banner";
import Brands from "../../Componets/Brands/Brands";
import Footer from "../../Componets/Footer/Footer";
import PowerFul from "../../Componets/PowerFul/PowerFul";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <AutoSlideBrand></AutoSlideBrand>

            <PowerFul></PowerFul>
            <Footer></Footer>
        </div>
    );
};

export default Home;