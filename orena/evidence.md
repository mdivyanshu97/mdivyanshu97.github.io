# ORena project evidence and scope

Divyanshu Mishra developed this project independently, submitting under the
team name **Incision Impossible**. The public algorithm names are
**DISCOVR-SEGMENT** and **DISCOVR-PROCEDURE**.

## Training and released checkpoints

The released repositories document surgical SSG-VQA/CholecT45 warm-up, joint
FRAME/SEGMENT/PROCEDURE supervised fine-tuning, answer-token masking, and
bfloat16 LoRA merges. Segment and Procedure use distinct checkpoint lineages:

- [Segment training and method](https://github.com/mdivyanshu97/orena-focus-segment/blob/main/TRAINING.md).
- [Procedure training and method](https://github.com/mdivyanshu97/orena-focus-procedure/blob/main/TRAINING.md).
- [Segment model metadata](https://huggingface.co/Div97/orena-focus-segment-fullvis-w64/blob/ab709ec95ab4c5cc73eb97664191a8f8d76cc59a/merge_provenance.json).
- [NW2 model metadata](https://huggingface.co/Div97/orena-focus-procedure-w64-nw2/blob/4b49db331bf8e49007d19135aee48dfcf27c1bfa/nw2/merge_provenance.json).

The public release supplies inference code, weights, provenance, and training
documentation. It does not contain a complete executable training pipeline or
the original raw training manifests. A row-random monitoring split is not a
video-disjoint generalization test.

## Local ablations

These studies were also documented in the original September 2026 spotlight
slides and their fact check. They use separate question populations and must
not be combined into an overall score.

| Study | Local result | Population | Source and boundary |
| --- | --- | --- | --- |
| Segment answer-guided refinement | 50.4% → 55.0% | 1,577 single-timestamp questions | [Temporal-cascade record in Segment inference](https://github.com/mdivyanshu97/orena-focus-segment/blob/main/inference.py). Earlier Segment checkpoint; ±15-second refinement. |
| Segment question-anchored windows | 72.7% → 79.1% | 422 questions that state timestamps | [Recorded width study](https://github.com/mdivyanshu97/orena-focus-segment/blob/main/resources/question_window.py). ±30-second windows at the same 64-frame budget; a distinct subset from refinement. |
| Procedure three-pass search | 6.8% → 35.1% | 746 single-timestamp questions | [Temporal-cascade record in Procedure inference](https://github.com/mdivyanshu97/orena-focus-procedure/blob/main/inference.py). Single-checkpoint study before W64/NW2 routing. |
| Procedure post-anchor reappearance | 43/71 → 60/71 | 71 matching reappearance questions | [Candidate provenance](https://github.com/mdivyanshu97/orena-focus-procedure/blob/main/resources/candidate_provenance.json). Presence rewrite and needle-specific four-chunk coverage evaluated together. |

The figures use the rounded values reported in the spotlight. Machine-readable
values and study conditions are in [figures/results.json](figures/results.json).
All imagery in the new figures and project slides is schematic.

## Challenge pre-evaluation

The values below are recorded in the public release provenance. They are
different evaluations from the local ablations above.

| Track / score | Value | Source |
| --- | ---: | --- |
| Segment | 0.5656564984886887 | [Segment release](https://github.com/mdivyanshu97/orena-focus-segment/blob/main/provenance/release.json) |
| Procedure technical | 0.4112059081777602 | [Procedure release](https://github.com/mdivyanshu97/orena-focus-procedure/blob/main/provenance/release.json) |
| Procedure clinical | 0.5572717019874663 | [Procedure release](https://github.com/mdivyanshu97/orena-focus-procedure/blob/main/provenance/release.json) |

No final leaderboard rank or final-test score is asserted here.

## Archived spotlight versus public Segment code

The September 4 Segment spotlight build includes an additional reappearance
route and a different token cap. The published Segment source instead preserves
the full-visibility checkpoint release and its 32/128-token caps. The new project
page describes that public implementation; it does not represent the spotlight
archive as identical to the released Segment container.

The maintained repositories preserve the original source checksums separately
from their current source manifest. Weight hashes and the recorded challenge
results remain attached to the original release. Maintenance changes are
documented in each repository's `CHANGELOG.md`.
