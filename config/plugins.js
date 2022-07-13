// config/plugins.js

module.exports = ({env}) => ({
  //...
  console.log(env("MEILI_MASTER_KEY", "masterkey"));
    meilisearch: {
        config: {
        // Your meili host
        host: "localhost:7700",
        // Your master key or private key
        apiKey: env("MEILI_MASTER_KEY", "masterKey"),
        },
    },
});
