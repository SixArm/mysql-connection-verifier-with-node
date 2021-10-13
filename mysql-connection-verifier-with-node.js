#!/usr/bin/env node

///
// MySQL connection verifier with Node
//
// Syntax:
//
//     ./mysql-connection-verifier-with-node.js
//
// This script connects to a running MySQL server,
// in order to prove that the server is accessible.
//
// This script reads settings from environment variables.
//
// Example to set the environment variables:
//
// ```sh
// export DATABASE_HOST=localhost
// export DATABASE_PORT=3306
// export DATABASE_NAME=mydatabase
// export DATABASE_USER=myuser
// export DATABASE_PASSWORD=mypassword
// ```
//
// ## Tracking
//
//   * Program: mysql-connection-verifier-with-node
//   * Version: 1.0.0
//   * Created: 2021-10-13T02:31:08Z
//   * Updated: 2021-10-13T02:31:08Z
//   * Contact: Joel Parker Henderson (joel@joelparkerhenderson.com)
//   * License: GPL
///

let mysql = require('mysql')

let settings = {
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    name: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    ssl: process.env.DATABASE_SSL,
    insecureAuth: Boolean(process.env.DATABASE_INSECURE_AUTH),
}

console.info(settings)

let connection = mysql.createConnection(settings)

connection.connect(function(err) {
    if (err) throw err
    console.log("Connected!")
})

