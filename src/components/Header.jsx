import styles from './Header.module.css'

export function Header(){
   return(
      <header className={styles.header}>
         <h3> <span>&lt;</span> Anotações React <span>/&gt;</span>  </h3>
      </header>
   )
}