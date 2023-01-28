const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
 


app.use(cors({
    origin: '*'
}));

app.use(express.json());

// test requesst

app.get("/forms", (req, res) => {
    res.send({ status: 200, message: "hello" })
})


// get all forms

app.get('/forms/getAllForms', (req, res) => {
    let email = req.query.email
    fs.readFile("./all_form.json", "utf-8", (err, jsonData) => {
        if (err) {
            console.log(err);
        }
        else {
            let response = JSON.parse(jsonData);
            response.forEach((item) => {
                if (email == Object.keys(item)) {
                    res.send(Object.values(item))
                }
            })
        }
    })
})


// open a single form 


app.get('/forms/openForm', (req, res) => {
    try {
        var form_id = req.query.form_id
        fs.readFile("./all_form.json", "utf-8", (err, jsonData) => {
            if (err) {
                console.log(err);
            }
            else {
                let response = JSON.parse(jsonData);
                for (let i = 0; i < response.length; i++) {
                    Object.values(response[i]).forEach((item) => {
                        Object.values(item).forEach((key)=>{
                            if(key.form_id === form_id){
                                res.send(key)
                            }
                        })
                    })
                }
            }
        })
    } catch (error) {
        console.log(error.message);
    }
})


app.get("/forms/checkAdmin", ( req , res)=>{
    let email = req.query.email
    fs.readFile("./all_form.json", "utf-8", (err, jsonData) => {
        if (err) {
            console.log(err);
        }
        else {
            let response = JSON.parse(jsonData);
            response.forEach((item) => {
                if (email == Object.keys(item)) {
                    res.send("true")
                }else{
                    res.send("false")
                }
            })
        }
    })
})
app.listen(8080, () => {
    console.log("app listening");
})  