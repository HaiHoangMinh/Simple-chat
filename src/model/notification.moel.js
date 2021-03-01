import mongoose from "moongoose";

let Schema = mongoose.Schema;

let NotificationSchema = new Schema({
    contactId: String,
    userID: String,
    isRead: Boolean,
    sender: {
        id: String,
        username: String,
        avatar: String
    },
    receiver: {
        id: String,
        username: String,
        avatar: String
    },
    type: String,
    content:String,
    createdAt: {type: Number, default: Date.now()},
})

module.exports = mongoose.model("notification",NotificationSchema); // Export 