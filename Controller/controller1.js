const database = require('../db');

const getData = async(req,res) => {
    const db = database.main();
    const collection = (await db).collection('Student_Data')
    const result = await collection.find({}).toArray()
    res.send({
        message : result,
        status : 200
    }) 
}

const postData = async(req,res) => {
    try 
    {
        const db = await database.main();
        const collection = db.collection('Student_Data')
        const result = await collection.insertMany(req.body);
        console.log(result)
        res.send({
            message : "Record Inserted Successfully!",
            status : 200,
            data : result
        })
    } catch (error) 
        {
            res.send({
                message : error,
                status : 500,
            })
        }
}

const deleteData = async(req,res) => {
    try
    {
        const db = await database.main()
        const collection = db.collection('Student_Data')
        const query = { name : req.query.name }
        const result = await collection.deleteOne(query);
        if(result.deletedCount > 0){
            res.send({
                message : "Record Deleted Successfully!",
                status : 200,
                data : result
            })
        } else {
            res.send({
                message : "there's an error!",
                status : 404
            })
        }
    } catch (error)
    {
        res.send({
            message : error,
            status : 500
        })
    }
}

const updateData = async(req, res) => {
    try
    {
        const db = await database.main()
        const collection = db.collection('Student_Data')
        const query = { name : req.query.name }
        const newvalues = { $set: { ...req.body } }
        const result = await collection.updateOne(query, newvalues)
        if (result.modifiedCount > 0) {
            res.send({
                message : "Record Update Successfully!",
                status : 200,
                data : result
            })
        } else {
            res.send({
                message : "there an error!",
                status : 404
            })
        }
    }
    catch (error)
    {
        res.send({
            message : error,
            status : 500
        })
    }
}

module.exports = { getData, postData, updateData, deleteData }