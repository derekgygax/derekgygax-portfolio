/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  // Add configuration to use sass for css
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

// Needed to use Next Intel for internationalization
const withNextIntl = require('next-intl/plugin')(
  './i18n.ts'
);
 
module.exports = withNextIntl(nextConfig);
