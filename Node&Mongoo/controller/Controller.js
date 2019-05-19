const express = require('express');
var addrouter = express.Router();
var Id = require('mongoose').Types.Id;

var { Employee } = require('../models/EmployeeData');


// => localhost:3000/employee/
addrouter.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
    });
});

addrouter.get('/:id', (req, res) => {
    if (!Id.isValid(req.params.id))
        return res.status(400).send('No record found : ${req.params.id}');

    Employee.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error  :' + JSON.stringify(err, undefined, 2)); }
    });

});


addrouter.post('/', (req, res) => {
    var emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error ,Not saved :' + JSON.stringify(err, undefined, 2)); }
    });
});

addrouter.put('/:id', (req, res) => {
    if (!Id.isValid(req.params.id))
        return res.status(400).send('No record found : ${req.params.id}');

    var emp = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    };
    Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});



addrouter.delete('/:id', (req, res) => {
    if (!Id.isValid(req.params.id))
        return res.status(400).send('No record  : ${req.params.id}');

    Employee.findByIdAndDelete(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = addrouter;