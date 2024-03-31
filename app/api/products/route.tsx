import { NextRequest, NextResponse } from "next/server";
import schema  from "./schema";

export function GET(request: NextRequest) {
    return NextResponse.json([
        { id: 1, product: "milk", price: 2.99 },
        { id: 2, product: "bread", price: 1.99 },
    ])
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if(!validation.success)
        return NextResponse.json({error: validation.error.errors}, { status: 400 });
    return NextResponse.json({ id: 1, product: body.product, price: body.price}, { status : 201 })
}