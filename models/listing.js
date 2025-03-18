const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const listingSchema= new Schema(
    {
      title:{
        type:String,
        require:true,
      },
      description: String,
      image:{
        type:String,
        default:"https://images.unsplash.com/photo-1569271304854-c2848dd07200?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1bnNldCUyMHNlYXxlbnwwfHwwfHx8MA%3D%3D",
        set:(v)=>v===""?"https://images.unsplash.com/photo-1569271304854-c2848dd07200?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1bnNldCUyMHNlYXxlbnwwfHwwfHx8MA%3D%3D":v,
      },
      price:Number,
      location:String,
      country:String,
      reviews:[
        {
          type:Schema.Types.ObjectId,
          ref:"Review",
        },
      ],
    }
);
const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;