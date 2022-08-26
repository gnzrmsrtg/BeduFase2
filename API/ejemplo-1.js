
// fetch('https://epic.gsfc.nasa.gov/api/natural')
// .then(response => response.json())
// .then(data => console.log(data))



const app = document.getElementById('app')

function getImagesFromNasa() {
    return fetch('https://epic.gsfc.nasa.gov/api/natural')
    .then(function (response) {
        return response.json();
    })
}

getImagesFromNasa()
.then(function(data){
    console.log(data)
    
    data.forEach(function(data){
        const img = document.createElement('img');
        img.src = getImageUrl(data);
        img.alt = data.caption
        
        app.appendChild(img)
    })
})

function getImageUrl(data) {
    const baseImageUrl = 'https://epic.gsfc.nasa.gov/archive/natural';
    const date = data.date
    .substr(0, 10)
    .split('-')
    
    return `${baseImageUrl}/${date[0]}/${date[1]}/${date[2]}/png/${data.image}.png`
}