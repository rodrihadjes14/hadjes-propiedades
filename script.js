document.addEventListener("DOMContentLoaded", function () {
  const radioButtons = document.querySelectorAll('input[name="operation"]');
  const propertyTypeSelect = document.querySelector('.property-type');
  const propertyCards = document.querySelectorAll(".property-card");

  function filterCards() {
    const selectedOperation = document.querySelector('input[name="operation"]:checked').value;
    const selectedType = propertyTypeSelect.value;

    propertyCards.forEach((card) => {
      const type = card.getAttribute("data-type");
      const op = card.getAttribute("data-operation");

      const matchesType = selectedType === "" || type === selectedType;
      const matchesOp = op === selectedOperation;

      card.style.display = matchesType && matchesOp ? "grid" : "none";
    });
  }

  radioButtons.forEach((radio) => {
    radio.addEventListener("change", filterCards);
  });

  propertyTypeSelect.addEventListener("change", filterCards);
});
