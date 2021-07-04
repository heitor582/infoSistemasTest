module.exports = {
  type: 'postgres',
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: parseInt(process.env.POSTGRES_PORT || '', 10) || 5432,
  host: 'localhost',
  autoLoadEntities: true,
  migrations: ['dist/shared/migrations/*.js'],
  entities: ['dist/modules/**/entities/*.js'],
  cli: {
    migrationsDir: 'src/shared/migrations',
    entitiesDir: 'src/modules/**/entities',
  },
};
