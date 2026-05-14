import { NextResponse } from 'next/server';

export async function GET() {
  const authUrl = process.env.NEXT_PUBLIC_AUTH;
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
  const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URL;
  const scopes = process.env.NEXT_PUBLIC_SCOPES;

  const fullUrl = `${authUrl}?client_id=${clientId}&redirect_uri=${encodeURIComponent(
    redirectUri!
  )}&response_type=code&scope=${encodeURIComponent(scopes!)}`;

  return NextResponse.json({ url: fullUrl });
}
