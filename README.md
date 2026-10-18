# Saddle Watts Configurator

A single-page bike-fit tool. Enter your body measurements and bike details, and it gives an evidence-graded starting saddle setup, a 3D view of your position, and the watts a better aero position is worth at your race speed.

Open `index.html` in a browser, or enable GitHub Pages on this repo to host it.

## How it works

A short welcome pop-up asks who you are (cyclist, physician, physio, other) and how long you've been in the cycling industry. Answers are saved only in the visitor's browser. Then three steps, one block per action:

1. **You**: take or upload a standing photo to measure your inseam, or type height, inseam, weight, flexibility, knee history and FTP.
2. **Bike**: take or upload a side photo of the bike to measure its current saddle height and seat angle, or type the bike details.
3. **Goal**: peak power, balanced or economy, plus race speed and CdA.

★ **Your fit**: the results page.

A floating bar at the bottom holds Back / Next and shows the live saddle height.

## Features

- **Saddle setup sheet**: saddle height, knee bend target (25–35° at the bottom of the stroke), crank length, effective seat angle, setback and torso angle for your speed. Each line is labelled with the strength of its evidence.
- **3D rider and bike model** (three.js), rotatable, rebuilt live from your numbers. A 2D angles view is also included.
- **Aero watts calculator**: watts saved and 40 km time saved for a given CdA reduction.
- **Measure from a photo**:
  - *Standing (step 1)*: tap head, book top and floor to estimate inseam from your height.
  - *Bike side view (step 2)*: tap the rear tyre's ground contact and top, the bottom bracket and the saddle top. The rear wheel diameter (default 670 mm, adjustable) sets the scale.
  - *Knee check (results page)*: tap hip, knee and ankle (and optionally shoulder) on a photo of you on the bike to check knee bend and torso angle, with a suggested saddle adjustment in mm.
  - Photos are processed in the browser and never uploaded.
- **Design**: off-white and ink with an electric lime accent, Bricolage Grotesque headings, Figtree body text. Light and dark mode.

## Evidence base

- Husband et al. (2024), *Cycling position optimisation – a systematic review*, Journal of Sports Sciences. https://doi.org/10.1080/02640414.2024.2394752
- Fintelman et al. (2014), *Optimal cycling time trial position models*, Journal of Biomechanics. https://doi.org/10.1016/j.jbiomech.2014.02.029
- Fintelman et al. (2015), *The effect of time trial cycling position on physiological and aerodynamic variables*, Journal of Sports Sciences. https://doi.org/10.1080/02640414.2015.1009936
- Faulkner et al. (2024), *Individual aerodynamic and physiological data are critical to optimise cycling time trial performance*, Sports Engineering. https://doi.org/10.1007/s12283-023-00446-0
- Bini et al. (2010), *Effects of saddle height, pedaling cadence, and workload on joint kinetics and kinematics during cycling*, J Sport Rehabil. https://pubmed.ncbi.nlm.nih.gov/20811079/
- Martin & Spirduso (2001), *Determinants of maximal cycling power: crank length, pedaling rate and pedal speed*, Eur J Appl Physiol. https://doi.org/10.1007/s004210100400

## Limitations

The results are research-informed starting points, not a professional bike fit. The saddle-height formula (0.883 × inseam), the mm-per-degree conversion and the torso-angle bands between 30 and 46 km/h are approximations. Verify your knee angle on video and test speed at equal power. Photo measurements can be off by a centimetre or more; the bike-photo measurement depends on the wheel diameter you enter and on the photo being square to the bike.

## Collecting the welcome answers

The pop-up answers (role and years in the cycling industry) can be sent to a Google Sheet. The answers are anonymous: no name or email is collected.

1. Open the Google Sheet "Saddle Watts – Welcome answers", then go to Extensions → Apps Script.
2. Paste in `google-sheet/Code.gs` and click Save.
3. Choose Deploy → New deployment → Web app. Set "Execute as" to **Me** and "Who has access" to **Anyone**, then click Deploy.
4. Copy the web-app URL (it ends in `/exec`) into `SHEET_ENDPOINT` near the bottom of `index.html`.

While `SHEET_ENDPOINT` is empty, answers stay only in each visitor's browser.
