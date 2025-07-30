document.addEventListener("DOMContentLoaded", function () {
  const radioButtons = document.querySelectorAll('input[name="operation"]');
  const propertyTypeSelect = document.querySelector('.property-type');
  const searchInput = document.querySelector('.search-input');
  const propertyCards = document.querySelectorAll(".property-card");

  function filterCards() {
    const selectedOperation = document.querySelector('input[name="operation"]:checked').value;
    const selectedType = propertyTypeSelect.value.toLowerCase();
    const searchText = searchInput.value.toLowerCase();

    propertyCards.forEach((card) => {
      const type = card.getAttribute("data-type");
      const op = card.getAttribute("data-operation");
      const keywords = card.getAttribute("data-search");

      const matchesType = selectedType === "" || type === selectedType;
      const matchesOp = op === selectedOperation;
      const matchesSearch = keywords.includes(searchText);

      card.style.display = matchesType && matchesOp && matchesSearch ? "grid" : "none";
    });
  }

  radioButtons.forEach((radio) => {
    radio.addEventListener("change", filterCards);
  });

  propertyTypeSelect.addEventListener("change", filterCards);
  searchInput.addEventListener("input", filterCards);
});
