import fastify from 'fastify';
import connectToDatabase from './src/database';

const server = fastify({ logger: true });

server.register(connectToDatabase);

server.get('/', async (request, reply) => {
  reply.type('application/json').code(200);
  return { hello: 'world' };
});

const start = async () => {
  try {
    await server.listen({ port: 3000 });
    const address = server.server.address();
    if (address && typeof address !== 'string') {
      console.log(`Server listening at http://localhost:${address.port}`);
    } else {
      console.log(`Server listening at ${address}`);
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();