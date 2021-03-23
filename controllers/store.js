const Store = require('../models/store.js');


module.exports = {
    list_all: async (req, res) => {
        let stores = await Store.find();
        res.send(stores);
    },
    get: async (req, res) => {
        try {

            let store = await Store.find({
                name: req.params.name
            });
            res.send(store);

        } catch (err) {
            console.log('err' + err);
            res.send(err);
        }

    },
    create: async (req, res) => {

        let new_sotre = new Store(req.body);
        try {
            let store = await Store.findOne({
                name: req.body.name
            });
            if (!store) {
                let save_store = await new_sotre.save();
                res.send(save_store);
            }
            else{
                res.send('ex');
            }
        } catch (err) {
            console.log('err' + err);
            res.send(err);
        }

    },
    update: async (req, res) => {
        try {

            let store = await Store.updateOne({
                name: req.params.name
            }, req.body);
            res.send(store);

        } catch (err) {
            console.log('err' + err);
            res.send(err);
        }
    },
    remove: async (req, res) => {
        try {

            let store = await Store.findOneAndDelete({
                name: req.params.name
            });
            res.send(store);

        } catch (err) {
            console.log('err' + err);
            res.send(err);
        }
    }
}


