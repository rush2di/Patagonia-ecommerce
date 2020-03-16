import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Product = props => {
  const data = !!props.location.state && props.location.state;
  const albumMapper = data.album.map((image, i) => {
    return (
      <div key={`carousel-img${i}`}>
        <img className="carousel--image" src={image} alt="" />
      </div>
    );
  });
  console.log(data);
  return (
    <div className="main--product container">
      <div className="main--product-header">
        <Carousel
          className="container"
          centerMode={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          emulateTouch={true}
          autoPlay={true}
        >
          {albumMapper}
        </Carousel>
      </div>
      <div className="main--product-cart">
        <div className="product-info">
          <span> {data.prodName}</span>
          <span> {data.price}</span>
        </div>
        <div className="product-btns">
          <select className="product-btns-select">
            <option value="S" defaultValue>
              S
            </option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
          <button className="button-md cart-btn">ADD TO CART</button>
          <button className="button-md wish-btn">WHISH LIST</button>
          <div className="extra-info">
            <span>Part No. {data.refrence}</span>
            <span>IN STOCK</span>
          </div>
        </div>
      </div>
      <div className="main--product-desc">
        <p>
          With so much area up front, the {data.prodName} paddles incredibly
          well. She glides with ease from a forward position yet will still
          slice a nice carve off the tail. With the FCS II system, the need for
          any screws or tool to secure the fins has been eliminated. Simply
          insert the front of the fin into the plug and use downward pressure to
          lock the fin in place. Easily insert & remove the fins based on the
          wave conditions or the riders ability. Our Performance Series range
          targets the intermediate surfer right through to the advanced shredder
          looking for an alternative to riding a hard skin surfboard. The range
          is inspired by the latest fiberglass surfboard models, and we think
          you’ll be impressed by how well these board perform. Performance
          Series boards let you turn harder, faster and tighter than the higher
          volume Learner Series, and come fitted with the FCS II Fin System. So,
          by adding stiffer fins you can further upgrade the performance of your
          board.
        </p>
      </div>
      <div className="main--product-details">
        {data.video && (
          <div className="iframe-container">
            <iframe
              src={data.video}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              secure="true"
              height="300"
              width="560"
              gesture="media"
              allowFullScreen
              title="video"
            />
          </div>
        )}
        <div className="details-flex">
          <div className="details-flex-btn">
            <button>MANUAL DOWNLOAD</button>
          </div>
          <div className="details-flex-txt">
            <p>TECHNICAL SPECIFICATIONS</p>
            <table className="details-flex-table">
              <tr className="table-data--row">
                <td className="table-data--main">Size</td>
                <td className="table-data--specs"> 5'2" / 5'6" / 5'10"</td>
              </tr>
              <tr className="table-data--row">
                <td className="table-data--main">Dimensions</td>
                <td className="table-data--specs">
                  5'2" x 19 2/3" x 2 5/8" , 5'6" x 21" x 2 5/8" , 5'10" x 21 x 2
                  3/4
                </td>
              </tr>
              <tr className="table-data--row">
                <td className="table-data--main">Core</td>
                <td className="table-data--specs">
                  100% Waterproof X-Density EPS Foam Core
                </td>
              </tr>
              <tr className="table-data--row">
                <td className="table-data--main">Stringer</td>
                <td className="table-data--specs">Double Stringer</td>
              </tr>
              <tr className="table-data--row">
                <td className="table-data--main">Fin Setup</td>
                <td className="table-data--specs">
                  Twin (x2 FCS II Fin Setup)
                </td>
              </tr>
              <tr className="table-data--row">
                <td className="table-data--main">Fin System</td>
                <td className="table-data--specs">FCS II</td>
              </tr>
              <tr className="table-data--row">
                <td className="table-data--main">Volume</td>
                <td className="table-data--specs">5'2": 31L | 5'6": 35L</td>
              </tr>
            </table>
            <p className="extra-info">+ Leash Plug installed</p>
            <p className="extra-info">+ FCS II Softflex Fins included</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
