
const Footer = () => {
    return (
        <div className="bg-[#08213e]">
            <div className="lg:mx-24 md:mx-16 mx-10">
                <footer className="footer p-10  text-white grid justify-between lg:grid-cols-4 md:grid-cols-2 grid-cols-2 ">
                    <nav className="col-span-2">
                        <header className="footer-title">About Us</header>
                        <a className="link link-hover"><img src="https://i.ibb.co/Fs0w3Wx/auto-Hub-logo.png" alt="" className="w-[175px] h-[45px]" /></a>
                        <p className="max-w-[270px]">Explore the world of automotive excellence. Discover the latest in innovation, performance, and style. Drive with passion</p>
                    </nav>
                    <nav>
                        <header className="footer-title">UseFul Links</header>
                        <a className="link link-hover">Home</a>
                        <a className="link link-hover">Add Product</a>
                        <a className="link link-hover">My Cart</a>
                        <a className="link link-hover">Extra 1</a>
                        <a className="link link-hover">Extra 2</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Contact Info</header>
                        <a className="link link-hover">Phone</a>
                        <a className="link link-hover">Email</a>
                        <a className="link link-hover">Address</a>
                    </nav>
                    <form className="col-span-2 text-white">
                        <header className="footer-title">Subscribe</header>
                        <fieldset className="form-control w-80">
                            <label className="label">
                                <span className="label-text text-white">Enter your email address</span>
                            </label>
                            <div className="relative">
                                <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </footer>
            </div>
        </div>
    );
};

export default Footer;