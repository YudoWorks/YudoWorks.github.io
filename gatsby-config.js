module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://yudoworks.github.io/`,
    // Your Name
    name: 'Yudo Kartiko',
    // Main Site Title
    title: `Yudo Kartiko | Back-End Developer`,
    // Description that goes under your name in main bio
    description: `Back-End Developer Intern in SUGEE KANSAI`,
    // Optional: Twitter account handle
    author: `@yudokartikow`,
    // Optional: Github account URL
    github: `https://github.com/YudoWorks`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/yudo-kartiko/`,
    // Content of the About Me section
    about: `Fresh Graduates from CS BINUS 2021`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Geometry',
        description:
          'java vanila project that developed with unit test',
        link: 'https://github.com/YudoWorks/Geometry',
      }
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Bank BTPN',
        description: 'Monitoring Engineer Intern, September 2020 - February 2021',
        link: 'https://www.btpn.com/',
      },
      {
        name: 'Bank BTPN',
        description: 'Full-Stack Developer Intern,  February 2020 - September 2020',
        link: 'https://www.btpn.com/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Java, JavaScript, Ruby, Node.js, Express.js, React, Ruby on Rails',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Grafana, Kibana, REST API, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
