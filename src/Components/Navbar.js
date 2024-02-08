import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({ cartCount }) => {

    const [animation, setAnimation] = useState(false);


    useEffect(() => {
        setAnimation(true);

        const timeoutId = setTimeout(() => {
            setAnimation(false);
        }, 1000)

        return () => clearTimeout(timeoutId);
    }, [cartCount])

    return (
        <>

            <nav className="navbar navbar-expand-lg" style={{ padding: '1rem .5rem' }}>
                <div className="container">
                    <Link to="/"> 
                    <a className="navbar-brand" href="#home"><img src='../../images/logo.png' alt='logo' className='logo' /></a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#home">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#category" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#smartphones">Smartphones</a></li>
                                    <li><a className="dropdown-item" href="#laptops">Laptops</a></li>
                                    <li><a className="dropdown-item" href="#smartwatch">Smartwatch</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#products" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#smartphones">Smartphones</a></li>
                                    <li><a className="dropdown-item" href="#laptops">Laptops</a></li>
                                    <li><a className="dropdown-item" href="#smartwatch">Smartwatch</a></li>
                                </ul>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#New">What's New</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#delivery">Delivery</a>
                            </li> */}
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-success" type="submit">Search</button>
                        </form>
                        <div>
                            <Link to='/cart'>
                                <img src='../../images/Cart.png' alt='cart' className='cart ms-5' />
                                <span className={`cart-count ${animation ? 'fade-in' : ''}`}>{cartCount}</span>
                            </Link>

                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar;