const express = require("express");
const router = express.Router();
const blogdata = require("../blogdata");

// const bodyParser = require("body-parser");

// application.use(bodyParser.urlencoded({"extended":false}))
// .Router mathi on express for shortcut
// const router = express.Router();

router.get("/blog", (req, res) => {
  res.json(blogdata);
});
// use router.get

router.get("/blog/:id", (req, res) => {
  // console.log(req.params.id) ----> requests parameters from mathi path
  res.json(blogdata.filter((blogs) => blogs.id == Number(req.params.id)));
});

//POST API
router.post("/blog", (req, res) => {
  // console.log("ok");
  const newArrayBlog = {
    id: req.body.id,
    title: req.body.title,
    content: req.body.content,
  };
  console.log(newArrayBlog);

  blogdata.push(newArrayBlog);
  res.send(blogdata);
  // // blogs = [...blogs, newArrayBlog]  ----> another way to include in array
  // res.json({ message: "new blog added" ,data:newArrayBlog});
});

//PUT API
router.put("/blog/:id", (req,res)=>{
  let ind = req.params.id-1
  if(blogdata[ind]){
      blogdata[ind].id = req.body.id
      blogdata[ind].name = req.body.title
      blogdata[ind].address = req.body.content
      res.status(200).json({message:"Blog Updated successfully" , data: blogdata})
  }else{
      res.status(404).json("blog not found") 
  }
})

// DELETE API
// router.delete("/blog/:id", (req, res) => {
  // const ind = req.params.id
  // console.log(blogdata[ind])
  
  // deleteB.findIndex(({ id }) => id === req.params.id);
  // if (itemIndex >= 0) {
  //   deleteB.splice(itemIndex, 1);
  // }
  // const deleteBlog = blogdata.filter(blogs=>blogs!=blogdata[ind])
//     res.status(200).json({message:"Blog deleted successfully", data:deleteB})
// });

// Delete API 2nd
router.delete("/blog/:id", (req, res) => {
  console.log(blogdata[req.params.id-1])
  const deleteB = blogdata.filter(({ id }) => id !== req.params.id);
  res.status(200).json({message:"Blog deleted successfully", data:deleteB})
});    

//delete 3rd method
// router.delete("/blog/:id", (req, res) => {
//  let deleteblog = blogdata.findIndex(({id}) => id ==req.params.id)
//  if (deleteblog >= 0){
//   blogdata.splice(deleteblog,1)
//  }
//  console.log(blogdata[req.params.id])
//   res.status(200).json({message:"Blog deleted successfully", data:deleteblog})
// });    

module.exports = router;
