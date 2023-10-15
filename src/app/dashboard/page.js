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
    <>
      {transcripts.map((transcript) => {
        return (
          <div key={transcript.id}>
            <h1>{transcript.id}</h1>
            <p>{transcript.url}</p>
          </div>
        );
      })}
    </>
  );
}
