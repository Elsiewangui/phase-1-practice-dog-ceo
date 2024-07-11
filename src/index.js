console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    
fetch(imgUrl)
.then(response => response.json())
.then(data => {
    const imageContainer = document.getElementById('dog-image-container');
    data.message.forEach(imageUrl => {
        const imgElement = document.createElement('img');
            imgElement.src = imageUrl;
            imgElement.alt = 'Random Dog';
            imageContainer.appendChild(imgElement);
        });
})
.catch(error => {
    console.error('Error fetching images:', error);
});


fetch(breedUrl)
.then(response => response.json())
.then(data => {
    const breedList = document.getElementById('dog-breeds');
    const breedDropdown = document.getElementById('breed-dropdown');
    const breeds = Object.keys(data.message);
    breeds.forEach(breed => {
        const liElement = document.createElement('li');
        liElement.textContent = breed;
        breedList.appendChild(liElement);
    });



breedDropdown.addEventListener('change', () => {
    const selectedLetter = breedDropdown.value;
    breedList.innerHTML = ''; // Clear the list
    breeds.forEach(breed => {
        if (breed.startsWith(selectedLetter)) {
        const liElement = document.createElement('li');
        liElement.textContent = breed;
        breedList.appendChild(liElement);
}
 });
});
})
.catch(error => {
    console.error('Error fetching breeds:', error);
    });
})
