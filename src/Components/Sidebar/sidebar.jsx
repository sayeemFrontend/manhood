import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = (props) => {

  const [expand, setExpand] = React.useState(false)
  const watch = [
    {
      name: "New In",
      logo: "Image/allProductView/newinn.svg"
    },
    {
      name: "Footware",
      logo: "Image/allProductView/footwre.svg"
    },
    {
      name: "Men's Grooming",
      logo: "Image/allProductView/mansgromming.svg",

    },
    { name: "Clothing", logo: "Image/allProductView/clothig.svg" },
    { name: "Watches", logo: "Image/allProductView/watch.svg" },
    { name: "Accessories", logo: "Image/allProductView/accessories 1.svg" },
    { name: "Personal care appliances", logo: "Image/allProductView/personal-hygiene 1.svg" }
  ]

  const category = [
    {
      name: "New In",
      logo: "Image/allProductView/newinn.svg",
      sublink: [
        { id: 1, name: 'tyffg', link: '#ygjh' }
      ]
    },
    {
      name: "Footware",
      logo: "Image/allProductView/footwre.svg"
    },
    {
      name: "Men's Grooming",
      logo: "Image/allProductView/mansgromming.svg",

    },
    { name: "Clothing", logo: "Image/allProductView/clothig.svg" },
    { name: "Watches", logo: "Image/allProductView/watch.svg", expandAble: true },
    { name: "Accessories", logo: "Image/allProductView/accessories 1.svg" },
    { name: "Personal care appliances", logo: "Image/allProductView/personal-hygiene 1.svg" }
  ]
  const { show } = props;

  return (
    <div className={show ? "sidebarShow" : "sidebarOff"}>
      <div className="container-fluid">
        <ul className="categories list-unstyled">
          {category.map((item, index) => (
            <div key={index}>
              <Link to={!item.expandAble && `/product/${item.name}`} className=" mainList">
                <li onClick={item.expandAble && (() => setExpand(!expand))}>
                  <img src={`/${item.logo}`} alt="" />
                  <span>{item.name}</span>
                  {item.expandAble ? <span >
                    <i style={{ cursor: "pointer", fontSize: "14px" }} className={expand ? "  fas fa-chevron-up" : "fas fa-chevron-down cursor-pointer"}></i>
                  </span> : null}
                </li>
                <ul className={item.expandAble && expand ? "ms-5 my-2 d-block categories list-unstyled" : "d-none"}>
                  {watch.map(item => (
                    <Link to="/product/all/" className="subList">
                      <li>
                        <img src={`/${item.logo}`} alt="" />
                        <span>{item.name}</span>
                      </li>
                    </Link>
                  ))}
                </ul>
              </Link>

            </div>
          ))}

        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
