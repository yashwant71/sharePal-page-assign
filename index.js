require("dotenv").config()
const express = require('express');
const app = express();
const params = {}
const mongoose = require("mongoose")
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("DB CONNECTED")
    });

const contactSchema = new mongoose.Schema({
    name: String,
    telephone:String
});
const Contact = mongoose.model('contact', contactSchema);

app.post('/contact', async(req, res) => {
    const myData = new Contact(req.body);
    const result =await myData.save()
    res.send('thanks for contacting us ,we will contact you soon !')
})

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use('/static', express.static('static'))
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.status(200).render(__dirname + '/index.html', params)
})

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});