import axios from "axios";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request, response) {
  const { url } = await request.json();
  if (!url)
    return new NextResponse("Sem URL", {
      status: 400,
      headers: { "content-type": "text/html" },
    });

  if (!url.startsWith("https://cdn.discordapp.com"))
    return new NextResponse("URL Inválido", {
      status: 400,
      headers: { "content-type": "text/html" },
    });

  const alreadyExists = await prisma.transcripts.findMany({
    where: {
      url,
    },
  });
  if (alreadyExists.length > 0)
    return new NextResponse("Já existe esse URL", {
      status: 400,
      headers: { "content-type": "text/html" },
    });

  const res = await axios.get(url);

  const transcript = await prisma.transcripts.create({
    data: {
      url,
      html: `${res.data}`,
    },
  });

  return new NextResponse(transcript.id, {
    status: 200,
    headers: { "content-type": "text/html" },
  });
  // redirect(`/api/transcript?id=${id}`);
}
