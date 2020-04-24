const db = require('../models');

module.exports = app => {
    app.get('/api/workouts', (req, res) => {
        db.Workout.find({})
            .then(data => {
                res.json(data);
            })
    });

    app.post('/api/workouts', (req, res) => {
        db.Workout.create(req.body, (err, data) => {
            if (err) throw err;
            res.json(data);
        })
    });

    app.put("/api/workouts/:id", (req, res) => {
        const id = req.params.id;
        db.Workout.findOneAndUpdate({
                _id: id
            }, {
                $push: {
                    exercises: JSON.stringify(req.body)
                }
            }, {
                new: true
            })
            .then(data => {
                console.log(data)
                res.json(data);
            })
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .then(data => {
                console.log(data)
                res.json(data);
            })
    })

}