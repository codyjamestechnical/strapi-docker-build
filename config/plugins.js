// config/plugins.js

module.exports = ({env}) => ({
  //..
    meilisearch: {
        config: {
        // Your meili host
        host: "http://localhost/",
        // Your master key or private key
        apiKey: env("MEILI_MASTER_KEY", "masterKey"),
        },
    },
});
