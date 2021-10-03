module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `texts`,
              path: `${__dirname}/src/texts`,
            },
        },
        `gatsby-transformer-xml`
    ],
}