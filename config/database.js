modulee.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        "host": `${process.env.DATABASE_HOST || '127.0.0.1'}`,
        "host": `${process.env.DATABASE_PORT || '27817'}`,
        "host": `${process.env.DATABASE_NAME || 'STRAPI'}`,
        "host": `${process.env.DATABASE_USERNAME || ''}`,
        "host": `${process.env.DATABASE_PASSWORD || ''}`,
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});

