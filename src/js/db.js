'use strict';

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

export const db = {
    post: {
        notebook(name) {
           readDB();
           
           writeDB();
        }
    }
};