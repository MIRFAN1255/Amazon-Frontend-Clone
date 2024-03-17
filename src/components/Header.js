import React, { useState } from 'react';
import '../CSS/First_header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faAngleDown, faSearch, faCamera, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import USFlag from '../images/us-flag.jpg';

function Header() {

    const [showCategories, setShowCategories] = useState(false);

    const toggleCategories = () => {
        setShowCategories(!showCategories);
    };

    return (
        <div className="header">
            <img
                className="header__logo"
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon Logo"
            />

            <div className="location_icon_text">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="header__locationIcon" />
                <div className="header__title">
                    <span>Deliver to</span>
                    <span>Pakistan</span>
                </div>
            </div>

            <div className="header__search">
                <button className="header__categoriesButton" onClick={toggleCategories}>
                    <text className='header__categoriesText'>All</text>
                    <FontAwesomeIcon icon={faAngleDown} className="header__categoriesIcon" />
                </button>
                <input type="text" placeholder='Search Amazon' className="header__searchInput" />
                <button className="lens-button">
                    <FontAwesomeIcon icon={faCamera} />
                </button>
                <button className="search-button">
                    <FontAwesomeIcon style={{ fontSize: '1.5em', color: 'black' }} icon={faSearch} />
                </button>
            </div>

            <div className='change_language'>
                <button className="language">
                    <img
                        src={USFlag}
                        alt="US Flag"
                        className="flag_icon"
                    />
                    <span className="en-text">EN</span>
                    <FontAwesomeIcon icon={faAngleDown} className="fa_angle_down" />
                </button>
            </div>

            <div className="account_list">
                <div className="list_title">
                    <span>Hello, Sign in</span>
                    <span>Accounts & lists</span>   
                </div>
                <FontAwesomeIcon icon={faAngleDown} className="fa_angle_down_list" />
            </div>

            <div className="return_order">
                <div className="return">
                    <span>Returns</span>
                    <span>& Orders</span>
                </div>
            </div>

            <div className='cart_div'>
                <button className="cart">
                    <FontAwesomeIcon icon={faShoppingCart} className="icon_cart" />
                    <span className="en_text_cart">Cart</span>
                </button>
            </div>

            {showCategories && (
                <div className="header__categoriesDropdown">
                    <div className="category-div">All Departments</div>
                    <div className="category-div">Books</div>
                    <div className="category-div">Computers</div>
                    <div className="category-div">Mobile Phones</div>
                    <div className="category-div">Audio & Video</div>
                    <div className="category-div">Electronics</div>
                    <div className="category-div">Fashion</div>
                    <div className="category-div">Top Deals</div>
                    <div className="category-div">Home & Kitchen</div>
                    <div className="category-div">Sports & Outdoors</div>
                    <div className="category-div">Personal Care</div>
                    <div className="category-div">Toys & Games</div>
                    <div className="category-div">Health & Wellness</div>
                    <div className="category-div">Automotive</div>
                    <div className="category-div">Office Supplies</div>
                    <div className="category-div">Food & Grocery</div>
                    <div className="category-div">Electrical</div>
                    <div className="category-div">Furniture</div>
                    <div className="category-div">Beauty</div>
                    <div className="category-div">Gaming</div>
                    <div className="category-div">Smart Home</div>
                    <div className="category-div">Pet Supplies</div>
                    <div className="category-div">Outdoor Recreation</div>
                    <div className="category-div">Fitness</div>
                    <div className="category-div">Tools </div>
                    <div className="category-div">Jewelry</div>
                    <div className="category-div">Watches</div>
                    <div className="category-div">Baby</div>
                    <div className="category-div">Scientific</div>
                    <div className="category-div">Arts & Crafts</div>
                    <div className="category-div">Software</div>
                </div>
            )}

        </div>
    );
}

export default Header;