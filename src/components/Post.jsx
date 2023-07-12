import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post({content}){
   return(
      <article className={styles.post}>
         <header>
            <h3>Faça sua anotações</h3>
         </header>


         <form className={styles.commentForm}>
            <strong>Deixe sua postagem</strong>

            <textarea placeholder='Escreva aqui'/>

            <button>Adicionar</button>

         </form>

         <div className={styles.commentList}>
            <Comment/>
         </div>
      </article>
   )
}