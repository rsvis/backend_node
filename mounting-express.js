const express = require('express');
//Mini app
const userRouter = express.Router();
const app = express();
app.listen(3000);
let user = [
    {
        id: 1,
        name: "ravi1",
        sex: "male1"
    },
    {
        id: 2,
        name: "ravi2",
        sex: "male2"
    },
    {
        id: 3,
        name: "ravi3",
        sex: "male3"
    },
    {
        id: 4,
        name: "ravi4",
        sex: "male4"
    },


]

app.use("/user", userRouter);
userRouter
    .route("/")
    .get(getUser)
    .patch(upateUser)
    .delete(deleteUser)
    .post(postUser)

userRouter
    .route("/:id")
    .get(getUserById)


function getUser(req, res) {
    res.send(user)
}
function upateUser(req, res) {
    console.log(req.body);
    user = req.body

    res.json({
        message: 'data recived sucessfully',
        data: req.body
    })
}
function deleteUser(req, res) {
    user = {};
    res.json({
        message: "deleted",
        data: user
    })
}
function postUser(req, res) {
    console.log(req.body)
    dataToBeUpdated = req.body
    for (key in dataToBeUpdated) {
        user[key] = dataToBeUpdated[key];
    }
    res.json({
        message: 'data update sucessfully',
        data: user
    })
}
function getUserById(req,res) {
    console.log(req.params.id)
    let paramId = req.params.id;
    let obj = {};
    for (let i = 0; i < user.length;i++){
        if(user[i]['id']==paramId)
        {
            obj=user[i]
        }
    }
    res.json({
        message:"req recived",
        data:obj
    })
}