import { PrismaClient } from "@prisma/client";
import styles from "./page.module.css";

const prisma = new PrismaClient();

async function getHTML(id) {
  const transcript = await prisma.transcripts.findUnique({
    where: {
      id: +id,
    },
  });

  return transcript.html;
}

export default async function Home({ searchParams }) {
  if (searchParams.id) {
    const res = await getHTML(searchParams.id);

    return <iframe className={styles.iframe} srcDoc={res}></iframe>;
  }

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h2 className={styles.logo}>Logo</h2>
        <nav className={styles.navigation}>
          <a className={styles.home} href="#">
            Home
          </a>
          <a className={styles.home} href="#">
            Sobre
          </a>
          <a className={styles.home} href="#">
            Dashboard
          </a>
          <button className={styles.button}>Entrar com discord</button>
        </nav>
      </header>
      <section className={styles.home2}>
        <div className={styles.homeContent}>
          <h1>Hello, i am BOT NAME</h1>
          <h3>I'm a custom discord bot</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            tristique est sed facilisis ultrices. Vivamus commodo pharetra
            purus, a lacinia ex scelerisque at. Mauris risus nisl, consectetur
            quis semper nec, iaculis ac mi. Maecenas ut mauris ornare metus
            consequat cursus id et mauris.
          </p>
          <div className={styles.morebutton}>
            <a href="https://discordapp.com/users/337012320284835840">
              Saber mais
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
