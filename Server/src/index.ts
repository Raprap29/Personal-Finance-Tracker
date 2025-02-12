import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/bun'
import { createYoga } from 'graphql-yoga';
import { server } from './graphql';
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

})

app.use('/graphql', async (c) => {
  const response = await yoga.fetch(c.req.raw)
  return response
})

app.get('/health', (c) => c.json({ status: 'ok' }))

export default {
  port: 5000,
  fetch: app.fetch,
}
