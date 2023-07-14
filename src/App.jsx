import { Header } from "./components/Header";
import { Post } from "./components/Post";

//styles
import "./Global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Skills } from "./components/Skills";

// content : string
const posts = [
  {
    id: 1,
    content: [{ type: "paragraph", content: "Faça suas anotações abaixo ❤️" }],
    publishedAt: new Date("2023-07-13 12:21:30"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.container}>
        <Sidebar />
        <Skills />
      </div>

      <main>
        {posts.map((post) => {
          return <Post key={post.id} content={post.content} />;
        })}
      </main>
    </div>
  );
}
