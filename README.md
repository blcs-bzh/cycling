# Saddle Watts Configurator

A single-page bike-fit tool. Enter your body measurements and bike details, and it gives an evidence-graded starting saddle setup, a 3D view of your position, and the watts a better aero position is worth at your race speed.

Open `index.html` in a browser, or enable GitHub Pages on this repo to host it.

## Features

- **Saddle setup sheet**: saddle height, knee bend target (25–35° at the bottom of the stroke), crank length, effective seat angle, setback and torso angle for your speed. Each line is labelled with the strength of its evidence.
- **3D rider and bike model** (three.js), rotatable, rebuilt live from your numbers. A 2D angles view is also included.
- **Aero watts calculator**: watts saved and 40 km time saved for a given CdA reduction.
- **Measure from a photo**:
  - *Standing*: tap head, book top and floor to estimate inseam from your height.
  - *On the bike*: tap hip, knee and ankle (and optionally shoulder) to check knee bend and torso angle against your target, with a suggested saddle adjustment in mm.
  - Photos are processed in the browser and never uploaded.
- **Jersey colour themes**: Jaune, Rosa and Rojo, inspired by the leader's jerseys of cycling's three Grand Tours. Light and dark mode.

## Evidence base

- Husband et al. (2024), *Cycling position optimisation – a systematic review*, Journal of Sports Sciences. https://doi.org/10.1080/02640414.2024.2394752
- Fintelman et al. (2014), *Optimal cycling time trial position models*, Journal of Biomechanics. https://doi.org/10.1016/j.jbiomech.2014.02.029
- Fintelman et al. (2015), *The effect of time trial cycling position on physiological and aerodynamic variables*, Journal of Sports Sciences. https://doi.org/10.1080/02640414.2015.1009936
- Faulkner et al. (2024), *Individual aerodynamic and physiological data are critical to optimise cycling time trial performance*, Sports Engineering. https://doi.org/10.1007/s12283-023-00446-0
- Bini et al. (2010), *Effects of saddle height, pedaling cadence, and workload on joint kinetics and kinematics during cycling*, J Sport Rehabil. https://pubmed.ncbi.nlm.nih.gov/20811079/
- Martin & Spirduso (2001), *Determinants of maximal cycling power: crank length, pedaling rate and pedal speed*, Eur J Appl Physiol. https://doi.org/10.1007/s004210100400

## Limitations

The results are research-informed starting points, not a professional bike fit. The saddle-height formula (0.883 × inseam), the mm-per-degree conversion and the torso-angle bands between 30 and 46 km/h are approximations. Verify your knee angle on video and test speed at equal power. Photo measurements can be off by a centimetre or more.

The colour themes are inspired by the Grand Tour leader's jerseys. This project is not affiliated with or endorsed by the races' organisers.
