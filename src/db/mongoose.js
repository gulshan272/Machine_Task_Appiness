const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/machine_task-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})