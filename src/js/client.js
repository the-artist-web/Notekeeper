'use strict';

/**
 * Import module
 */
import { NavItem } from "./components/NavItem.js";

const 

export const client = {
    notebook: {
        create(notebookData) {
            const $navItem = NavItem(notebookData.id, notebookData.name);
        }
    }
};