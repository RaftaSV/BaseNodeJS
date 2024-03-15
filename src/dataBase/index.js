import  sequelize  from "sequelize";


//
const user = "root";
const password = "root";
const host = "localhost";
const port = "3306";
const database = "test";

export const conecction = new sequelize (database, user, password, {
    host,
    port,
    dialect: "mysql",
    define: {
        timestamps: false
    }
}); 

export const testConecction = async () => {
    try {
        await conecction.authenticate();
        console.log("Conecction has been established successfully");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};
