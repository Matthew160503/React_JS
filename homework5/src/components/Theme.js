import { useDispatch, useSelector } from "react-redux";
import Switch from "@mui/material/Switch";
import "./Theme.css";
import classNames from "classnames";

function Theme() {
    const theme = useSelector((state) => state);
    const dispatch = useDispatch();

    const changeTheme = () => {
        dispatch({ type: "TOGGLE_THEME" });
    };

    return (
        <div
            className={classNames(
                "container",
                theme === "dark" ? "dark-theme" : "white-theme"
            )}
        >
            <h1>
                Поменяй тему: <Switch onClick={changeTheme} />
            </h1>
        </div>
    );
}

export default Theme;
