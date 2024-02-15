const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    campId: { type: mongoose.SchemaTypes.ObjectId },
    msgId: { type: mongoose.SchemaTypes.ObjectId },
    whatsappId: { type: mongoose.SchemaTypes.ObjectId },
    leadId: { type: mongoose.SchemaTypes.ObjectId }
})
const whatsappModel = mongoose.model("whatsapp", schema)


// mongoose.models.campaign


async function create(data){
    return await whatsappModel.create(data)    
}

async function read(whatsappId){
   return await whatsappModel.findOne({whatsappId})
}


async function updateCampaign(data){
    return await mongoose.models.campaign.create(data)    
}

async function del(whatsappId){
    return await whatsappModel.deleteOne({whatsappId})
 }


module.exports = {create,updateCampaign,read,del}