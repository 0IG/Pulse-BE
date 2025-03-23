const db = require("../../database/databaseConfig")

const getAllEmails = async () => {
    const emails = await db.any(`SELECT * FROM emails;`)
    return emails
}