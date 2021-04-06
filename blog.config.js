const BLOG = {
  title: 'meatflavour.dev',
  author: 'Jeremy Dombrowski',
  email: 'jeremy@meatflavour.dev',
  link: 'https://meatflavour.dev',
  description: 'Hey There! 👋 I\'m Jeremy Dombrowski, a meat-flavoured fullstack designer and developer based in Vancouver, BC',
  lang: 'en-CA',
  appearance: 'auto', // ['light', 'dark', 'auto'],
  lightBackground: '#ffffff', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#111827', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  since: 2021, // if leave this empty, current year will be used.
  postsPerPage: 10,
  showAbout: true, // WIP
  showArchive: true, // WIP
  socialLink: 'https://twitter.com/meatflavourdev',
  seo: {
    keywords: ['Blog', 'Website', 'Portfolio', 'Resume', 'Full Stack', 'Designer', 'Developer', 'Web Development'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
  analytics: {
    provider: 'ga', // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.craigary.net/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.craigary.net , don't end with a slash
      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: 'G-B9TDCF4B9x' // e.g: G-XXXXXXXXXX
    }
  },
  comment: {
    // support provider: gitalk
    provider: 'gitalk', // leave it empty if you don't need any comment plugin
    gitalkConfig: {
      repo: 'meatflavourdev/nobelium-gitalk', // The repository of store comments
      owner: 'meatflavourdev',
      admin: ['meatflavourdev'],
      clientID: '2b3935e9290e025e436e',
      clientSecret: 'd3e451cad8c4adae6f9463807d4ff9ad210844d8',
      distractionFreeMode: false
    }
  }
}
// export default BLOG
module.exports = BLOG
