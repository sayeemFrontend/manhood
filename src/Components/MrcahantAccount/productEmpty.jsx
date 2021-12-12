import React from 'react'
import { Link } from 'react-router-dom'

const ProductEmpty = () => {
    return (

        <div className="col-12 col-md-8">
            <div className="d-flex flex-column align-items-center">

                <div className="mar-row-1">
                    <p>A One Collection</p>
                </div>
                <div className="mt-5 mb-3">
                    <img src="./Image/marchant account/marchantDasjbord-row2.png" alt="" />
                </div>
                <div className="mar-row-3">
                    <p>You don't have any products yet</p>
                </div>
                <div className="mb-5 mar-row-4">
                    <p>Click the "Upload Product!" button to post your products</p>
                </div>
                <div className=" mar-row-5">
                    <Link to="/product/upload/"><button>Upload Product</button></Link>
                </div>

            </div>
        </div>
    )
}

export default ProductEmpty;