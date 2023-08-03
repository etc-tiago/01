/** @type {import('next').NextConfig} */

module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: 'https://destination-test-demo.vercel.app/agenda',
          permanent: true,
        },
        {
          source: '/:slug*',
          destination: 'https://destination-test-demo.vercel.app/:slug*',
          permanent: true,
        },
      ];
    },
  };
  