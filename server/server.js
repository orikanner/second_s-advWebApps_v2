const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
// app.all('*', function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//   next();
// });

const {default: mongoose} = require("mongoose");


const uri = "mongodb+srv://orikanner12345:orikanner12345@cluster0.4njflyi.mongodb.net/shop?retryWrites=true&w=majority"
async function connectToDB()
{
    try{
        //console.log("lets try conn to mongo");
        console.log("try conn to mongo")
        
        await  mongoose.connect(uri, { 
            useUnifiedTopology: true, 
            useNewUrlParser: true 
        });
        console.log("conn to mongo")
    }catch(err){
        console.error(err);   
    }
}

connectToDB();



//imports all routes

const productsRoute = require('./routes/productRoute');
const cartRoute = require('./routes/cartRoute');
app.use('/products',productsRoute);
app.use('/cart',cartRoute);

app.listen(5000, ()=>{console.log("server started on port 5000")})
