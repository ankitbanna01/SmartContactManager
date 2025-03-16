// // // Function to toggle dark mode
// // // function toggleDarkMode() {
// // //     // Toggle 'dark' class on <html> element
// // //     document.documentElement.classList.toggle('dark');

// // //     // Optional: Save dark mode preference to localStorage
// // //     if (document.documentElement.classList.contains('dark')) {
// // //         localStorage.setItem('dark-mode', 'enabled');
// // //     } else {
// // //         localStorage.setItem('dark-mode', 'disabled');
// // //     }
// // // }

// // // Check and apply dark mode preference from localStorage on page load
// // window.onload = () => {
// //     if (localStorage.getItem('dark-mode') === 'enabled') {
// //         document.documentElement.classList.add('dark');
// //     } else if (localStorage.getItem('dark-mode') === 'disabled') {
// //         document.documentElement.classList.remove('dark');
// //     }
// // };

// Toggle mobile menu visibility
function toggleMobileMenu() {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
}

// // // Function to toggle dark mode
// // function toggleDarkMode() {
// //     const htmlElement = document.documentElement;

// //     // Toggle 'dark' class on <html> element
// //     htmlElement.classList.toggle('dark');

// //     // Save the preference in localStorage
// //     if (htmlElement.classList.contains('dark')) {
// //         localStorage.setItem('dark-mode', 'enabled');
// //     } else {
// //         localStorage.setItem('dark-mode', 'disabled');
// //     }
// // }

// // // Check and apply dark mode preference from localStorage on page load
// // window.onload = () => {
// //     if (localStorage.getItem('dark-mode') === 'enabled') {
// //         document.documentElement.classList.add('dark');
// //     } else if (localStorage.getItem('dark-mode') === 'disabled') {
// //         document.documentElement.classList.remove('dark');
// //     }
// // };

// // function validatePassword(){
// //     document.getElementById('cmf-password')
// // }

// // document.addEventListener("DOMContentLoaded", function (e) {
// //     if (localStorage.getItem('dark-mode') === 'enabled') {
// //         document.documentElement.classList.add('dark');
// //     } else if (localStorage.getItem('dark-mode') === 'disabled') {
// //         document.documentElement.classList.remove('dark');
// //     }

// //     document.getElementById('mode-change').addEventListener('click', () => {
// //         document.documentElement.classList.toggle('dark');

// //         // Optional: Save dark mode preference to localStorage
// //         if (document.documentElement.classList.contains('dark')) {
// //             localStorage.setItem('dark-mode', 'enabled');
// //         } else {
// //             localStorage.setItem('dark-mode', 'disabled');
// //         }

// //         if (localStorage.getItem('dark-mode') === 'enabled') {
// //             document.documentElement.classList.add('dark');
// //         } else if (localStorage.getItem('dark-mode') === 'disabled') {
// //             document.documentElement.classList.remove('dark');
// //         }
// //     });
// // });


// // Function to toggle dark mode
// function toggleDarkMode() {
//     // Toggle the 'dark' class on the document element
//     document.documentElement.classList.toggle('dark:bg-gray-800');

//     // Save the user's dark mode preference to localStorage
//     if (document.documentElement.classList.contains('dark:bg-gray-800')) {
//         localStorage.setItem('dark-mode', 'enabled');
//     } else {
//         localStorage.setItem('dark-mode', 'disabled');
//     }

//     if (localStorage.getItem('dark-mode') === 'enabled') {
//         document.documentElement.classList.add('dark:bg-gray-800');
//         // Get the element by its ID
//         const passwordElement = document.getElementById('cmf-password');

//         // Add the dark:bg-gray-800 class to the element
//         passwordElement.classList.add('dark:bg-gray-800');

//     } else if (localStorage.getItem('dark-mode') === 'disabled') {
//         document.documentElement.classList.remove('dark:bg-gray-800');
//     }
// }

// // When the page is loaded, check the saved dark mode preference
// document.addEventListener("DOMContentLoaded", function () {
//     if (localStorage.getItem('dark-mode') === 'enabled') {
//         document.documentElement.classList.add('dark');
//     } else if (localStorage.getItem('dark-mode') === 'disabled') {
//         document.documentElement.classList.remove('dark');
//     }
// });
console.log("Script loaded");

// change theme work
let currentTheme = getTheme();
//initial -->

document.addEventListener("DOMContentLoaded", () => {
    changeTheme();
});

//TODO:
function changeTheme() {
    //set to web page

    changePageTheme(currentTheme, "");
    //set the listener to change theme button
    const changeThemeButton = document.querySelector("#theme_change_button");

    changeThemeButton.addEventListener("click", (event) => {
        let oldTheme = currentTheme;
        console.log("change theme button clicked");
        if (currentTheme === "dark") {
            //theme ko light
            currentTheme = "light";
        } else {
            //theme ko dark
            currentTheme = "dark";
        }
        console.log(currentTheme);
        changePageTheme(currentTheme, oldTheme);
    });
}

//set theme to localstorage
function setTheme(theme) {
    localStorage.setItem("theme", theme);
}

//get theme from localstorage
function getTheme() {
    let theme = localStorage.getItem("theme");
    return theme ? theme : "light";
}

//change current page theme
function changePageTheme(theme, oldTheme) {
    //localstorage mein update karenge
    setTheme(currentTheme);
    //remove the current theme

    if (oldTheme) {
        document.querySelector("html").classList.remove(oldTheme);
    }
    //set the current theme
    document.querySelector("html").classList.add(theme);

    // change the text of button
    document
        .querySelector("#theme_change_button")
        .querySelector("span").textContent = theme == "light" ? "Dark" : "Light";
}

//change page change theme
