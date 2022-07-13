// config/plugins.js

module.exports = ({env}) => ({
  //..
    meilisearch: {
        config: {
        // Your meili host
        host: "http://strapi:7700",
        // Your master key or private key
        apiKey: env("MEILI_MASTER_KEY", "masterKey"),
        },
    },
});
