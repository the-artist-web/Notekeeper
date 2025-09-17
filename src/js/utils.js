'use strict';

const addEventOnElements = ($elements, eventType, callback) => {
    $elements.forEach($element => $element.addEventListener(eventType, callback));
}

const getGreetingMsg = (currentHour) => {
    const greeting = 
        currentHour < 5 ? "Night" : 
            currentHour < 12 ? "Morning" :
                currentHour < 15 ? "Noon" : 
                    currentHour < 17 ? "Afternoon" : 
                        currentHour < 20 ? "Evening" : 
                            "Night";
    
    return `Good ${greeting}`;
}

/**
 * Active nav item
 */
let $lastActiveNavItem;
const activeNotebook = function () {
    $lastActiveNavItem?.classList.remove("active");
    this.classList.add("active");
    $lastActiveNavItem = this;
}

const makeElemEditable = function ($element) {
    $element.setAttribute("contenteditable", true);
    $element.focus();
};

export {
    addEventOnElements,
    getGreetingMsg,
    activeNotebook,
    makeElemEditable
}