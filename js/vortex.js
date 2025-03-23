const verseContainer = document.getElementById('vortex-container');
const verseDisplay = document.getElementById('verse-display');

let verses = [];
let index = 0;

// Load verses from JSON file
fetch('verses/bible-verses.json')
  .then(response => response.json())
  .then(data => {
    verses = data;
    verseDisplay.textContent = verses[index];
    setInterval(() => {
      verseDisplay.classList.remove('active');
      setTimeout(() => {
        index = (index + 1) % verses.length;
        verseDisplay.textContent = verses[index];
        verseDisplay.classList.add('active');
      }, 1000);
    }, 5000);
  })
  .catch(error => {
    console.error('Error loading verses:', error);
    verseDisplay.textContent = "Scripture not found.";
  });
