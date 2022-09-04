const fs = require('node:fs');

class NodeDB {
    constructor(databaseName) {
        this.databaseName = databaseName;
        this.create();
    }

    create() {
        try {
            // Create empty JSON database file
            fs.writeFileSync(`./${this.databaseName}.json`, '{}', { encoding: 'utf8' });
            console.log("Database created.");
        } catch (err) {
            console.log("Error: ", err);
        }
    }

    get(key) {
        try {
            const database = fs.readFileSync(`./${this.databaseName}.json`, { encoding: 'utf8' });
            if (!database) { throw new Error("Database could not be read.") };
            // Parse database string
            const parsedDatabase = JSON.parse(database.toString());
            return parsedDatabase[key.toString()];
        } catch (err) {
            console.log('Error: ', err);
        }
    }

    set(key, value) {
        console.log(`Setting ${key}`);
        try {
            const database = fs.readFileSync(`./${this.databaseName}.json`);
            if (!database) { throw new Error("Database could not be read.") };
            // Parse database string into object
            let parsedDatabase = JSON.parse(database.toString());
            // Set specified key to specified value
            const updatedDatabase = { ...parsedDatabase, [key]: value };
            // Write to JSON file
            fs.writeFileSync(`./${this.databaseName}.json`, JSON.stringify(updatedDatabase, null, 1), { encoding: 'utf8' });
        } catch (err) {
            console.log("Error: ", err)
        }
    }

    delete(key) {
        try {
            const database = fs.readFileSync(`./${this.databaseName}.json`, { encoding: 'utf8' });
            if (!database) { throw new Error("Database could not be read.") }
            // Parse string into object
            const parsedDatabase = JSON.parse(database.toString());
            // Delete specified key from DB object
            if (Object.prototype.hasOwnProperty.call(parsedDatabase, key)) { delete parsedDatabase[key]; }
            // Write to JSON file
            fs.writeFileSync(`./${this.databaseName}.json`, JSON.stringify(parsedDatabase, null, 1), { encoding: 'utf8' });
        } catch (err) {
            console.log('Error: ', err);
        }
    }
}

module.exports = NodeDB;