'use strict';

/**
 * Module import
 */
import { addEventOnElements, getGreetingMsg } from "./utils.js";

/**
 * Toggle sidebar in small screen
 */
const $sidebar = document.querySelector("[data-sidebar]");
const $sidebarTogglers = document.querySelectorAll("[data-sidebar-toggler]");
const $overlay = document.querySelector("[data-sidebar-overlay]");

addEventOnElements($sidebarTogglers, "click", () => {
    $sidebar.classList.toggle("active");
    $overlay.classList.toggle("active");
});

/**
 * Show greeting message on homepage
 */
const $greetElem = document.querySelector("[data-greeting]");
const currentHour = new Date().getHours();

$greetElem.textContent = getGreetingMsg(currentHour);

/**
 * Show current date on homepage
 */
const $currentDateElem = document.querySelector("[data-current-date]");

$currentDateElem.textContent = new Date().toDateString().replace(", ", ", ");