import styles from './Sidebar.module.css'

export function Sidebar(){
   return(
      <aside>
         <img className={styles.avatar} src="https://github.com/lyrisnunes.png" alt="" />
         <div className={styles.profile}>
            <h1>Meu perfil</h1>
            <span>Lyris Nunes - Programadora Front End</span>
            <button>VISUALIZAR PERFIL</button>
         </div>
         
      </aside>
      
   )
}