import mongoose from "moongoose";

let Schema = mongoose.Schema;

let ChatGroupSchema = new Schema({
    name: String,
    userAmount: Number, // So luong ng dung
    messageAmount: Number, // So luong tin nhan
    userID: String,
    member: [{userID: String}],
    status: {type: Boolean, default: false},
    createdAt: {type: Number, default: Date.now()},
    updatedAt: {type: Number, default: null},
    deletedAt: {type: Number, default: null}
})

module.exports = mongoose.model("chat-group",ChatGroupSchema); // Export 