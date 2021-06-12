module.exports = {
  siteMetadata: {
    title: `th1nkful's place`,
    name: `Joshua Punshon`,
    siteUrl: `https://novela.narative.co`,
    description: `a simple place to put my collection of thoughts`,
    hero: {
      heading: `a simple place to put my collection of thoughts`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/th1nkful`,
      },
      {
        name: `github`,
        url: `https://github.com/th1nkful`,
      },
      {
        name: `linkedin`,
        url: `https://linkedin.com/in/punshonjm/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
