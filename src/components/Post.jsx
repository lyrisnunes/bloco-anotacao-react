import { useState } from "react";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

// content : string

export function Post({ content }) {
  const [comments, setComment] = useState([]);

  const [newCommentext, setNewCommentText] = useState("");

  function createNewComment() {
    event.preventDefault();

    setComment([...comments, newCommentext]);
    setNewCommentText("");
  }

  function newCommentChange() {
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete) {
    const commentWithouDelete = comments.filter((comment) => {
      return comment != commentToDelete;
    });

    setComment(commentWithouDelete);
  }

  return (
    <article className={styles.post}>
      <header>
        <h3>Faça sua anotações</h3>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          }
        })}
      </div>

      <form onSubmit={createNewComment} className={styles.commentForm}>
        <strong>Deixe sua postagem</strong>

        <textarea
          name="comment"
          placeholder="Escreva aqui"
          value={newCommentext}
          onChange={newCommentChange}
          required
        />

        <button>Adicionar</button>
      </form>

      <div className={styles.commentList}>
        {comments.map((content) => {
          return (
            <Comment
              key={content}
              content={content}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
