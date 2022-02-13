const input = document.getElementById("buscador");
const buttonSearch = document.getElementById("buttonSearch");

const search  = async (value) => {
    const data = await (await fetch(`https://rickandmortyapi.com/api/character/?name=${value}`)).json();
    var html = "";
    for(var i = 0; i<data.results.length; i++){
        html += "<div class='character'>"
            html += "<img class='img' src='" + data.results[i].image + "'/>"
            html += "<div class='details'>"
                html += "name: " + data.results[i].name + "<br>" 
                html += "gender: " + data.results[i].gender + "<br>" 
                html += "location: " + data.results[i].location.name + "<br>" 
                html += "species: " + data.results[i].species + "<br>" 
                html += "status: " + data.results[i].status + "<br>" 
            html += "</div>"
        html += "</div>"       
    }
    document.getElementById("characters").innerHTML = html;
}

buttonSearch.addEventListener("click", (e)=>{
    e.preventDefault();
    if(input.value){
        search(input.value);
        input.value = "";
    }
})
