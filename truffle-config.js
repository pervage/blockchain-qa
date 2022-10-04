module.exports = {
  compilers: {
    solc: {
      version: "pragma",    // "pragma" which attempts to autodetect compiler versions
    }
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}