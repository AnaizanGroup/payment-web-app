import "./ContentGroupProd.scss"
import { RiArrowRightSLine } from "react-icons/ri"

import CardProduct from "../cardProduct/CardProduct"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ContentGroupProd = ({ listProduct, nb }) => {
    const settings = {
        dots: false,
        infinite: true,
        autoplaySpeed: 5000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true
      };

    return (
        <div className="list-prod-slide">
            <Slider  {...settings} >
                
                {listProduct.map(({ img, shop, names, price, code_country }, index) => {
                    return (
                        <CardProduct index={index} img={img} names={names}
                            price={price} shop={shop}
                            code_country={code_country} />
                    )
                })}

                <CardProduct index={null} img={listProduct[0].img} names={listProduct[0].names}
                    price={listProduct[0].price} shop={listProduct[0].shop}
                    code_country={listProduct[0].code_country} /> 
            </Slider>
        </div>
    )
}

export default ContentGroupProd