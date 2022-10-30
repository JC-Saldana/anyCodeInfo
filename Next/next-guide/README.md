
Created with yarn create next-app my-app --typescript
npx serve out to run static website
yarn build to generate out folder
yarn dev to run

// Rendering methods: 

The most important thing for SEO is that page data and metadata is available on page load without JavaScript. 
In this case SSG or SSR are going to be your best options.
You might want your blog posts statically generated, your customers account dashboard client side rendered and
then perhaps you have a news feed you want to server-side render.

- Plain react app - 
    Initial load without render (blank page), then components initialized and hidration
- CSR: Client side rendering - 
    Initial load with rendered html, then component initialized and hidration
- SSR: Server side rendering - (Only if you need to render a page whose data must be fetched at request time)
    Uses getServerSideProps
    Slower than SSG and inefficent data caching
    HTML generated on each request, wont render until data is fetched
- SSG: Static site generation (Default) - (If data is available ahead of users request)
    Uses getStaticProps and getStaticPaths
    Data may become stale and hard to scale to many pages
    Build html at build-time(long build time), then reused for each request. It is fast, prerendered and optimal SEO.
    Without data (like index page without requests). It can later fetch and populate data with swr, while prerendering a loader
    With data (fetches with run build)
- ISR: Incremental static regeneration -
    SSG becomes ISR when adding revalidate prop to getStaticProps
    Build the site and server them statically while occasionally refreshing the content by triggering builds



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

// Prerender with SWR for later client fetchin. The page is still prerendered, SEO friendly,
// fast to response, but also fully powered by SWR on the client side. The data can be dynamic
// and self-updated over time

// Docs: https://swr.vercel.app/es-ES/docs/with-nextjs

 export async function getStaticProps () {
  // `getStaticProps` is executed on the server side.
  const article = await getArticleFromAPI()
  return {
    props: {
      fallback: {
        '/api/article': article
      }
    }
  }
}

function Article() {
  // `data` will always be available as it's in `fallback`.
  const { data } = useSWR('/api/article', fetcher)
  return <h1>{data.title}</h1>
}

export default function Page({ fallback }) {
  // SWR hooks inside the `SWRConfig` boundary will use those values.
  return (
    <SWRConfig value={{ fallback }}>
      <Article />
    </SWRConfig>
  )
}

