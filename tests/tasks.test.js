const request = require('supertest')
const app = require('../src/app')
const Task = require('../src/models/task')
const {userOne, userOneId, setupDb, userTwo, userTwoId, taskOne} = require('../tests/fixtures/db')

beforeEach(setupDb)

test('Create a new task', async () =>{
    const response =  await request(app)
        .post('/tasks')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
                "description":"Bike wash",
                "completed": false
        })
        .expect(201)
    const task = await Task.findById(response.body._id)
    expect(task).not.toBeNull()
    expect(response.body).toMatchObject({
        description:'Bike wash',
        completed: false
    })
})

test('get all tasks', async () =>{
   const response=  await request(app)
    .get('/tasks')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200)
    expect(response.body.length).toEqual(2)
})

test('fail if invalid user try to delete tasks', async () =>{
    const response=  await request(app)
     .delete(`/tasks/${taskOne._id}`)
     .set('Authorization', `Bearer ${userTwo.tokens[0].token}`)
     .send()
     .expect(404)
     const task = Task.findById(taskOne._id)
     expect(task).not.toBeNull()
 })