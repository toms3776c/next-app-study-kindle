import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";
import { NextResponse } from "next/server";

export async function DELETE(request, context) {
    const reqBody = await request.json()
    try {
        await connectDB()
        const singleItem = await ItemModel.findById(context.params.id)
        if(singleItem.email === reqBody.email){
            await ItemModel.deleteOne({_id: context.params.id})
            return NextResponse.json({message: "データ削除 成功"})
        }else{
            return NextResponse.json({message: "他の人が作成したアイテムです"})
        }
    } catch (error) {
        return NextResponse.json({message: "データ削除 失敗"})
    }
}