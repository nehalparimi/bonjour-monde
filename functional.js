let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Convert to URL-friendly strings:
function urlConverter() {
    return array.map(el => {
        urlify(el);
    })
}
function urlify(string) {
    return string.toLowerCase().split('/\s+/').join('-');
}
