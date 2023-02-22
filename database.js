import mongoose from "mongoose";

try {
    mongoose.connect('mongodb://ariel1515:zuWaPsnhwQfuF2CR@ac-n4ywwmh-shard-00-00.ng8kf7v.mongodb.net:27017,ac-n4ywwmh-shard-00-01.ng8kf7v.mongodb.net:27017,ac-n4ywwmh-shard-00-02.ng8kf7v.mongodb.net:27017/?ssl=true&replicaSet=atlas-hm9ran-shard-0&authSource=admin&retryWrites=true&w=majority', () => {
        console.log("Connect DB ok 👋");
    });
} catch (error) {
    console.log("Error de conexión a mongodb:" + error);
}