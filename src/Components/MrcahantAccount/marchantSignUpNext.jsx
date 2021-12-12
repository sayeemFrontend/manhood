import React from 'react';

const marchantSignNext = () => {
    const fields = [{ f_name: "shop_name", label: "Shop name" }, { f_name: "shop_address", label: "Shop address" }, { f_name: "licence_number", label: "Trading licence number" }, { f_name: "tin_number", label: "TIN number" }, { f_name: "product_category", label: "Product category" }]

    return (

        <section className="login-page">

            <div className="login-body login-body-opacity">
                <div className="login-form-container d-flex justify-content-around ">
                    <div style={{ width: "350px" }}>
                        {fields.map(item => (
                            <div className="mt-3">
                                <input type="text" className="form-control customInputField" id={item.f_name} placeholder=" " />
                                <label htmlFor={item.f_name}>{item.label}</label>
                            </div>
                        ))}

                        <div className="marchant-signup-condition">
                            <div className=" d-flex custom-checkbox">
                                <div>
                                    <input type="checkbox" />
                                </div>
                                <div>
                                    <p>
                                        I have read and agree <span>Terms & Conditions</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="customButton btn-background">Submit</button>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default marchantSignNext;