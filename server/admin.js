const AdminBro = require('admin-bro');
const AdminBroExpress = require('admin-bro-expressjs');
const AdminBroMongoose = require('admin-bro-mongoose');

const User = require('./models/User');
const Contact = require('./models/Contact');

AdminBro.registerAdapter(AdminBroMongoose);


const AdminBroOptions = {
    resources: [User,Contact]
  }
  const panel = new AdminBro(AdminBroOptions)
 

module.exports = adminRouter = AdminBroExpress.buildRouter(panel);