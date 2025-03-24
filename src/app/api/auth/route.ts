import { NextResponse } from "next/server";

const handler = () => {
  return new NextResponse("Auth Required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  });
};

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const DELETE = handler;
