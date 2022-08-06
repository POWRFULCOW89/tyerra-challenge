import Head from "next/head";
import styles from "../styles/Home.module.css";
import Video from "../components/Video";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/getAllPosts");
      const posts = await res.json();
      setPosts(posts);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Tyerra</title>
        <meta
          name="description"
          content="Compra y vende tus propiedades con Tyerra"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.slider}>
        {loading ? (
          <div className={styles.loader}>
            {<AiOutlineLoading3Quarters size={36} />}
          </div>
        ) : (
          posts.map((post) => <Video key={post.id} post={post} />)
        )}
      </main>
    </div>
  );
};

export default Home;
