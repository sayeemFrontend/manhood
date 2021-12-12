import { includes } from 'lodash';
import React from 'react';

const ProductUpload = () => {

    const tempData = {
        name: "",
        description: "",
        type: '',
        category: '',
        price: "",
        image: '',
        discount: '',
        color: [],
        size: [],
    }
    const [product, setProduct] = React.useState(tempData)
    const [type, setType] = React.useState(0)
    const [category, setCategory] = React.useState(0)
    const [stock, setStock] = React.useState('')
    const [isDiscount, setIsDiscount] = React.useState(false)
    const [discount, setDiscount] = React.useState(0)

    const [img, setImg] = React.useState([])



    const handleType = (e) => {
        setType(e.target.value)
    }
    const handleCategory = (e) => {
        setCategory(e.target.value)
    }
    const handleProperty = (e) => {

        if (["name", "price", "description",].includes(e.target.name)) {
            const copy = { ...product }
            console.log("AaA", copy.[e.target.name]);
            // copy[e.targer.name] = e.targer.value
            // setProduct(copy)
        }

    }
    const handleImageUpload = (e) => {
        setImg([...img, e])
    }
    console.log("asasasasas", product);
    return (
        <section className="fillInTheDetails">
            <div className="fillInTheDetailsContainer">
                <div className="container">
                    <div className="text-center addNewAddressHeader">
                        <p>Fill in The details</p>
                    </div>
                    <div className="customFormContainer px-5">
                        <div className="input-group">
                            <select value={type} onChange={handleType} className="form-select customInputField" id="itemType">
                                <option value="0">Type</option>
                                <option value="Show">Show</option>
                                <option value="Shirt" >Shirt</option>
                                <option value="Pant">Pant</option>
                                <option value="T-Shirt">T-Shirt</option>
                            </select>
                        </div>
                        <div className="my-4">
                            <input onChange={handleProperty} type="text" className="form-control customInputField" name="name" placeholder="Tittle" />
                        </div>
                        <div className="input-group mb-3">
                            <select value={category} onChange={handleCategory} className="form-select customInputField" id="itemType">
                                <option value="0">Category</option>
                                <option value="Top wear">Top wear</option>
                                <option value="Bottom wear">Bottom wear</option>
                                <option value="Blazers & waistcoats">Blazers & waistcoats</option>
                                <option value="Winter wear">Winter wear</option>
                            </select>
                        </div>
                        <div>
                            <input onChange={handleProperty} className="form-control customInputField" style={{ height: "100px" }} name="description" placeholder="Leave a comment here" id="floatingTextarea2" />
                        </div>
                        <div className="my-4">
                            <input onChange={handleProperty} type="text" className="form-control customInputField" name="price" placeholder="Price in TK" />
                        </div>
                    </div>
                    <div className="px-5 pt-3 breakIN form">
                        <div className="form-check form-check-inline me-5" >
                            <input className="form-check-input" value="true" type="radio" onClick={(e) => setStock(e.target.value)} id="inStock" name="hey" />
                            <label className="form-check-label" for="inStock">In Stock</label>
                        </div>
                        <div className="form-check form-check-inline" >
                            <input className="form-check-input" value="false" type="radio" id="discountCampaign" name="hey" onClick={(e) => setStock(e.target.value)} />
                            <label className="form-check-label" for="discountCampaign">Out of Stock</label>
                        </div>
                        <div className="my-4 d-flex">
                            <div className="form-check" style={{ height: "40px" }}>
                                <input className="form-check-input" value={isDiscount} onClick={(e) => setIsDiscount(!isDiscount)} type="checkbox" id="discountCampaign" name="fromCheck" />
                                <label className="mx-2 form-check-label" for="discountCampaign">Discount Campaign</label>
                            </div>
                            <div style={{ width: "100px" }} className={isDiscount ? "input-group" : " d-none"}>
                                <select className="form-select customInputFieldBackColor" onChange={(e) => setDiscount(e.target.value)} value={discount} id="discount" name="discount">
                                    <option value="10">10%</option>
                                    <option value="20">20%</option>
                                    <option value="20">30%</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <div className="px-5 py-5">
                        <div className="addPhoto">
                            <p>Add Photos</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="uploadBox-1 text-center">
                                <label htmlFor="img1"> <img src="/Image/Fill the details/Vector (6).png" alt="" />
                                    <p className="mt-2">Upload Photo</p>
                                    <p className="mt-4 mb-0 uploadType"> (JPEG, JPG, PNG, WMP upto 5 MB) </p>
                                </label>
                                <input onClick={(e) => handleImageUpload(e.target.value)} style={{ opacity: 0, width: "100%", height: 0 }} type="file" id="img1" name="img1" multiple />
                            </div>
                            <div className="uploadBox-2 text-center">
                                <label htmlFor='img2'>
                                    <img src="/Image/Fill the details/Vector (7).png" alt="" />
                                    <p className="mt-2">Upload Photo</p>
                                    <p className="mt-4 mb-0 uploadType"> (JPEG, JPG, PNG, WMP upto 5 MB) </p>
                                </label>
                                <input onClick={(e) => handleImageUpload(e.target.value)} style={{ opacity: 0, height: 0, width: "100%" }} type="file" name="img2" id='img2' />
                            </div>
                            <div className="uploadBox-3 text-center">
                                <label htmlFor='img3'>
                                    <img src="/Image/Fill the details/Vector (7).png" alt="" />
                                    <p className="mt-2">Upload Photo</p>
                                    <p className="mt-4 mb-0 uploadType"> (JPEG, JPG, PNG, WMP upto 5 MB) </p>
                                </label>
                                <input onClick={(e) => handleImageUpload(e.target.value)} style={{ opacity: 0, height: 0, width: "100%" }} type="file" name="img3" id='img3' />
                            </div>
                        </div>

                        <div className="mustSelectPhoto"><p>You must upload at least one photo</p></div>
                        <div className=" text-center my-5 contactDetails"><p>Contact Details</p></div>
                        <div className="customFormContainer">
                            <div className=" row">
                                <div className="col-6">
                                    <input type="text" className="form-control customInputField" placeholder=" " id="email" />
                                    <label for="email">Email</label>
                                </div>
                                <div className="col-6">
                                    <input type="text" className="form-control customInputField" placeholder=" " id="name" />
                                    <label for="name">Name</label>
                                </div>
                            </div>
                            <div className="my-3">
                                <input type="text" className="form-control customInputField" placeholder=" " id="phoneNumber" />
                                <label for="phoneNumber">Phone Number</label>
                            </div>

                        </div>
                        <div className="text-center fillInTheDetailsBtn pb-5">
                            <button onClick={() => setProduct(tempData)}>Upload Product</button>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default ProductUpload;