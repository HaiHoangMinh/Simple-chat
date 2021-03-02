import express from "express";
import connectDB from "./config/connectDB";
import contactModel from "./model/contact.model";



let app =express()
connectDB(); // connect mongodb

app.get("/test-database", async (req,res) => {
    try {
        let item = {
            contactId: "1564649",
            userID: "3235733",
        }
        let contact = await contactModel.createNew(item);
        res.send(contact);


    } catch (err) {
        console.log(err)
    }
});

app.listen(process.env.APP_PORT,process.env.APP_HOST, ()=>{
    console.log(`Hello every one, It running: ${process.env.APP_HOST}:${process.env.APP_PORT}/` )
})