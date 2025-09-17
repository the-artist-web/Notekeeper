'use strict';

/**
 * Import module
 */
import { generateID } from "./utils.js";

// DB Object
let notekeeperDB = {};

const initDB = function () {
    const db = localStorage.getItem("notekeeperDB");

    if (db) {
        notekeeperDB = JSON.parse(db);
    } else {
        notekeeperDB.notebooks = [];
        localStorage.setItem("notekeeperDB", JSON.stringify(notekeeperDB));
    }
};

initDB();

/**
 * Read and loads the localStorage data in to the global variable `notekeeperDB`
 */
const readDB = function () {
    notekeeperDB = JSON.parse(localStorage.getItem("notekeeperDB"));
};

/**
 * Writes the current state of the global variable `notekeeperDB` to local storage
 */
const writeDB = function () {
    localStorage.setItem("notekeeperDB", JSON.stringify(notekeeperDB));
}

export const db = {
    post: {
        notebook(name) {
            readDB();
           
            const notebookData = {
                id: generateID(),
                name,
                notes: []
            };

            notekeeperDB.notebooks.push(notebookData);

            writeDB();

            return notebookData;
        }
    }
};