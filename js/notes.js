const cards = document.querySelectorAll('.cards');
cards.forEach((card)=>{
  const imgElement = card.querySelector('.image img');
  const quantum = card.querySelector('.notes');
  quantum.textContent = 'Notes';
  imgElement.src = `../images/notes.jpg`;
});

