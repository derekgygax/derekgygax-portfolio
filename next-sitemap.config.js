
const SITE_URL = process.env.THIS_WEBSITE || 'https://www.derekgygax.com';

module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/_next' },
      { userAgent: '*', disallow: '/db' },
      { userAgent: '*', disallow: '/lib' },
      { userAgent: '*', disallow: '/messages' },
      { userAgent: '*', disallow: '/models' },
      { userAgent: '*', disallow: '/node_modules' },
      { userAgent: '*', disallow: '/prisma' },
      { userAgent: '*', disallow: '/types' },
      { userAgent: '*', disallow: '/api' },
    ]
  },
  transform: async (config, path) => {
    // Assuming the paths are like '/en/some-page' or '/es/alguna-pagina'
    const lang = path.split('/')[1]; // Extract 'en' or 'es' from the path
    const alternateLang = lang === 'en' ? 'es' : 'en'; // Determine the alternate language
    const alternateUrl = `${SITE_URL}/${alternateLang}${path.substring(3)}`; // Construct the URL for the alternate language

    return {
      loc: `${SITE_URL}${path}`,
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
      links: [
        { lang: lang, url: `${SITE_URL}${path}` },
        { lang: alternateLang, url: alternateUrl }
      ]
    };
  },
};

