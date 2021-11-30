import userModel from "../models/user.model";

export async function getUser(userId: string){
    try {
        const user = await userModel.findOne({_id: userId})
        return user
    }   catch (e) {
        return e
    }
}