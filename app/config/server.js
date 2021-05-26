module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'ac73db4980631706080acb2b4212e7ca'),
      providers: [], // The providers' configuration lives there
    },
  },
});
