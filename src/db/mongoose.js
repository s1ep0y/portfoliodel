const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://s1ep0y:danm0l@baseclaster-viaxv.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})