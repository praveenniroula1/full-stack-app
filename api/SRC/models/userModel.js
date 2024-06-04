import userSchema from "../Schema/userSchema.js"

export const insertUser=async(obj)=>{
    await userSchema(obj).save()
}

export const getUserById = async (userId) => {
    try {
        const user = await userSchema.findById(userId);
        return user;
    } catch (error) {
        throw new Error("Error getting user by ID");
    }
};
export const getUserByEmail = async (email) => {
    try {
        const user = await userSchema.findOne({email});
        return user;
    } catch (error) {
        throw new Error("Error getting user by ID");
    }
};
