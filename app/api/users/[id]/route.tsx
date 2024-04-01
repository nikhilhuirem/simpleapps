import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

interface Props {
    params: { id: string };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    if(!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(user)
}

export async function PUT(request: NextRequest, { params : { id }}: Props) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if(!validation.success)
        return NextResponse.json({error: validation.error.errors}, { status: 400 });
    if(!user)
        return NextResponse.json({ error: "User not found"}, { status : 400 })
    return NextResponse.json({ id: 1, name: "Nik"});
}

export async function DELETE(request: NextRequest, { params : { id }}: Props) {
    if (!user)
        return NextResponse.json({error: "User not exist"}, { status: 400 });
    return NextResponse.json({});

}