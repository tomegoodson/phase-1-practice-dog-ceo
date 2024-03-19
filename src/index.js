console.log('%c HI', 'color: firebrick')

const breedUrl = "https://dog.ceo/api/breeds/list/all";

fetch(breedUrl)
  .then(response => response.json())
  .then(data => {
    const breeds = data.message;
    const breedsList = document.getElementById('dog-breeds');

    for (const breed in breeds) {
      const li = document.createElement('li');
      li.textContent = breed;
      breedsList.appendChild(li);

      li.addEventListener('click', () => {
        li.style.color = 'firebrick';
      });
    }
  });
  document.getElementById('breed-dropdown').addEventListener('change', event => {
    const letter = event.target.value;
    const breedsList = document.getElementById('dog-breeds');
    const allBreeds = breedsList.querySelectorAll('li');
  
    allBreeds.forEach(breed => {
      breed.style.display = breed.textContent.startsWith(letter) ? '' : 'none';
    });
  });