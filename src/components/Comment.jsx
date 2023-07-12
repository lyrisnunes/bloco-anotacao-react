import styles from './Comment.module.css'

export function Comment(){
   return(
      <div className={styles.comment}>
         <img className={styles.avatar} src="https://github.com/lyrisnunes.png" alt="" />

         <div className={styles.commentBox}>
            <div className={styles.commentContent}>
               <header>
                  <div className={styles.author}>
                     <strong>Lyris Nunes</strong>
                     <time title="12 de Julho as 13:31" dataTime="2023-07-12 12:30:10">Publicado há 1h</time>
                  </div>

                  <button>Delete</button>
               </header>
               <p>texto teste</p>
               
            </div>  

            <footer>
               <button>Feito</button>
            </footer>
         </div>


      </div>
   )
}