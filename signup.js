const express = require('express');
// const bodyParser = require('body-parser');
const signupRouter = express.Router();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
// app.use(express.urlencoded({ extended: true }));
app.use("/auth", signupRouter);
app.listen(3000, () => {
    console.log('server started on part 3000')
});

signupRouter
    .route("/signup")
    .get(getSignUp)
    .post(postSignUp)

function getSignUp(req, res) {
    console.log("hello");
    res.sendFile('./views/signup.html', { root: __dirname })
}
function postSignUp(req, res) {
    console.log(req.body)
    let obj = req.body;
    console.log('backend', obj);
    res.json({
        message: 'user signed up',
        data: obj
    });
}