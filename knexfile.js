module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost:/gtower'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
