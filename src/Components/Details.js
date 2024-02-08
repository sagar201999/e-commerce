import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css'

const Details = ({ onAddToCart }) => {

    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [count, setCount] = useState(1);
    const [mainImage, setMainImage] = useState('');

    useEffect(() => {
        fetch(`https://659fae025023b02bfe8a2e3b.mockapi.io/Mobiles/products/${productId}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                setMainImage(data.image.image1);
                // setFilterData(data);
            });
    }, [productId]);

    if (!product) {
        return <div className="loader"></div>;
    }

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }

    }

    const swapImage = (newSrc) => {
        setMainImage(newSrc);
    };

    const formatAmount = (amount) => {           //for convert number to currency
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
        }).format(amount);
    };
    const subtractFormattedAmounts = (formattedAmount1, formattedAmount2) => {
        const value1 = parseFloat(formattedAmount1.replace(/[^0-9.-]+/g, ''));
        const value2 = parseFloat(formattedAmount2.replace(/[^0-9.-]+/g, ''));
        return formatAmount(value1 - value2);
    };

    // Usage
    const formattedOfferPrice = formatAmount(product.price.OfferPrice);
    const formattedActualAmount = formatAmount(product.price.price);
    const subtractedAmount = subtractFormattedAmounts(formattedActualAmount , formattedOfferPrice);



    return (
        <>
            <div id="details">
                <section className="details-section">
                    <div className="details-section-1">
                        <div>
                            <img src={product.image.image1} alt="" className="side-image border"
                                onClick={() => swapImage(product.image.image1)} />
                            <img src={product.image.image2} alt="" className="side-image border"
                                onClick={() => swapImage(product.image.image2)} />
                            <img src={product.image.image3} alt="" className="side-image border"
                                onClick={() => swapImage(product.image.image3)} />
                            <img src={product.image.image4} alt="" className="side-image border"
                                onClick={() => swapImage(product.image.image4)} />

                        </div>
                        <div>
                            <img src={mainImage} alt="thumbnail" className="info-image" />
                        </div>

                    </div>
                    <article className="details-section-2">
                        <h4>{product.title}</h4>
                        {/* <p>{product.description}</p> */}
                        <div className="d-flex">
                            <p className="fs-5 me-1">{product.rating}</p>
                            <p className="fs-5 text-warning">★</p>
                        </div>
                        <hr />
                        <p className="fs-4"><strong>{formattedOfferPrice}</strong> / <s className="text-danger fs-6">{formattedActualAmount}</s></p>
                        <p>save : {subtractedAmount}</p>
                        <div>
                            <p className="mb-0">₹ 1800 or 999/month</p>
                            <p>Suggest payment with 6 month special financing</p>
                        </div>

                        <div class="ram my-3">
                            <p>RAM</p>
                            <div>
                                <label>
                                    <input type="radio" name="ram" />
                                    <span>{product.ram.ram1}</span>
                                </label>
                                <label className="mx-3">
                                    <input type="radio" name="ram" />
                                    <span>{product.ram.ram2}</span>
                                </label>
                                <label>
                                    <input type="radio" name="ram" />
                                    <span>{product.ram.ram3}</span>
                                </label>
                            </div>
                        </div>

                        <div class="rom">
                            <p>Internal Storage</p>
                            <div>
                                <label>
                                    <input type="radio" name="rom" />
                                    <span>{product.storage.storage1}</span>
                                </label>
                                <label className="mx-3">
                                    <input type="radio" name="rom" />
                                    <span>{product.storage.storage2}</span>
                                </label>
                                <label>
                                    <input type="radio" name="rom" />
                                    <span>{product.storage.storage3}</span>
                                </label>
                            </div>
                        </div>

                        <hr />
                        <div className="add-cart-wrapper">
                            <div className="add-cart me-3">
                                <p onClick={decrement} className="fs-4" style={{ cursor: 'pointer' }}>-</p>
                                <p>{count}</p>
                                <p onClick={increment} className="fs-4" style={{ cursor: 'pointer' }}>+</p>
                            </div>
                            <p>Only <span className="text-warning">{product.availability} Items </span> left <br /> Don't miss it.</p>

                        </div>
                        <div className="mt-3">
                            <button className=" btn btn-success px-5 rounded-pill ">Buy Now</button>
                            <button className="btn btn-outline-success px-4 rounded-pill mx-3" onClick={() => onAddToCart(count, { image: product.image.image1, price: product.price.OfferPrice, title: product.title })}>
                                ADD TO CART
                            </button>
                        </div>
                        <div className="mt-5 border w-75">
                            <div className="px-3 py-2">
                                <p className="mb-0"><strong>Free Delivery</strong></p>
                                <a href="#code" className="text-dark">Enter your postal code for delivery Availability</a>
                            </div>
                            <hr />
                            <div className="px-3">
                                <p className="mb-0"><strong>Return Delivery</strong></p>
                                <p>Free 30 days Delivery Returns.<a href="#details" className="text-dark">Details</a></p>
                            </div>
                        </div>

                        <article className="border mt-4 p-2">
                            <ul>
                                <p className="fs-5">Key Features</p>
                                <li>{product.info.description1}</li>
                                <li>{product.info.description2}</li>
                                <li>{product.info.description3}</li>
                                <li>{product.info.description4}</li>
                                <li>{product.info.description5}</li>
                                <li>{product.info.description6}</li>
                            </ul>
                        </article>
                    </article>
                </section>



            </div>

        </>
    )
}

export default Details;