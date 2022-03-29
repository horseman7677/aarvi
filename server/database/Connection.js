const mongoose = require('mongoose')

dblink = process.env.DATABASE

mongoose.connect(dblink).then(() => {
    console.log('connected to mongodb🆗');
}).catch((console.error()))