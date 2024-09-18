const express=require("express");
const app=express();
app.use(express.json());

let todos=[];
let id=0;
app.get("/",function(req,res){
    res.sendFile(__dirname+"/public/index.html")
})

app.get("/me",function(req,res){
    res.json({
        todos})
})



app.post("/create",function(req,res){
const task=req.body.task;
todos.push({
    task:task,
    id:id+1
})
console.log(todos);
res.json({
    task:task,
    id:id+1
})
id+=1;
})
app.post("/delete",function(req,res){
    const id=Number(req.body.id);
    console.log(id)
    todos = todos.filter(u => u.id !== id);
    console.log(todos)
    res.json({
        message: "Task deleted successfully"
    })
})
app.listen(3000);