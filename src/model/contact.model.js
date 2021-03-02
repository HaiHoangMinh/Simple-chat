import mongoose from "mongoose";

let Schema = mongoose.Schema;

let ContactSchema = new Schema({
    contactId: String,
    userID: String,
    status: {type: Boolean, default: false},
    createdAt: {type: Number, default: Date.now()},
    updatedAt: {type: Number, default: null},
    deletedAt: {type: Number, default: null}
})

ContactSchema.statics = {
    createNew(item) {
        return this.create(item); // creat:function mongodb. this return default Promise
    }
}

module.exports = mongoose.model("contact",ContactSchema); // Export 
