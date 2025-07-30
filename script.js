document.addEventListener("DOMContentLoaded", function () {
  const radioButtons = document.querySelectorAll('input[name="operation"]');
  const propertyCards = document.querySelectorAll(".property-card");

  radioButtons.forEach((radio) => {
    radio.addEventListener("change", function () {
      const selected = this.value;

      propertyCards.forEach((card) => {
        const type = card.getAttribute("data-operation");
        card.style.display = type === selected ? "grid" : "none";
      });
    });
  });
});

