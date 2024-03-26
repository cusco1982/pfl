import { NextResponse } from 'next/server'



export async function GET(request) {}


// The following HTTP methods are supported: 

// GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS.

// If an unsupported method is called, Next.js will return a 405 Method Not Allowed response.



// Route Handlers are cached by default when using the GET method with the Response object.
export async function GET() {
  const res = await fetch('https://data.mongodb-api.com/...', {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
  })
  const data = await res.json()
 
  return NextResponse.json({ data })
}