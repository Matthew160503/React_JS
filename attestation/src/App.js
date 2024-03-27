import "./styles/style.scss";
import HomePage from "./components/HomePage";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Registration from "./components/Registration";
import Catalog from "./components/Catalog.js";
import Cart from "./components/Cart.js";
import { data } from "./data.js";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            currentItems: [],
            items: data,
        };
        this.state.currentItems = this.state.items;
        this.addToOrder = this.addToOrder.bind(this);
        this.chooseCategory = this.chooseCategory.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
    }

    render() {
        return (
            <div className="page">
                <Header chooseCategory={this.chooseCategory} />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <HomePage
                                items={this.state.items}
                                onAdd={this.addToOrder}
                            />
                        }
                    />
                    <Route path="/registration" element={<Registration />} />
                    <Route
                        path="/catalog/:gender"
                        element={
                            <Catalog
                                onAdd={this.addToOrder}
                                items={this.state.currentItems}
                            />
                        }
                    />
                    <Route
                        path="/cart"
                        element={
                            <Cart
                                items={this.state.orders}
                                onDelete={this.deleteOrder}
                            />
                        }
                    />
                </Routes>
                <Footer />
            </div>
        );
    }

    chooseCategory(gender) {
        if (gender === "all") {
            this.setState({ currentItems: this.state.items });
            return;
        }
        this.setState({
            currentItems: this.state.items.filter((el) => el.gender === gender),
        });
    }

    addToOrder(item) {
        let isInArray = false;
        this.state.orders.forEach((el) => {
            if (el.id === item.id) {
                isInArray = true;
            }
        });
        if (!isInArray) {
            this.setState({
                orders: [
                    ...this.state.orders,
                    {
                        id: item.id,
                        title: item.title,
                        desc: item.desc,
                        price: item.price,
                        img: item.img,
                        gender: item.gender,
                        size: item.size,
                        quantity: 1,
                    },
                ],
            });
        } else {
            const immutableItems = this.state.orders.filter(
                (el) => el.id !== item.id
            );
            const itemToChange = this.state.orders.filter(
                (el) => el.id === item.id
            )[0];
            this.setState({
                orders: [
                    ...immutableItems,
                    {
                        id: item.id,
                        title: item.title,
                        desc: item.desc,
                        price: item.price,
                        img: item.img,
                        gender: item.gender,
                        size: item.size,
                        quantity: itemToChange.quantity + 1,
                    },
                ],
            });
        }
    }

    deleteOrder(id) {
        this.setState({
            orders: this.state.orders.filter((el) => el.id !== id),
        });
    }
}

export default App;
