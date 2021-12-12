import { useState } from "react"
import { Link } from "react-router-dom"
import Slide from "./slide"

const ProductUnderCategory = ({ catItem, proAll, styCom }) => {

    const [isSlide, setSlide] = useState(false)
    const res = proAll.filter((it) => it.primaryCategory === "5f65beff6000220aedff0260")
    console.log("ssssss", styCom);


    if (res.length > 0) {

        return (
            <div className="container-fluid">
                <div className="title-text">{catItem.name}</div>
                <div className={styCom}>
                    <div className="row">
                        {res.map(item => (

                            isSlide ? <Slide list={res} /> : <div className="col-xs-2 col-3">
                                <div className="itemCart-2">
                                    <Link to={`/product/view/${item._id}`}>
                                        <div className="rating-cart-root">
                                            <img
                                                className="img-fluid"
                                                src={`https://jirabo.com/${item.cover.medium}`}
                                                width="100%"
                                                alt=""
                                            />
                                            <div className="rating-cart">
                                                <div>{item.rating}</div>
                                                <i className="fas fa-star"></i>
                                            </div>
                                        </div>
                                        <div className="featureText">
                                            <p>{item.name} </p>
                                            <p>${item.price.regular}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>


                        ))}
                    </div>

                </div>

            </div>

        )

    }
    else {
        return "empty"
    }


}
export default ProductUnderCategory