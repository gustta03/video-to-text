export default {
  port: process.env.PORT || 5000,
  jwtSecret: process.env.JWTSECRET || 'secret',
  mongoUrl: process.env.MONGO_URI || 'mongodb://localhost:27017/default_database_name',
  openIAKey: process.env.OPEN_IA_API_KEY
}
