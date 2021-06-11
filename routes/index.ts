const projectRoutes = require("./projectRoutes");
const commentRoutes = require("./commentRoutes");

const routes = [...projectRoutes, ...commentRoutes];

module.exports = routes;
