function searchAPK() {
    let query = document.getElementById("search-box").value;
    if (query) {
        window.open(`https://apkpure.com/search?q=${query}`, "_blank");
    } else {
        alert("Enter an APK name to search!");
    }
}