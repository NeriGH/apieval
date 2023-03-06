const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: "localhost",
    user: "root",
    database: "social_network",
  },
  listPerPage: 10,
};
module.exports = config;
