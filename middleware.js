import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function middleware(request) {
    // const token = await request.headers.get("Authorization")?.split(" ")[1]
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImR1bW15QGV4YW1wbGUuY29tIiwiZXhwIjoxNzAyNTU2MTEyfQ.ZkzmcZ3aWumfDwDXQwkwwHf4d4GYI89HVimvh72P1UU"  // デバッグ用
    if(!token){
        return NextResponse.json({message: "トークンがありません"})
    }
    try {
        const secretKey = new TextEncoder().encode("next-market-app-book")
        const decodeJwt = await jwtVerify(token, secretKey)
        return NextResponse.next()
    } catch (error) {
        return NextResponse.json({message: "トークンが正しくないので、ログインしてください"})
    }
}

export const config = {
    matcher: ["/api/item/create", "/api/item/update/:path*", "/api/item/delete/:path*"],
}