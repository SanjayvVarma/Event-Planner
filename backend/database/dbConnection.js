import { connect } from "mongoose";

const dbConnection = () => {
    connect(process.env.MONGO_URL, {
        dbName: "EVENT_PLANNER",
    }).then(() => {
        console.log("Database connected successfully");
    }).catch((err) => {
        console.log("Some error occured while connecting database",err);
    })
};

export default dbConnection;