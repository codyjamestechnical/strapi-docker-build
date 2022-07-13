// config/plugins.js

module.exports = ({env}) => ({
  //..
    meilisearch: {
        config: {
        // Your meili host
        host: "139.144.16.74:7700",
        // Your master key or private key
        apiKey: env("MEILI_MASTER_KEY", "masterKey"),
        },
    },
});
