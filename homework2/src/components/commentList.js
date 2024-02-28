// Задание: Список комментариев с удалением
// Цель: Комбинирование useState, рендеринга списков и обработки событий для создания интерактивного интерфейса.
// Задача:
// Создать компонент CommentsList, который отображает список комментариев. Каждый комментарий должен иметь кнопку для его удаления. При нажатии на кнопку комментарий должен удаляться из списка.

import { useState } from "react";
import "./commentList.css";

function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Крутой товар" },
        { id: 2, text: "Не очень, на троечку" },
        { id: 3, text: "Все понравилось" },
    ]);

    const removeComment = ({ target }) => {
        setComments(comments.filter((item) => item.id != target.id));
    };

    return (
        <div className="container">
            <ul>
                {comments.map((comment) => (
                    <div key={comment.id} className="comment">
                        <p className="comment__text">{comment.text}</p>
                        <button
                            className="comment__button"
                            id={comment.id}
                            onClick={removeComment}
                        >
                            Удалить комментарий
                        </button>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default CommentsList;
