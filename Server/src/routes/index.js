const routerToDo = require('./todo/todo')
const routerUser = require('./users/user')
const router = require('express').Router();
const express = require('express');
const cors = require('cors');
module.exports = routerConfig = () => {

  router
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(cors())    
  
  router.use('/todos', routerToDo());
  router.use('/', routerUser())

  return router;
};
