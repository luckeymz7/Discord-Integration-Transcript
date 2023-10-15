import { PrismaClient } from "@prisma/client";
import styles from "./dashboard.module.css";

const prisma = new PrismaClient();

async function getTranscripts() {
  const transcripts = await prisma.transcripts.findMany({});
  return transcripts;
}

export default async function Dashboard() {
  const transcripts = await getTranscripts();

  return (
    <main className={styles.main}>
      <div className={styles.transcriptList}>
        {transcripts.map((transcript) => {
          return (
            <div className={styles.transcriptDiv} key={transcript.id}>
              <a
                target="_blank"
                href={`http://localhost:3000?id=${transcript.id}`}
              >
                Acessar transcript | {transcript.id}
              </a>
            </div>
          );
        })}
      </div>
    </main>
  );
}
