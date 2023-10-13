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

  return <h1>Discord Integration Transcript</h1>;
}
