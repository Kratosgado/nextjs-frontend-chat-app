// @ts-check

/** @type {import('next').NextConfig} */

const nextConfig = {
   typescript: {
      tsconfigPath: 'tsconfig.json',
   },
   experimental: {
      typedRoutes: true,
   },
   env: {
      chatBackendUrl: "http://localhost:4000",
      chatUserToken: ""
   },
}

module.exports = nextConfig
