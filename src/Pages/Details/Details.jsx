import { useLoaderData } from "react-router-dom";

const Details = () => {
    const detailsData = useLoaderData();
    console.log(detailsData);
    return (
        <div>
            This is details page
        </div>
    );
};

export default Details;