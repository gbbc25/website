function openWebsite(website) {
    if (website) {
        window.open(website, "_blank"); // Opens in a new tab
    } else {
        console.error("No website URL provided!");
    }
}