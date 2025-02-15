import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/bun'
import { createYoga } from 'graphql-yoga';
import { server } from './graphql';
import { useRateLimiter } from '@envelop/rate-limiter';
import { GraphQLError } from 'graphql';
import { verify } from 'hono/jwt';
import { AuthMiddleware } from './middleware/auth.middleware';
const app = new Hono()

app.use(cors());

app.get(
  '/static/*',
  serveStatic({
    root: './',
    rewriteRequestPath: (path) =>
      path.replace(/^\/static/, '/static'), 
  })
)

const yoga = createYoga({
  schema: server,
  graphqlEndpoint: '/graphql',
  landingPage: false,
  cors: true,
  plugins: [
    useRateLimiter({
      identifyFn: (context: any) => context?.user.id ?? null,
      onRateLimitError(event) {
          throw new GraphQLError(event.error)
      },
    }),
  ],
})

app.use('/graphql', AuthMiddleware, async (c) => {
  const response = await yoga.fetch(c.req.raw)
  return response
})

app.all('/graphql', async (c) => {
  const response = await yoga.fetch(c.req.raw); // Handle GraphQL query
  return response;
});

app.get('/health', (c) => c.json({ status: 'ok' }))

export default {
  port: 5000,
  fetch: app.fetch,
}
