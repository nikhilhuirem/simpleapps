import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    return NextResponse.json([
        { id: 1, product: "milk", price: 2.99 },
        { id: 2, product: "bread", price: 1.99 },
    ])
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    
}