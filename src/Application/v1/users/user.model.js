import  sequelize  from "sequelize";
import { conecction } from "../../../dataBase/index";

const userModel = conecction.define("user", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,

    },
    name: {
        type: sequelize.STRING
    },
    email: {
        type: sequelize.STRING
    },
    password: {
        type: sequelize.STRING
    }
}, {
    timestamps: false
});

userModel.sync();
export default userModel;