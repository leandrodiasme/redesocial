import { Header } from './components/Header.jsx';
import { Post } from './components/Post.jsx';

import './globals.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar.jsx';

//author: {avatar_url: "", name:"", role:"", publishedAt: Date, content: "",  }

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://pbs.twimg.com/media/EJksgxKUYAYwRXC?format=jpg&name=large",
      name: "Melissa Kuniyoshi",
      role: "Cantora",
    },
    publishedAt: new Date('2022-06-25 16:00'),
    content: [
      { type: 'paragraph', content: 'Fala galera 😘' },
      { type: 'paragraph', content: 'Meu novo álbum Dias já etá disponível nas melhores plataformas de streaming!' },
      { type: 'link', content: '👉Acessem por aqui' },
      { type: 'paragraph', content: 'そこでお待ちしております！' }

    ]
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/74199985?v=4",
      name: "Leandro Dias",
      role: "Desenvolvedor",
    },
    publishedAt: new Date('2022-06-25 16:10'),
    content: [
      { type: 'paragraph', content: "Olá mundo!" },
    ]
  }
];


export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}


