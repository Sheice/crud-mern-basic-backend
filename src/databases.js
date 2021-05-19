const mongoose = require('mongoose');

const UrlDB = process.env.UrlDB || `mongodb://localhost/pbCrudMern`;

mongoose.connect(UrlDB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});


const conection = mongoose.connection;

conection.once('open', () => {
    console.log(`DB connected`)
})