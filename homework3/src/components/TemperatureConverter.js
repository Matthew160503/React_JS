// Цель: Создать компонент TemperatureConverter, используя компоненты TextField и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.
// Компоненты:
// Используйте TextField для ввода значения температуры.
// Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта).
// Логика:
// При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом.
// Реализуйте конвертацию температур в обоих направлениях.
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import Button from "@mui/material/Button";

function TemperatureConverter() {
    const [celDegrees, setCelDegrees] = useState(0);
    const [farDegrees, setFarDegrees] = useState(32);

    const [tumbler, setTumbler] = useState(true);

    const changeCelDegrees = ({ target }) => {
        setCelDegrees(Number(target.value));
        setFarDegrees(((Number(target.value) * 9) / 5 + 32).toFixed(2));
    };

    const changeFarDegrees = ({ target }) => {
        setFarDegrees(Number(target.value));
        setCelDegrees(((5 * (Number(target.value) - 32)) / 9).toFixed(2));
    };

    const changeDegrees = () => {
        if (tumbler) {
            setTumbler(false);
        } else {
            setTumbler(true);
        }
    };

    return (
        <div>
            <Box
                component="form"
                sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    type="number"
                    label="градусы Цельсия"
                    onChange={changeCelDegrees}
                    sx={{ m: 1, width: "25ch" }}
                    InputProps={{
                        readOnly: !tumbler,
                        endAdornment: (
                            <InputAdornment position="start">°C</InputAdornment>
                        ),
                    }}
                    value={String(celDegrees)}
                />
            </Box>
            <Box
                component="form"
                sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    type="number"
                    label="градусы Фаренгейта"
                    onChange={changeFarDegrees}
                    sx={{ m: 1, width: "25ch" }}
                    InputProps={{
                        readOnly: tumbler,
                        endAdornment: (
                            <InputAdornment position="start">℉</InputAdornment>
                        ),
                    }}
                    value={String(farDegrees)}
                />
            </Box>
            <Button onClick={changeDegrees} variant="contained">
                Поменять ввод градусов
            </Button>
        </div>
    );
}

export default TemperatureConverter;
