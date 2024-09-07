document.addEventListener("DOMContentLoaded", () => {
  const colorInputs = document.querySelectorAll('input[type="color"]');
  const gradientTypeSelect = document.getElementById("type");
  const gradientDirectionSelect = document.getElementById("direction");
  const cssTextArea = document.getElementById("css");
  const copiedSpan = document.getElementById("copied");
  const copyButton = document.getElementById("copy-css");

  const defaultGradient =
    "linear-gradient(to right, #3494e6 0.5%, #ec6ead 99%)";

  function getGradientDirection(direction) {
    const directions = {
      top: "to top",
      bottom: "to bottom",
      left: "to left",
      right: "to right",
      center: "circle at center",
    };
    return directions[direction] || "to right";
  }

  function updateGradient() {
    const color1 = colorInputs[0].value || "#3494e6";
    const color2 = colorInputs[1]?.value || "#ec6ead";
    const type = gradientTypeSelect.value;
    const direction = getGradientDirection(gradientDirectionSelect.value);

    const gradient =
      type === "linear"
        ? `linear-gradient(${direction}, ${color1}, ${color2})`
        : `radial-gradient(${direction}, ${color1}, ${color2})`;

    document.body.style.background = gradient;
    cssTextArea.value = `background: ${gradient};`;
  }

  function copyCSS() {
    cssTextArea.select();
    copiedSpan.style.display = "inline";
  }

  colorInputs.forEach((input) =>
    input.addEventListener("input", updateGradient)
  );
  gradientTypeSelect.addEventListener("change", updateGradient);
  gradientDirectionSelect.addEventListener("change", updateGradient);
  copyButton.addEventListener("click", copyCSS);

  // Initialize with default gradient
  updateGradient();
});
