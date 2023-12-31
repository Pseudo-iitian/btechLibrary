document.getElementById('branchSelect').addEventListener('change', function() {
  var selectedBranch = this.value;
  var targetElement = document.getElementById(selectedBranch);

  if (targetElement) {
    // Subtracting 50 pixels from the top position to stop above the cards
    var scrollPosition = targetElement.offsetTop - 100;
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    // Deselect the option in the dropdown
    this.value = '';

    // Remove focus from the dropdown
    this.blur();
  }
});
