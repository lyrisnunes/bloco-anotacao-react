import { Header } from "./components/Header";
import { Post } from "./components/Post";

//styles
import "./Global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Skills } from "./components/Skills";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.container}>
        <Sidebar />
        <Skills />
      </div>

      <main>
        <Post content="Faça suas anotações" />
      </main>
    </div>
  );
}
