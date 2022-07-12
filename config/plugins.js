// config/plugins.js

module.exports = () => ({
  //...
    meilisearch: {
        config: {
        // Your meili host
        host: "http://127.0.0.1:7700",
        // Your master key or private key
        apiKey: process.env.MEILI_MASTER_KEY || "masterKey",
        },
    },
});
