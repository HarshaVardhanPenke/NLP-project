const express = require('express');
const cors = require("cors");
const {MongoClient}=require('mongodb');
const url="mongodb+srv://21pa1a1273:rakibali2233a@cluster0.hivyjuc.mongodb.net/";

const app = express();
app.use(cors());
app.use(express.json()); 
app.post('/', (req, res) => {
    const data = req.body;
    console.log(data); 
     const client =new  MongoClient(url);
     client.connect()
     .then(async ()=>{
         const db=client.db("NLP");
         const collection=db.collection("nlpData");
         const storage=db.collection("storage");
         const Insertres=await storage.insertOne({data});
         console.log("Inserted successfully");
         
     })
     .catch(err=>{
       console.log(err.message);
     })
     res.send(data);
});
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const client = new MongoClient(url);
  
  try {
      await client.connect();
      const db = client.db("NLP");
      const storage = db.collection("storage");
      const user = await storage.findOne({ "data.email": email });

      if (!user) {
          res.status(404).json({ message: "User not found" });
      } else if (user.data.password !== password) {
          res.status(401).json({ message: "Invalid password" });
      } else {
          res.status(200).json({ message: "Login successful" });
      }
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
  } finally {
      await client.close();
  }
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});