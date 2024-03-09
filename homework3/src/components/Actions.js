import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const Actions = (props, { onChange }) => {
    const actions = props.list;

    const handleActionsChange = (event) => {
        onChange(event.target.id);
    };

    return (
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
                        <button id={action.id} onClick={handleActionsChange}>
                            <DeleteIcon />
                        </button>
                    }
                >
                    <ListItemText primary={`${action.text}`} />
                </ListItem>
            ))}
        </List>
    );
};

export default Actions;
