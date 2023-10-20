import AutoSlideBrand from "../../Componets/AutoSlideBrand/AutoSlideBrand";
import Banner from "../../Componets/Banner/Banner";
import BrandHistory from "../../Componets/BrandHistory/BrandHistory";
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
            <BrandHistory></BrandHistory>
            <Footer></Footer>
        </div>
    );
};

export default Home;