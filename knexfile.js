module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres:///gtower'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
