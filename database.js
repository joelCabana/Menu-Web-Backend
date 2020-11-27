const mongoose = require('mongoose');
const URI = 'mongodb://localhost/menuWeb';
mongoose.connect(URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(db=>console.log('DB is connected'))
.catch(db=>console.error(err));