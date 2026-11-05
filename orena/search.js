/* Illustrative search over a 60-minute video; no patient imagery or model calls. */
(() => {
  const svgNS = "http://www.w3.org/2000/svg";
  const controls = document.querySelectorAll("[data-stage]");
  const group = document.getElementById("sampled-frames");
  const windowBox = document.getElementById("search-window");
  const leftLabel = document.getElementById("window-start");
  const rightLabel = document.getElementById("window-end");
  const explanation = document.getElementById("search-explanation");
  const stages = [
    {
      start: 0, end: 3600, frames: 128, model: "W64",
      text: "W64 first scans the whole procedure. Broad coverage gives an initial event pointer, but consecutive observations are still about 28 seconds apart in this one-hour example."
    },
    {
      start: 1320, end: 2520, frames: 128, model: "NW2",
      text: "NW2 looks inside a 20-minute window around the first prediction. The same 128 frames now give roughly three times the local sampling density."
    },
    {
      start: 1930, end: 2030, frames: 64, model: "NW2",
      text: "The final NW2 pass narrows to 100 seconds. With 64 frames, consecutive observations are about 1.6 seconds apart. The absolute video clock stays consistent across all three passes."
    }
  ];
  function clock(seconds) {
    return [Math.floor(seconds / 3600), Math.floor(seconds / 60) % 60, seconds % 60]
      .map(value => String(value).padStart(2, "0")).join(":");
  }
  function select(index) {
    const stage = stages[index];
    controls.forEach((button, i) => button.setAttribute("aria-pressed", String(i === index)));
    group.replaceChildren();
    const span = stage.end - stage.start;
    for (let i = 0; i < stage.frames; i++) {
      const rect = document.createElementNS(svgNS, "rect");
      rect.setAttribute("x", String(24 + i * 952 / (stage.frames - 1)));
      rect.setAttribute("y", "96");
      rect.setAttribute("width", String(index === 2 ? 5 : 3));
      rect.setAttribute("height", "35");
      rect.setAttribute("rx", "1");
      rect.setAttribute("fill", index === 2 ? "#b8512e" : "#235b76");
      rect.setAttribute("opacity", ".75");
      group.appendChild(rect);
    }
    const globalX = 24 + stage.start / 3600 * 952;
    windowBox.setAttribute("x", String(globalX));
    windowBox.setAttribute("width", String(Math.max(4, span / 3600 * 952)));
    leftLabel.textContent = clock(stage.start);
    rightLabel.textContent = clock(stage.end);
    document.getElementById("frame-count").textContent = String(stage.frames);
    document.getElementById("frame-gap").textContent = `${(span / (stage.frames - 1)).toFixed(1)} s`;
    document.getElementById("model-name").textContent = stage.model;
    explanation.textContent = stage.text;
  }
  controls.forEach(button => button.addEventListener("click", () => select(Number(button.dataset.stage))));
  select(0);
})();
