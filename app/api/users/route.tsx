import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
    const user = await prisma.user.findMany()
    return NextResponse.json(user)
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if(!validation.success)
        return NextResponse.json({error: validation.error.errors}, { status: 400 });
    return NextResponse.json({ id: 1, name: body.name}, { status : 201 });
}