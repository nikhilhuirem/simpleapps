import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
    params: { id: number };
}

export function GET(request: NextRequest, { params: { id } }: Props) {
    if(id > 10) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ id: 1, name: 'John Doe' })
}

export async function PUT(request: NextRequest, { params : { id }}: Props) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if(!validation.success)
        return NextResponse.json({error: validation.error.errors}, { status: 400 });
    if(id > 10)
        return NextResponse.json({ error: "User not found"}, { status : 400 })
    return NextResponse.json({ id: 1, name: "Nik"});
}

export async function DELETE(request: NextRequest, { params : { id }}: Props) {
    if (id > 10)
        return NextResponse.json({error: "User not exist"}, { status: 400 });
    return NextResponse.json({});

}