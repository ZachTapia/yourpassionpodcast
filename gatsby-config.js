module.exports = {
  siteMetadata: {
    title: `Your Passion Podcast`,
    description: `Your Passion Podcast`,
    author: `@zachtapia`,
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
  ],
}
