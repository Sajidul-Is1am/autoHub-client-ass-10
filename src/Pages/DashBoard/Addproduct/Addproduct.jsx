// import axios from "axios";
import axios from "axios";
import Title from "../../Register/Title";

const Addproduct = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image?.value || "Not-Given";
    const name = form.name?.value || "Not-Given";
    const brandname = form.brandname?.value || "Not-Given";
    const category = form.category?.value || "Not-Given";
    const description = form.description?.value || "Not-Given";
    const price = form.price?.value || "Not-Given";
    const rating = form.rating?.value || "Not-Given";
    const userInfo = {
      image,
      name,
      brandname,
      category,
      description,
      price,
      rating,
      };
    //   console.log(userInfo);
    // fetch("http://localhost:5000/abcde", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(userInfo),
    // })
    //   .then((res) => res.json())
      //   .then((data) => console.log(data));
      axios.post("http://localhost:5000/abcde/xyz", userInfo)
      .then(res => console.log(res.data))
  };

  return (
    <div>
      <div>
        <Title>Add A Product</Title>

        <form onSubmit={handleSubmit} className="p-10">
          <div className="grid justify-center gap-6 md:grid-cols-2 grid-cols-1 ">
            <input
              type="text"
              placeholder="Image Link"
              name="image"
              className="input input-bordered"
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered "
              required
            />
            <input
              type="text"
              placeholder="Brand Name"
              name="brandname"
              className="input input-bordered "
              required
            />
            <input
              type="text"
              placeholder=" category"
              name="category"
              className="input input-bordered "
              required
            />

            <input
              type="text"
              placeholder="Short description"
              name="description"
              className="input input-bordered"
              required
            />
            <input
              type="text"
              placeholder="Price"
              name="price"
              className="input input-bordered "
              required
            />
            <input
              type="text"
              placeholder="Rating"
              name="rating"
              className="input input-bordered "
              required
            />
          </div>
          <button type="submit" className="btn block mx-auto mt-10">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
