const { MongoClient } = require("mongodb");
const url = "mongodb+srv://happiness:password1234@cluster0.69qyx.mongodb.net/";
const client = new MongoClient(url);
const dbName = 'Students';

async function main(){
    await client.connect();
    console.log("Connection Successfully");
    const db = client.db(dbName);
    return db
}

module.exports = { main }
