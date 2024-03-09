// Задание 2: Список дел с Material UI
// Цель: Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.

// Компоненты:

// Используйте TextField для ввода новой задачи.
// Добавьте Button для добавления задачи в список.
// Для каждой задачи в списке используйте Card или ListItem из Material UI. Внутри каждого элемента списка разместите текст задачи и IconButton с иконкой удаления (например, DeleteIcon).
// Логика:

// При нажатии на кнопку добавления, новая задача должна добавляться в список.
// Рядом с каждой задачей должна быть кнопка для её удаления.
import "./TodoList.css";
import { useId, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";

function TodoList() {
    const [actions, setActions] = useState([
        { id: 1, text: "Крутой товар" },
        { id: 2, text: "Не очень, на троечку" },
        { id: 3, text: "Все понравилось" },
    ]);

    const [newAction, setNewAction] = useState("");

    const writeNewAction = ({ target }) => {
        setNewAction(target.value);
    };

    const [uniqueId, setUniqueId] = useState(100);

    const addAction = () => {
        if (newAction === "") {
            return;
        }
        console.log(uniqueId);
        setActions([...actions, { id: uniqueId, text: newAction }]);
        setUniqueId(uniqueId + 1);
    };

    const removeAction = ({ target }) => {
        setActions(actions.filter((item) => item.id != target.id));
    };

    return (
        <div className="container">
            <Box
                className="enter-field"
                sx={{
                    width: 500,
                    maxWidth: "100%",
                }}
            >
                <TextField
                    onChange={writeNewAction}
                    fullWidth
                    label="Введите новую задачу"
                    id="fullWidth"
                />
                <Button onClick={addAction} variant="contained">
                    Добавить
                </Button>
            </Box>
            <List
                sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                }}
            >
                {actions.map((action) => (
                    <ListItem
                        key={action.id}
                        disableGutters
                        secondaryAction={
                            <Button
                                id={action.id}
                                onClick={removeAction}
                                startIcon={<DeleteIcon />}
                            >
                                Delete
                            </Button>
                        }
                    >
                        <ListItemText primary={`${action.text}`} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default TodoList;
