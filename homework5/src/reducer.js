const reducer = (state = "light", action) => {
    switch (action.type) {
        case "TOGGLE_THEME":
            return state === "light" ? "dark" : "light";
    }
};

export default reducer;
