function wikiAPI(){

    var searchTerm = document.getElementById("searchTerm").value; 
    var connect = new XMLHttpRequest(); 
    var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=20&gsrsearch=" + searchTerm;

    connect.open('GET', url); 

    connect.onload = function () {
        var wikiObject = JSON.parse(this.response); 
        var pages = wikiObject.query.pages;
        for (var i in pages) { 
/*             var newDiv = document.createElement("div");
            newDiv.setAttribute('class','row h5');
            document.getElementById("wiki").appendChild(newDiv); 
            newDiv.innerText = pages[i].title; */

            var pageURL = "https://en.wikipedia.org/?curid="
            var newAnchor = document.createElement("a");
            newAnchor.href = pageURL+pages[i].pageid; 
            newAnchor.className = 'd-block'; 
            newAnchor.innerText = pages[i].title; 
            document.getElementById("wiki").appendChild(newAnchor);
        };
    }
    connect.send(); 
}
