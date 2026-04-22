/* - Start the server
   - Connect with the database
*/
require('dotenv').config({ path: '../.env' });
const app = require("./src/app");

const connectToDb = require("./src/config/database");
 
connectToDb();

app.listen(3000, ()=>{
    console.log("Server is running on port number 3000");
})