import React from "react";

const AddAddress = (props) => {
  const { address, setAddress } = props;
  const newAdd = {
    f_name: "",
    l_name: "",
    city: "",
    post_code: "",
    f_address: "",
    phone: "",
    email: "",
  };
  const [obj, setObj] = React.useState(newAdd);

  const handleChange = (e) => {
    const copyObj = { ...obj };
    copyObj[e.target.name] = e.target.value;
    setObj(copyObj);
  };
  const handleClick = () => {
    setAddress([...address, obj]);
  };
  return (
    <div className="customFormContainer">
      <div className="text-center addNewAddressHeader">
        <p>Add new Address</p>
      </div>

      <div className="d-flex justify-content-between">
        <div>
          <input
            value={obj.f_name}
            type="text"
            className="form-control customInputField"
            id="firstName"
            placeholder=" "
            onChange={handleChange}
            name="f_name"
          />
          <label for="firstName">First Name</label>
        </div>
        <div>
          <input
            type="text"
            className="form-control customInputField"
            id="lastName"
            placeholder=" "
            name="l_name"
            onChange={handleChange}
          />
          <label for="lastName">last Name</label>
        </div>
      </div>

      <div className="my-3 d-flex justify-content-between">
        <div>
          <input
            type="text"
            className="form-control customInputField"
            id="city"
            name="city"
            placeholder=" "
            onChange={handleChange}
          />
          <label for="city">City</label>
        </div>
        <div>
          <input
            type="text"
            className="form-control customInputField"
            id="postCode"
            placeholder=" "
            name="post_code"
            onChange={handleChange}
          />
          <label for="postCode">Post Code</label>
        </div>
      </div>

      <div>
        <input
          type="text"
          className="form-control customInputField"
          id="fullAddress"
          placeholder=" "
          name="f_address"
          onChange={handleChange}
        />
        <label for="fullAddress">Full address</label>
      </div>
      <div className="my-3">
        <input
          type="text"
          className=" form-control customInputField"
          id="email"
          placeholder=" "
          onChange={handleChange}
        />
        <label for="email">Email</label>
      </div>
      <div>
        <input
          type="text"
          className="form-control customInputField"
          id="phoneNumber"
          placeholder=" "
          name="phone"
          onChange={handleChange}
        />
        <label for="phoneNumber">Phone Number</label>
      </div>
      <div className="addAddessBtn pb-5">
        <button data-bs-dismiss="modal" onClick={handleClick}>Add</button>
      </div>
    </div>
  );
};

export default AddAddress;
