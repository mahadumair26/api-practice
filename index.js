// HINTS:
// 1. Import express and axios
import express from "express";
import axios from "axios";
import  bodyParser from "body-parser";

const app = express();
const port = 3000;
const apiUrl = "https://secrets-api.appbrewery.com";

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.listen(port,()=>{
    console.log(`server is running on the port no : ${port}`);
})

app.get("/",async (req,res)=>{
    
    try {
        const result = await axios.get(`${apiUrl}/random`);
        // console.log(result.data);
        res.render("index.ejs",{secret:JSON.stringify(result.data.secret),user:JSON.stringify(result.data.username)});
    } catch (error) {
        console.log(error);
        
    }

})
// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
