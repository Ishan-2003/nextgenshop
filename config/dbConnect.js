//     const connection = mongoose.connect(process.env.MONGODB_URI);
const mongoose = require('mongoose');
const dbConnect = ()=>{
   try {
    // const client = new MongoClient(process.env.MONGODB_URI, {
    //     serverApi: {
    //       version: ServerApiVersion.v1,
    //       strict: true,
    //       deprecationErrors: true,
    //     }
    //   });
    const connection = mongoose.connect(process.env.MONGODB_URI,{
      user: "Ishan",
  pass: "ishan#135790",
  authSource: "admin",
  useNewUrlParser: true
    });
    console.log("Database connected successfully");
}
catch(err){
    console.log("Database connection error");
}

}

module.exports = dbConnect;