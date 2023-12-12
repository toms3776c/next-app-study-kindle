import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";
import { NextResponse } from "next/server";

export async function DELETE(request, context) {
    try {
        await connectDB()
        await ItemModel.deleteOne({_id: context.params.id})
        return NextResponse.json({message: "データ削除 成功"})
    } catch (error) {
        return NextResponse.json({message: "データ削除 失敗"})
    }
}