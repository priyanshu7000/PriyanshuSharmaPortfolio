import connection from "../Models/config/connection";
import contactSchema from "../Models/contact.model";

export const contactSave = async (req, res)=>{
    const contact = await contactSchema.find();
    const length = contact.length;
    const _id = length ==0?1:contact[length-1]._id +1; 

    const contactData = {
        ...req.body,
        "_id":id,
        timeStamp: new Date(),
    }

    try{
        await contactSchema.create(contactData);
        res.status(201).json({message: "Contact data saved successfully"});
    }catch(error){
        res.status(500).json({message: `Error while saving contact data: ${error}`});
    }
};

export const contactFetch = async (req, res) =>{
    const contactList = await contactSchema.find(req.query);
    if(contactList.length !== 0){
        res.status(200).json(contactList);
    }else{
        res.status(404).json({message: "No contact data found"});
    }
}

export const contactDelete = async (req, res) =>{
    const contact = await contactSchema.findOne(req.body);
    if(!contact){
        res.status(404).json({message: "Contact data not found"});
    }else{
        const result = await contactSchema.deleteOne(req.body);
        res.status(200).json({message: "Contact data deleted successfully"});
    }
}

