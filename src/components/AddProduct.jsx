import React, { useState } from "react";
import "./addproduct.css";

export default function AddProduct() {
    const initialState = {
        name: "",
        description: "",
        category: "",
        quantity: "",
        price: ""
    };
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        quantity: "",
        price: ""
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        alert(`Name: ${formData.name}, Description: ${formData.description}, Category: ${formData.category}, Quantity: ${formData.quantity}, Price: ${formData.price}`);
    };
    const handleReset = () => {
        setFormData({ ...initialState });
    };
    return (
        <form onSubmit={handleSubmit} className="multiple">
            <label className="multiple__text" htmlFor="name">
                Name:
            </label>
            <input
                type="text"
                id="name"
                className="multiple__input"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <label className="multiple__text" htmlFor="description">
                Description:
            </label>
            <input
                type="description"
                id="description"
                className="multiple__input"
                name="description"
                value={formData.description}
                onChange={handleChange}
            />
            <label className="multiple__text" htmlFor="category">
                Category:
            </label>
            <input
                id="category"
                className="multiple__input"
                name="category"
                value={formData.category}
                onChange={handleChange}
            />
            <label className="multiple__text" htmlFor="quantity">
                Quantity:
            </label>
            <input
                id="quantity"
                className="multiple__input"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
            />
            <label className="multiple__text" htmlFor="price">
                Price:
            </label>
            <input
                id="price"
                className="multiple__input"
                name="price"
                value={formData.price}
                onChange={handleChange}
            />
            <div>
                <button className="multiple__button" type="submit">
                    SUBMIT
                </button>
                <button className="multiple__button" type="reset" onClick={handleReset}>
                    CANCEL
                </button>
            </div>
        </form>
    );
}
