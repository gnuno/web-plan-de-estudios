const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  compiler:{
    styledComponents:{
      ssr: false,
    },
  }
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
});
