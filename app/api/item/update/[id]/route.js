import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";
import { NextResponse } from "next/server";

export async function PUT(request, context) {
    const reqBody = await request.json()
    try {
        await connectDB()
        await ItemModel.updateOne({_id: context.params.id}, reqBody)
        return NextResponse.json({message: "アイテム編集成功"})
    } catch (error) {
        return NextResponse.json({message: "アイテム編集失敗"})
    }
}