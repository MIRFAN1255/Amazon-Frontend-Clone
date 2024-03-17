import React from 'react'
import '../CSS/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faGlobe, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import USFlag from '../images/us-flag.jpg';

function Footer() {
  return (
    <div>
      <div className='div_footer'>
        <div className="card_footer">
          <div className='card_footer1'>
            <div className="footer-item1">
              <p className='heading'>Get to Know Us</p>
              <p className='text'>Careers</p>
              <p className='text'>Blog</p>
              <p className='text'>About Amazon</p>
              <p className='text'>Investor Relations</p>
              <p className='text'>Amazon Devices</p>
              <p className='text'>Amazon Science</p>
            </div>
            <div className="footer-item2">
              <p className='heading'>Make Money with Us</p>
              <p className='text'>Sell products on Amazon</p>
              <p className='text'>Sell on Amazon Business</p>
              <p className='text'>Sell apps on Amazon</p>
              <p className='text'>Become an Affliate</p>
              <p className='text'>Advertise Your Products</p>
              <p className='text'>Self-Publish with Us</p>
              <p className='text'>Host an Amazon Hub</p>
              <p className='text'>See More Make Money with Us</p>
            </div>
            <div className="footer-item3">
              <p className='heading'>Amazon Payment Products</p>
              <p className='text'>Amazon Business Card</p>
              <p className='text'>Shop with Points</p>
              <p className='text'>Reload our Balance</p>
              <p className='text'>Amazon Currency Converter</p>
            </div>
            <div className="footer-item4">
              <p className='heading'>Let Us Help You</p>
              <p className='text'>Amazon and COVID-<br />19</p>
              <p className='text'>Your Account</p>
              <p className='text'>Your Orders</p>
              <p className='text'>Shipping Rates &<br /> Policies</p>
              <p className='text'>Returns &<br /> Replacements</p>
              <p className='text'>Manage Your <br />Content and Devices</p>
              <p className='text'>Amazon Assistant</p>
              <p className='text'>Help</p>
            </div>
          </div>
          <div className='card_footer2'>
            <div style={{marginRight: "30px", justifyContent: "center", alignItems: "center"}}>
              <img
                className="header_logo"
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon Logo"
              />
            </div>
            <div style={{ border: "1px solid gray", borderRadius: "4px", padding: "5px", margin: "5px", paddingTop: "3px", paddingBottom: "4px", marginBottom: "3px",  display: "flex", flexDirection: "row" }}>
             <div>
                <FontAwesomeIcon icon={faGlobe} className="fa_angle_down" style={{ color: "white", marginRight: "5px" }} />
                <span style={{ fontSize: "14px", color: "lightgray" }}>English</span>
             </div>
              <div style={{ marginLeft: "5px"}}>
                {/* <FontAwesomeIcon icon={faAngleUp} /> */}
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </div>
            <div style={{ border: "1px solid gray", borderRadius: "4px", padding: "5px", margin: "5px" }}>
              <FontAwesomeIcon icon={faDollarSign} className="fa_angle_down" style={{ color: "white", marginRight: "5px" }} />
              <span style={{ color: "lightgray", fontSize: "14px"}}>USD - U.S. Dollar</span>
            </div>

            <div style={{ border: "1px solid gray", borderRadius: "4px", padding: "5px", margin: "5px" }}>
              <img
                src={USFlag}
                alt="US Flag"
                className="flag_icon"
              />
              <span style={{ color: "lightgray", fontSize: "14px" }}>United States</span>
            </div>
          </div>
        </div>
      </div>

      <div className='div_footer_1'>
        <div className="card_footer_1">
          <div className="row">
            <div className='box'>
              <span className='heading_f'>Amazon Music</span>
              <span className='text_f'>Stream millions<br />of songs</span>
            </div>
            <div className='box'>
              <span className='heading_f'>Amazon Ads</span>
              <span className='text_f'>Reach customers<br />whereever they <br />spend their time</span>
            </div>
            <div className='box'>
              <span className='heading_f'>6pm</span>
              <span className='text_f'>Score deals<br />on fashion <br />brands</span>
            </div>
            <div className='box'>
              <span className='heading_f'>AbeBookd</span>
              <span className='text_f'>Books, art<br />& collectibles</span>  
            </div>
            <div className='box'>
              <span className='heading_f'>ACX</span>
              <span className='text_f'>Audiobook publishing<br />Made Easy</span>
            </div>
            <div className='box'>
              <span className='heading_f'>Sell on Amazon</span>
              <span className='text_f'>Start a selling<br />account</span>
            </div>
            <div className='box'>
              <span className='heading_f'>Amazon<br/> Business</span>
              <span className='text_f'>Everything<br />For Your <br />Business</span>
            </div>
          </div>
          <div className="row">
            <div className='box'>
              <span className='heading_f'>AmazonGlobal</span>
              <span className='text_f'>Ship Orders<br />Internationally</span>  
            </div>
            <div className='box'>
              <span className='heading_f'>Home Services</span>
              <span className='text_f'>Experienced Pros<br />Happiness <br />Guarantee</span>
            </div>
            <div className='box'>
              <span className='heading_f'>Amazon Web<br/>Services</span>
              <span className='text_f'>Scalable Cloud<br />Computing <br />Services</span> 
            </div>
            <div className='box'>
              <span className='heading_f'>Audible</span>
              <span className='text_f'>Listen to Books &<br />Original<br/> Audio<br/> Performances</span>  
            </div>
            <div className='box'>
              <span className='heading_f'>Box Office Mojo</span>
              <span className='text_f'>Find Movie<br />Box Office Data</span>  
            </div>
            <div className='box'>
              <span className='heading_f'>Goodreads</span>
              <span className='text_f'>Books reviews<br />& <br />recommendations</span>  
            </div>
            <div className='box'>
              <span className='heading_f'>IMDb</span>
              <span className='text_f'>Movies, TV<br />& Celebrities</span>  
            </div>
          </div>
          <div className="row">
            <div className='box'>
              <span className='heading_f'>IMDbPro</span>
              <span className='text_f'>Get info<br/>Entertainment<br/>Professionals<br/>Need</span>
            </div>
            <div className='box'>
              <span className='heading_f'>Kindle Direct<br/>Publishing</span>
              <span className='text_f'>Indie Digital &<br />Print Publishing <br />Made Easy</span>
            </div>
            <div className='box'>
              <span className='heading_f'>Prime Video<br/>Direct</span>
              <span className='text_f'>Video<br />Distribution <br />Made Easy</span>
            </div>
            <div className='box'>
              <span className='heading_f'>Shopbop</span>
              <span className='text_f'>Designer<br />Fashion Brands</span>  
            </div>
            <div className='box'>
              <span className='heading_f'>Woot!</span>
              <span className='text_f'>Deals and<br />Shenanigans</span>
            </div>
            <div className='box'>
              <span className='heading_f'>Zappos</span>
              <span className='text_f'>Shoes &<br />Clothing</span>
            </div>
            <div className='box'>
              <span className='heading_f'>Ring</span>
              <span className='text_f'>Smart Home<br />Security <br />Systems</span>
            </div>
          </div>
          <div className="row">
            <div className='box'>
            </div>
            <div className='box'>
              <span className='heading_f'>eero WiFi</span>
              <span className='text_f'>Stream 4K Video<br />in Every Room</span>
            </div>
            <div className='box'>
              <span className='heading_f'>Blink</span>
              <span className='text_f'>Smart Security<br />for Every <br />Home</span>
            </div>
            <div className='box'>
              <span className='heading_f'>Neighbors App</span>
              <span className='text_f'>Real-Time Crime<br />& Safety Alerts</span>
            </div>
            <div className='box'>
              <span className='heading_f'>Amazon Subscription<br/>Boxes</span>
              <span className='text_f'>Top subscription boxes<br />-right to your door</span>
            </div>
            <div className='box'>
              <span className='heading_f'>PillPack</span>
              <span className='text_f'>Pharmacy<br />Simplified</span>
            </div>
            <div className='box'>
            </div>
          </div>
        </div>
        <div className="privacy">
          <div>
            <span>Conditions of Use&emsp;Privacy Notice&emsp;
              Your Ads Privacy Choices&emsp;<br />&emsp;&emsp;&emsp;&emsp; 1996-2024, Amazon.com, Inc. or its affliates  </span>
          </div>
          <div>
            <span></span>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Footer;