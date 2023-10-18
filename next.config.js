/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  // Add configuration to use sass for css
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
