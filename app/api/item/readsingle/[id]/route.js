import { NextResponse } from "next/server";
import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";

export async function GET(request, context) {
  try {
    await connectDB();
    const singleItem = await ItemModel.findById(context.params.id);
    return NextResponse.json({
      message: "アイテム読み取り成功 - Single",
      singleItem: singleItem,
    });
  } catch (error) {
    return NextResponse.json({ message: "アイテム読み取り失敗 - Single" });
  }
}
