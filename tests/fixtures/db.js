const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../../src/models/user')
const Task = require('../../src/models/task')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: 'Jag',
    email: 'abc@example.com',
    password: 'hkahdskhdkGJG676',
    tokens: [{
        token: jwt.sign({ _id: userOneId }, 'thisismynewcourse')
    }]
}
const userTwoId = new mongoose.Types.ObjectId()
const userTwo = {
    _id: userTwoId,
    name: 'Ankit',
    email: 'abcone@example.com',
    password: 'hkahdskhdkGJG676',
    tokens: [{
        token: jwt.sign({ _id: userTwoId }, 'thisismynewcourse')
    }]
}
 const taskOne = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Grocery',
    completed: false,
    owner: userOneId
 }
 const taskTwo = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Car wash',
    completed: false,
    owner: userOneId
 }
 const taskThree = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Bike wash',
    completed: false,
    owner: userTwoId
 }
 const taskFourth = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Clean house',
    completed: true,
    owner: userTwoId
 }
const setupDb = async () =>{
    await User.deleteMany()
    await Task.deleteMany()
    await new User(userOne).save()
    await new User(userTwo).save()
    await new Task(taskOne).save()
    await new Task(taskTwo).save()
    await new Task(taskThree).save()
    await new Task(taskFourth).save()
}
module.exports = {
    userOneId,
    setupDb,
    userOne,
    userTwo,
    userTwoId,
    taskOne,
    taskTwo,
    taskThree,
    taskFourth
}