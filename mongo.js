const MongoClient = require("mongodb").MongoClient;
const util = require('util');
const fs = require('fs');

const url = util.format(
    'mongodb://%s:%s@%s/?replicaSet=%s&authSource=%s&ssl=true',
    'bm_user1',
    '64NJfNc8',
    [
        'rc1b-5xqb6qd8tfctnsi3.mdb.yandexcloud.net:27018'
    ].join(','),
    'rs01',
    'bm_db1'
);

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true,
    tlsCAFile: '/home/serv_adm/.mongodb/root.crt',
    authSource: 'bm_db1'
}


Start();//Вот тут заходим)))<<<<<<<<<<<<<--------------------------------------------------------------
function Start() {
    // const mongoClient = new MongoClient("mongodb://rs01/rc1b-5xqb6qd8tfctnsi3.mdb.yandexcloud.net:27018/", { useNewUrlParser: true, useUnifiedTopology:true });
    console.log("Я тута😋!!!");

    MongoClient.connect(url, options, function(err, conn) {        
        const dbo = conn.db("bm_db1");
        if (err) {
            console.log("Я иметь ошибочку😐!!!");
            throw err;
        }
        console.log(dbo.databaseName)
        dbo.collection('clients').find().toArray(function (err, result) {
            if (err) {
                console.log("MongoDB послал меня😑!!!");
                throw err;
            }
            console.log("MongoDB меня любит😍!!!");
            console.log(result);
        });
    });
  }
