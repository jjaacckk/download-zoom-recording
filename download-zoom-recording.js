var url = window.location.href;
// var pat = "(?:https?:\\/\\/)?(?:.+?\\.)?zoom\\.(?:com|us)\\/rec\\/play\\/(?:[A-Za-z0-9\\-\\._~:\\/\\?#\\[\\]@!$&'\\(\\)\\*\\+,;\\=]*)";
var pat = "[-a-zA-Z0-9@:%._\\+~#=\\/]*zoom\\.(?:com|us)\\/rec\\/play\\/(?:[A-Za-z0-9\\-\\._~:\\/\\?#\\[\\]@!$&'\\(\\)\\*\\+,;\\=]*)";
var result = url.match(pat);

if (result){
    var node = document.querySelector("header"),
        div = document.createElement("div");
        
    div.innerHTML = "<br><a style='margin-left:30px;' href='" + window.__data__.viewMp4Url + "' download>Download Recording</a>";
    node.parentNode.insertBefore(div, node.nextSibling);
}
