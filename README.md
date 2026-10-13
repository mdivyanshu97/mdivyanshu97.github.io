# Divyanshu Mishra — research website

Static research website published by GitHub Pages from the `master` branch.

- `index.html`: profile, research highlights, and publications.
- `orena/index.html`: the shared Segment/Procedure project page for my solo
  ORena SAVE FOCUS submission.
- `orena/figures/`: reproducible SVG/PDF/PNG method and ablation figures.
- `orena/spotlight.pdf` and `orena/spotlight.pptx`: three-slide project overview.
- `orena/evidence.md`: sources and evaluation scope.

## Preview

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/` or `http://127.0.0.1:8000/orena/`.
The project page needs no build step or external JavaScript dependencies.

## Rebuild ORena figures and slides

```bash
python3 -m pip install -r orena/figures/requirements.txt
python3 orena/figures/build_figures.py
```

Figure data live in `orena/figures/results.json`. Keep local ablations separate
from challenge pre-evaluation scores when editing the figures or page.

The repository retains the AcademicPages/Minimal Mistakes template assets
under their original MIT license. The current homepage and ORena page are
standalone HTML.
