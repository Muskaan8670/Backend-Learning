const app = require("./src/app");

const users = [];

// POST /users
app.post("/users",(req,res)=>{
    users.push(req.body);

     res.status(201).json({
        message : " user created successfully!"
    });

    console.log(users);
})

// GET /users

app.get("/users",(req,res)=>{
    res.status(200).json({
        users : users
    });
})

// DELETE /users/:index

app.delete("/users/:index",(req,res)=>{
    delete users[req.params.index]

    res.status(204).json({
        message : "user deleted successfully"
    })
})

// PATCH /users/:index

app.patch("/users/:index",(req,res)=>{
    users[req.params.index].name = req.body.name ;

    res.status(200).json({
        users : users
    })
})

// PUT /users/:index
app.put("/users/:index",(req,res)=>{
    users[req.params.index].id = req.body.id;
    users[req.params.index].name = req.body.name;
    users[req.params.index].email = req.body.email;
    users[req.params.index].isActive = req.body.isActive;

    console.log(users[req.params.index])

    res.status(200).json({
        message : "User updateds successfully!!"
    })
})

app.listen(3000,()=>{
    console.log("Server is running on port number 3000");
})