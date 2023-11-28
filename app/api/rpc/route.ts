import { alchemyRPCUrl } from "@/app/constants/enviornmentVariables";
import { NextResponse } from "next/server";

// import { serverEnv } from "@/env/server.mjs";

export async function POST(req: Request) {
  const res = await fetch(alchemyRPCUrl, {
    method: "POST",
    headers: {
      ...req.headers,
    },
    body: JSON.stringify(await req.json()),
  });

  return NextResponse.json(await res.json());
}
