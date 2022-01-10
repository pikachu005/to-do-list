//jshint esversion:6

const express=require("express");
const bodyParser=require("body-parser");
let items=["Buy food", "cook food", "Eat food"];
let workitems=[];
const app=express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
  let today=new Date();

   let options={
     weekday: "long",
     day:"numeric",
     month: "long",
     year: "numeric"

   };
   let day=today.toLocaleDateString("en-us",options);

   res.render("list",{ listtitle: day, newlistitems: items})

//  console.log(day1);
});
app.post("/",function(req,res){
let item=req.body.newitem;
if(req.body.list==="work")
{
  let item=req.body.newitem;
  workitems.push(item);
  res.redirect("/work")
}
else
{
items.push(item);
    res.redirect("/");
  }
})
app.get("/work",function(req,res){
  res.render("list",{listtitle: "work list",newlistitems: workitems});
})
app.post("/work",function(req,res){
  let item=req.body.newitem;
  workitems.push(item);
  res.redirect("/work")
})
app.get("/about",function(req,res){
  res.render("about");
})
app.listen(3000,function(){
  console.log("server is running")
})
