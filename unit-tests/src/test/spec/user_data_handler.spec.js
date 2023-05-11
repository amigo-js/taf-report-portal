// import UserDataHandler from './user_data_handler.js'
// const { loadUsers } = require('./user_data_handler')
// import {} from "../../data_handlers/user_data_handler.js"
const {} = require('./users.json')
const sinon = require('sinon')
const proxyquire = require('proxyquire')
const UserDataHandler = require('../../data_handlers/user_data_handler')
const { expect, assert } = require('chai')
const userDataHandler = new UserDataHandler()
// const chai = window.chai
// const expect = chai.expect
// const userDataHandler = new UserDataHandler()

// describe('first unit test', () => {

// })

// expect(loadUsers.to.deep.equal('http://localhost:3000/users'))




const usersEmailList = userDataHandler.getUserEmailsList()
expect(usersEmailList).not.to.be.empty
