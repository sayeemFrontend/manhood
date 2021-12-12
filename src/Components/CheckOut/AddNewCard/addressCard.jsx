import React from 'react'
import { useHistory } from 'react-router-dom';

const AddNewCard = ({ paymethod, setPaymethod }) => {

    const data = {
        card_holder: "",
        card_number: "",
        expire_date: "",
        cvc_cw: "",
        city: '',
        post_code: ""
    }
    const [card, newCard] = React.useState(data);
    const handleInput = (e) => {
        const copy = { ...card }
        copy[e.target.name] = e.target.value

        newCard(copy)

        // newCard({ ...card, card[e.target.name]: e.target.value })
    }
    const handleSubmit = () => {
        setPaymethod([...paymethod, card])


    }


    return (
        <div>
            <div className="customFormContainer pb-5">
                <div className="text-center addNewAddressHeader">
                    <p>Add New Card</p>
                </div>

                <div className>
                    <input onChange={(e) => handleInput(e)} type="text" className="form-control customInputField" id="cardHolder" name="card_holder" placeholder=" " />
                    <label htmlFor="cardHolder">Card holder name</label>
                </div>
                {/* <div className="my-3">
                    <input type="text" className="my-3 form-control customInputField" id="email" placeholder="VISA" />
                </div> */}
                <div className="my-3">
                    <input onChange={(e) => handleInput(e)} type="text" className="form-control customInputField" id="cardNumber" name="card_number" placeholder=" " />
                    <label htmlFor="cardNumber">Card number</label>
                </div>

                <div className="my-3 d-flex justify-content-between">
                    <div>
                        <input onChange={(e) => handleInput(e)} type="text" className="form-control customInputField" id="expireDate" name="expire_date" placeholder=" " />
                        <label htmlFor="expireDate">Expire date</label>
                    </div>
                    <div>
                        <input onChange={(e) => handleInput(e)} type="text" className="form-control customInputField" id="CVC/CVV" name="cvc_cw" placeholder=" " />
                        <label htmlFor="CVC/CVV">CVC/CVV</label>
                    </div>
                </div>

                <div className="d-flex justify-content-between">
                    <div>
                        <input onChange={(e) => handleInput(e)} type="text" className="form-control customInputField" id="city" name="city" placeholder=" " />
                        <label htmlFor="city">City</label>
                    </div>
                    <div>
                        <input onChange={(e) => handleInput(e)} type="text" className="form-control customInputField" id="postCode" name="post_code" placeholder=" " />
                        <label htmlFor="postCode">Post code</label>
                    </div>
                </div>

                <div className="addAddessBtn pb-5">
                    <button onClick={handleSubmit} data-bs-dismiss="modal">Add</button>
                </div>

            </div>
        </div>
    );
}

export default AddNewCard;