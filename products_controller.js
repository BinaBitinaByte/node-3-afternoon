module.exports = {
    create: (req, res, next) => {
        const { name, description, price, image_url } = req.body
        let dbInstance = req.app.get('db'); 
        dbInstance.create_product([ name, description, price, image_url])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).json({error: "S** happens! Come back when things are working"})
            console.log(err)
        })
    },

    getOne: (req, res, next) => {
        let dbInstance = req.app.get('db');
        const { id } = req.params;

        dbInstance.read_product(id)
            .then( product => res.status(200).json(product))
        .catch( err => {
            res.status(500).json({error: "S** happens! Come back when things are working"})
            console.log(err)
        })
    },

    getAll: (req, res, next) => {
        let dbInstance = req.app.get('db');
        dbInstance.read_products()
            .then( products => res.status(200).json (products))
        .catch( err => {
            res.status(500).json({error: "S** happens! Come back when things are working"})
            console.log(err)
        })
    },

    update: (req, res, next) => {
        let dbInstance = req.app.get('db');
        const { params, query } = req;

        dbInstance.update_product([params.id, query.desc])
            .then(() => res.status(200).json)
        .catch( err => {
            res.status(500).json({error: "S** happens! Come back when things are working"})
            console.log(err)
        })
    },
    delete: (req, res, next) => {
        let dbInstance = req.app.get('db'); // using massive to access backendx
        const { id } = req.params;

        dbInstance.delete_product(id)
            .then(() => res.status(200).json)
        .catch( err => {
            res.status(500).json({error: "S** happens! Come back when things are working"})
            console.log(err)
        })
    }
}

