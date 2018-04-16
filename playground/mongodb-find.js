//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find().count().then((count) => { //find() inside specify the criteria to find
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // })

    // db.collection('Todos').find({
    //     _id: new ObjectID('5ad491f567999d09786e255f') //since _id is the ObjectID
    // }).toArray().then((docs) => { //find() inside specify the criteria to find
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined,2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // })

    db.collection('Users').find({
        name: 'ckc'
    }).toArray().then((docs) => { //find() inside specify the criteria to find
        console.log('Users');
        console.log(JSON.stringify(docs, undefined,2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    })

    //client.close();
});
