import axios from "axios";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request, response) {
  const filterQueryParams = request.url.split("?")[1];

  const hasURL = filterQueryParams?.includes("id=");

  if (!hasURL || !filterQueryParams) return new Response("Sem ID");

  const id = +filterQueryParams.split("id=")[1];

  const transcript = await prisma.transcripts.findUnique({
    where: {
      id,
    },
  });

  return new NextResponse(transcript.html, {
    status: 200,
    headers: { "content-type": "text/html" },
  });
}
