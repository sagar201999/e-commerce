import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'

const Home = ({ onAddToCart}) => {

    const [data, setData] = useState([]);  //get the data from api
    const [show, setShow] = useState(false);  //for expanding button 
    // const [productCounts, setProductCounts] = useState({});

    useEffect(() => {
        fetch('https://659fae025023b02bfe8a2e3b.mockapi.io/Mobiles/products')
            .then((res) => res.json())
            .then((data) => {
                setData(data);

            });
    }, []);


    const toggleProduct = () => {
        setShow(!show);

    }

    // const handleAddToCart = (productId, productDetails) => {
    //     const newCount = (productCounts[productId] || 0) + 1;
    //     setProductCounts((prevCounts) => ({
    //         ...prevCounts,
    //         [productId]: newCount,
    //     }));
    //     onAddToCart(newCount, { ...productDetails, productId }); // Notify App.js of the total count and product details
    // };


    return (
        <>
            <div id="home">
                <section className="d-flex justify-content-between flex-wrap">
                    <article className="home-product-1 p-3">
                        <div>
                            <h5><strong>Upgrade Your Tech Game</strong></h5>
                            <p>Gradually work you way up to more intensive games as</p>
                            <button className="btn btn-light px-3">Shop Now</button>
                        </div>
                        <div>
                            <img src="../../product-Images/home-product-1.png" alt="product-1" className="w-100" />
                        </div>
                    </article>
                    <article className="home-product-2 p-3">
                        <div>
                            <h4><strong>iPhone Headphones</strong></h4>
                            <button className="btn btn-light px-3">Shop Now</button>
                        </div>
                        <div>
                            <img src="../../product-Images/home-product-2.png" alt="product-1" className="w-100" style={{ margin: '8rem 0' }} />
                        </div>
                    </article>
                    <div>
                        <article className="home-product-3 mb-3 p-3">
                            <div>
                                <h4><strong>Smart watch</strong></h4>
                                <button className="btn btn-light px-3">Shop Now</button>
                            </div>
                            <div>
                                <img src="../../product-Images/home-product-3.1.png" alt="product-1" className="w-75 ms-5" />
                            </div>
                        </article>
                        <article className="home-product-4 p-3">
                            <div>
                                <h5><strong>Wireless HeadPhones</strong></h5>
                                <button className="btn btn-light">Shop Now</button>
                            </div>
                            <div>
                                <img src="../../product-Images/home-product-4.png" alt="product-1" className="w-75 mx-5" />
                            </div>
                        </article>
                    </div>

                </section>

                <div>
                    <h4 className="text-center my-5">Trending This Week</h4>
                    <div className="wrapper">
                        {show ? (
                            data && data.map((obj) => (
                                <div key={obj.id} className="items">
                                    <Link to={`/products/${obj.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                        <div>
                                            <img src={obj.image.image1} alt="thumbnail" className="home-img" />
                                        </div>
                                        <div>
                                            <h5 className="mt-3 mb-0"><strong>{obj.title}</strong></h5>
                                            <p className="p-0 m-0">{obj.rating}<span className="fs-5 text-warning">★</span></p>
                                            <p className="mb-0 fs-5"><strong className="fw-bolder">₹ {obj.price.OfferPrice}</strong><s className="ms-4 fs-6 text-danger">₹ {obj.price.price}</s></p>
                                            <p className="mb-0">Free Delivery</p>
                                            <p className="text-success">in stock <span className="fs-5"> {obj.availability} </span> items</p>
                                        </div>
                                    </Link>
                                    {/* <button className="btn btn-primary w-100" onClick={() => handleAddToCart(obj.id, { image: obj.image, price: obj.price, title: obj.title })}>
                                        Add to Cart
                                    </button> */}
                                </div>
                            ))
                        ) : data.slice(0, 3).map((obj) => (
                            <div key={obj.id} className="items">
                                <Link to={`/products/${obj.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                    <div>
                                        <img src={obj.image.image1} alt="thumbnail" className="home-img" />
                                    </div>
                                    <div>
                                        <h5 className="mt-3 mb-0"><strong>{obj.title}</strong></h5>
                                        <p className="p-0 m-0">{obj.rating}<span className="fs-5 text-warning">★</span></p>
                                        <p className="mb-0 fs-5"><strong className="fw-bolder">₹ {obj.price.OfferPrice}</strong><s className="ms-4 fs-6 text-danger">₹ {obj.price.price}</s></p>
                                        <p className="mb-0">Free Delivery</p>
                                        <p className="text-success">in stock <span className="fs-5"> {obj.availability} </span> items</p>
                                    </div>
                                </Link>
                                {/* <button className="btn btn-primary w-100" onClick={() => handleAddToCart(obj.id, { image: obj.image, price: obj.price, title: obj.title })}>
                                    Add to Cart
                                </button> */}

                            </div>
                        ))}
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-secondary my-5" onClick={toggleProduct}>
                            {show ? 'Show Less' : 'Show More'}
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home;