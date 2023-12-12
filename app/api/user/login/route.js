import connectDB from "@/app/utils/database";
import { UserModel } from "@/app/utils/schemaModels";
import { NextResponse } from "next/server";

export async function POST(request) {
    const reqBody = await request.json()
    try {
        await connectDB()
        const saveUserData = await UserModel.findOne({email: reqBody.email})
        if(saveUserData){
            // ユーザーが存在する場合の処理
            if(reqBody.password === saveUserData.password){
                // パスワードが正しい場合
                return NextResponse.json({message: "ログイン 成功"})
            }else{
                // パスワードが間違っている場合
                return NextResponse.json({message: "ログイン 失敗 : パスワードが間違っています"})
            }
        }else{
            // ユーザーが存在しない場合の処理
            return NextResponse.json({message: "ログイン 失敗 : ユーザーを登録してください"})
        }
    } catch (error) {
        return NextResponse.json({message: "ログイン 失敗"})
    }
}