import styles from './Comment.module.css'

export function Comment({content, onDeleteComment}){
   function handleDeleteComment(){
      onDeleteComment(content)
   }

   return(
      <div className={styles.comment}>
         <img className={styles.avatar} src="https://github.com/lyrisnunes.png" alt="" />

         <div className={styles.commentBox}>
            <div className={styles.commentContent}>
               <header>
                  <div className={styles.author}>
                     <strong>Lyris Nunes</strong>
                  </div>

                  <button onClick={handleDeleteComment} className={styles.delete}>Delete</button>
               </header>
               <p>{content}</p>
               
            </div>  
          
         </div>


      </div>
   )
}