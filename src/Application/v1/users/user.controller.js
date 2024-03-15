
import userModel from "./user.model";


export const selectUser = async (req, res) => {
    try {
        const users = await userModel.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({
            message: "Error",
            error
        });
    }
}