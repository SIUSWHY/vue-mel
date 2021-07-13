// console.log('Hello, world!');

// const express = require('express');
// const mongoose = require('mongoose');
// const morgan = require('morgan');
// const path = require('path');
// const app = express();

// app.set('port', 3000);

// app.listen(app.get('port'), () => {
//     console.log(`[OK] Server is running on localhost:${app.get('port')}`);
// });

// mongoose.connect('mongodb://localhost:27017/users', { useNewUrlParser: true })
//     .then(db => console.log('[OK] DB is connected'))
//     .catch(err => console.error(err));

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(morgan('dev'));

// // app.use(app.router);
// // routes.initialize(app);
// // app.use('/users', require('./routes/records'));

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

var cors = require('cors')



const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = require('./models/users')

async function run() {
    const app = express()
    const port = 3000

    app.use(cors())
    app.use(bodyParser())

    await mongoose.connect('mongodb://localhost:27017/mel', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const CardsSchema = new Schema({
        title: String,
        text: String,
        img: String,
        viewCount: Number,
        commentCount: Number,
        newDate: Number,
    });

    const MyModel = mongoose.model('card', CardsSchema);





    // REST
    app.get('/', (req, res) => res.send('Hello World!'))

    app.get('/cards', async (req, res) => {
        const cards = await MyModel.find();

        if (req.query.sort) {
            const key = req.query.sort;

            cards.sort((item1, item2) =>
                item1[key] > item2[key] ? -1 : 1,
            );
        }

        res.send(cards)
    });

    //register
    app.post('/register', function (req, res) {
        console.log(req);
        const username = req.body.username;
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        let errors = null;

        if (errors) {
        } else {
            let newUser = new User({
                name: name,
                email: email,
                username: username,
                password: password
            });
            bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(newUser.password, salt, function (err, hash) {
                    if (err) {
                        console.log(err);
                    }
                    newUser.password = hash;
                    newUser.save(function (err) {
                        if (err) {
                            console.log(err);
                            return;
                        } else {
                            res.send(newUser);
                            //   res.redirect('/users/login');
                        }
                    });
                });
            });
        }
    });

    app.listen(port, () => console.log(`Example app listening on port ${port}!`))



}


run();