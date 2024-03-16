import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: 'product',
    initialState: {
        products: [
            {
                id: 1,
                name: "Ноутбук",
                description: "Легкий и мощный, идеальный для работы и развлечений.",
                price: 45000,
                avaliailable: true,
            },
            {
                id: 2,
                name: "Чайник электрический",
                description: "Быстро кипятит воду, с функцией автоотключения.",
                price: 2500,
                avaliailable: true,
            },
            {
                id: 3,
                name: "Смартфон",
                description:
                    "С большим экраном, высокой производительностью и отличной камерой.",
                price: 60000,
                avaliailable: true,
            },
        ],
    },
    reducers: {
        addProduct: (state, action) => {
            const newProduct = JSON.parse(action.payload)
            state.products.push({
                id: Date.now(),
                name: newProduct.name,
                description: newProduct.description,
                price: newProduct.price,
                avaliailable: true,
            });
        },
        removeProduct: (state, { payload: product }) => {
            const filteredArray = state.products.filter(
                (item) => item.id !== product.id
            );
            state.products = filteredArray;
        },
        avaliableProduct: (state, { payload: product }) => {
            alert(`Вы купили ${product.name}!`)
            state.products.map(item => {
                    if (item.id === product.id){
                        return item.avaliailable = false;
                    }
            })

        },
        changeProduct: (state, {payload: product}) => {
            const name = prompt('Введите новое название продукта', `${product.name}`);
            if (name !== null){
                if (name != "" || name.length >= 5){
                    state.products.map(item => {
                        if (item.id === product.id){
                            return item.name = name;
                        }})
                } else {
                    alert('Неверный формат ввода нового названия!')
                }
            }

            const price = prompt('Введите новую цену продукта', `${product.price}`);
            if (price !== null){
                if (!isNaN(price % 2) && price >= 0){
                    state.products.map(item => {
                        if (item.id === product.id){
                            return item.price = price;
                        }})
                } else {
                    alert('Неверный формат ввода новой цены!')
                }
            }

            let isAvaliableProduct;

            if (product.avaliailable){
                isAvaliableProduct = window.confirm('Хотите убрать товар с продажи?')
                if(isAvaliableProduct){
                    state.products.map(item => {
                        if (item.id === product.id){
                            return item.avaliailable = false;
                        }
                    })
                }
            } else {
                isAvaliableProduct = window.confirm('Хотите добавить товар в продажу?')
                if(isAvaliableProduct){
                    state.products.map(item => {
                        if (item.id === product.id){
                            return item.avaliailable = true;
                        }
                    })
                }
            }
        }
    }
})

export const {addProduct, removeProduct, avaliableProduct, changeProduct} =productsSlice.actions;

export default productsSlice.reducer;