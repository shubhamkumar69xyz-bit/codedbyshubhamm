/* ==========================================================================
   SPACE & ASTRONOMY QUESTION POOL (90 QUESTIONS TOTAL)
   ========================================================================== */

window.QuizQuestionPool = window.QuizQuestionPool || {};

const spaceQuestions = [
  // ==========================================
  // EASY SECTION (30 QUESTIONS)
  // ==========================================
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
    category: "Space & Astronomy",
    difficulty: "easy"
  },
  {
    question: "What is the name of the planet we live on?",
    options: ["Mars", "Earth", "Venus", "Mercury"],
    correctAnswer: "Earth",
    category: "Space & Astronomy",
    difficulty: "easy"
  },
  {
    question: "Which celestial body lights up our day on Earth?",
    options: ["The Moon", "The Sun", "Mars", "Venus"],
    correctAnswer: "The Sun",
    category: "Space & Astronomy",
    difficulty: "easy"
  },
  {
    question: "What natural satellite orbits the Earth?",
    options: ["The Sun", "Titan", "The Moon", "Phobos"],
    correctAnswer: "The Moon",
    category: "Space & Astronomy",
    difficulty: "easy"
  },
  {
    question: "Which is the largest planet in our solar system?",
    options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
    correctAnswer: "Jupiter",
    category: "Space & Astronomy",
    difficulty: "easy"
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Mercury", "Earth", "Mars"],
    correctAnswer: "Mercury",
    category: "Space & Astronomy",
    difficulty: "easy"
  },
  {
    question: "Which planet is famous for its large, bright rings?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    correctAnswer: "Saturn",
    category: "Space & Astronomy",
    difficulty: "easy"
  },
  {
    question: "What do astronauts travel to space in?",
    options: ["Airplane", "Submarine", "Rocket", "Helicopter"],
    correctAnswer: "Rocket",
    category: "Space & Astronomy",
    difficulty: "easy"
  },
  {
    question: "What force keeps us from floating away into space?",
    options: ["Magnetism", "Gravity", "Friction", "Electricity"],
    correctAnswer: "Gravity",
    category: "Space & Astronomy",
    difficulty: "easy"
  },
  {
    question: "What color is the night sky usually seen as from Earth?",
    options: ["Blue", "Dark / Black", "Green", "Yellow"],
    correctAnswer: "Dark / Black",
    category: "Space & Astronomy",
    difficulty: "easy"
  },
  {
    question: "How many planets are currently in our solar system?",
    options: ["7", "8", "9", "10"],
    correctAnswer: "8",
    category: "Space & Astronomy",
    difficulty: "easy"
  },
  {
    question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
    options: ["Mars", "Venus", "Jupiter", "Mercury"],
    correctAnswer: "Venus",
    category: "Space & Astronomy",
    difficulty: "easy"
  },
  {
    question: "What is the Sun made of primarily?",
    options: ["Liquid water", "Hot gases", "Solid rock", "Ice"],
    correctAnswer: "Hot gases",
    category: "Space & Astronomy",
    difficulty: "easy"
  },
  {
    question: "What do we call a scientist who studies space?",
    options: ["Biologist", "Geologist", "Astronomer", "Chemist"],
    correctAnswer: "Astronomer",
    category: "Space & Astronomy",
    difficulty: "easy"
  },
  {
    question: "Which dwarf planet was formerly classified as the 9th planet?",
    options: ["Ceres", "Eris", "Pluto", "Makemake"],
    correctAnswer: "Pluto",
    category: "Space & Astronomy",
    difficulty: "easy"
  },
  {
    question: "What suit do astronauts wear during a spacewalk?",
    options: ["Wet suit", "Spacesuit", "Tuxedo", "Hazmat suit"],
    correctAnswer: "Spacesuit",
    category: "Space & Astronomy",
    difficulty: "easy"
  },
  {
    question: "What is the Milky Way?",
    options: ["A candy bar only", "Our galaxy", "A planet", "A constellation"],
    correctAnswer: "Our galaxy",
    category: "Space & Astronomy",
    difficulty: "easy"
  },
  {
    question: "What do we call a shooting star in reality?",
    options: ["Meteor", "Planet", "Moon", "Black Hole"],
    correctAnswer: "Meteor",
    category: "Space & Astronomy",
    difficulty: "easy"
  },
  {
    question: "How long does it take for Earth to orbit the Sun once?",
    options: ["1 day", "1 month", "1 year (365 days)", "10 years"],
    correctAnswer: "1 year (365 days)",
    category: "Space & Astronomy",
    difficulty: "easy"
  },
  {
    question: "How long does it take for Earth to rotate once on its axis?",
    options: ["12 hours", "24 hours (1 day)", "7 days", "30 days"],
    correctAnswer: "24 hours (1 day)",
    category: "Space & Astronomy",
    difficulty: "easy"
  },
  {
    question: "Which telescope is famous for taking deep space photos?",
    options: ["Galileo", "Hubble", "Kepler", "Perseverance"],
    correctAnswer: "Hubble",
    category: "Space & Astronomy",
    difficulty: "easy"
  },
  {
    question: "What shape is Earth closest to?",
    options: ["Flat disk", "Sphere", "Cube", "Pyramid"],
    correctAnswer: "Sphere",
    category: "Space & Astronomy",
    difficulty: "easy"
  },
  {
    question: "What celestial phenomenon occurs when the Moon blocks the Sun?",
    options: ["Lunar Eclipse", "Solar Eclipse", "Aurora", "Meteor Shower"],
    correctAnswer: "Solar Eclipse",
    category: "Space & Astronomy",
    difficulty: "easy"
  },
  {
    question: "Which is the hottest planet in our solar system?",
    options: ["Mercury", "Venus", "Mars", "Jupiter"],
    correctAnswer: "Venus",
    category: "Space & Astronomy",
    difficulty: "easy"
  },
  {
    question: "What do comets mostly consist of?",
    options: ["Ice, dust, and rock", "Pure gold", "Liquid lava", "Gas only"],
    correctAnswer: "Ice, dust, and rock",
    category: "Space & Astronomy",
    difficulty: "easy"
  },
  {
    question: "Who was the first human to step on the Moon?",
    options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "John Glenn"],
    correctAnswer: "Neil Armstrong",
    category: "Space & Astronomy",
    difficulty: "easy"
  },
  {
    question: "What is the coldest planet in our solar system?",
    options: ["Neptune", "Uranus", "Saturn", "Mars"],
    correctAnswer: "Uranus",
    category: "Space & Astronomy",
    difficulty: "easy"
  },
  {
    question: "What is a group of stars forming a pattern called?",
    options: ["Galaxy", "Constellation", "Cluster", "Nebula"],
    correctAnswer: "Constellation",
    category: "Space & Astronomy",
    difficulty: "easy"
  },
  {
    question: "What famous space station orbits Earth where astronauts live?",
    options: ["ISS (International Space Station)", "Apollo 11", "Voyager 1", "Starship"],
    correctAnswer: "ISS (International Space Station)",
    category: "Space & Astronomy",
    difficulty: "easy"
  },
  {
    question: "Which planet is known for having a giant 'Red Spot'?",
    options: ["Mars", "Jupiter", "Saturn", "Neptune"],
    correctAnswer: "Jupiter",
    category: "Space & Astronomy",
    difficulty: "easy"
  },

  // ==========================================
  // MEDIUM SECTION (30 QUESTIONS)
  // ==========================================
  {
    question: "What is the name of NASA's rover that landed on Mars in 2021?",
    options: ["Curiosity", "Opportunity", "Perseverance", "Spirit"],
    correctAnswer: "Perseverance",
    category: "Space & Astronomy",
    difficulty: "medium"
  },
  {
    question: "Which moon is the largest moon in our solar system?",
    options: ["Titan", "Ganymede", "Europa", "Callisto"],
    correctAnswer: "Ganymede",
    category: "Space & Astronomy",
    difficulty: "medium"
  },
  {
    question: "What galaxy is on a collision course with the Milky Way?",
    options: ["Andromeda", "Sombrero", "Triangulum", "Whirlpool"],
    correctAnswer: "Andromeda",
    category: "Space & Astronomy",
    difficulty: "medium"
  },
  {
    question: "Approximately how long does sunlight take to reach Earth?",
    options: ["8 seconds", "8 minutes", "8 hours", "8 days"],
    correctAnswer: "8 minutes",
    category: "Space & Astronomy",
    difficulty: "medium"
  },
  {
    question: "Which moon of Saturn is famous for having lakes of liquid methane?",
    options: ["Enceladus", "Titan", "Mimas", "Rhea"],
    correctAnswer: "Titan",
    category: "Space & Astronomy",
    difficulty: "medium"
  },
  {
    question: "What type of star is our Sun classified as?",
    options: ["Red Giant", "Yellow Dwarf", "Blue Supergiant", "White Dwarf"],
    correctAnswer: "Yellow Dwarf",
    category: "Space & Astronomy",
    difficulty: "medium"
  },
  {
    question: "What is the boundary around a black hole beyond which nothing can escape?",
    options: ["Singularity", "Photon Sphere", "Event Horizon", "Accretion Disk"],
    correctAnswer: "Event Horizon",
    category: "Space & Astronomy",
    difficulty: "medium"
  },
  {
    question: "Who was the first human being to travel into space?",
    options: ["Neil Armstrong", "Yuri Gagarin", "Alan Shepard", "John Glenn"],
    correctAnswer: "Yuri Gagarin",
    category: "Space & Astronomy",
    difficulty: "medium"
  },
  {
    question: "Which moon of Jupiter is believed to have a vast ocean beneath its ice?",
    options: ["Io", "Europa", "Ganymede", "Callisto"],
    correctAnswer: "Europa",
    category: "Space & Astronomy",
    difficulty: "medium"
  },
  {
    question: "What belt lies between Mars and Jupiter containing millions of space rocks?",
    options: "Kuiper Belt", "Oort Cloud", "Asteroid Belt", "Van Allen Belt"],
    correctAnswer: "Asteroid Belt",
    category: "Space & Astronomy",
    difficulty: "medium"
  },
  {
    question: "What is the brightest star in Earth's night sky?",
    options: ["Polaris", "Sirius (Dog Star)", "Betelgeuse", "Alpha Centauri"],
    correctAnswer: "Sirius (Dog Star)",
    category: "Space & Astronomy",
    difficulty: "medium"
  },
  {
    question: "What space telescope was launched in December 2021 as Hubble's successor?",
    options: ["Spitzer", "Kepler", "James Webb Space Telescope", "Chandra"],
    correctAnswer: "James Webb Space Telescope",
    category: "Space & Astronomy",
    difficulty: "medium"
  },
  {
    question: "What is the term for a star that violently explodes at the end of its life?",
    options: ["Protostar", "Supernova", "Red Giant", "Pulsar"],
    correctAnswer: "Supernova",
    category: "Space & Astronomy",
    difficulty: "medium"
  },
  {
    question: "Which planet rotates on its side with an axial tilt of nearly 98 degrees?",
    options: ["Neptune", "Saturn", "Uranus", "Venus"],
    correctAnswer: "Uranus",
    category: "Space & Astronomy",
    difficulty: "medium"
  },
  {
    question: "What is the main component of Mars' atmosphere?",
    options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Methane"],
    correctAnswer: "Carbon Dioxide",
    category: "Space & Astronomy",
    difficulty: "medium"
  },
  {
    question: "What do we call a neutron star that emits beams of radiation like a lighthouse?",
    options: ["Quasar", "Pulsar", "Magnetar", "White Dwarf"],
    correctAnswer: "Pulsar",
    category: "Space & Astronomy",
    difficulty: "medium"
  },
  {
    question: "Where is the Kuiper Belt located?",
    options: ["Between Earth and Mars", "Beyond Neptune", "Around the Sun directly", "Outside the Milky Way"],
    correctAnswer: "Beyond Neptune",
    category: "Space & Astronomy",
    difficulty: "medium"
  },
  {
    question: "What is the solar wind comprised of?",
    options: ["Dust particles", "Stream of charged particles (plasma)", "Water vapor", "Photons only"],
    correctAnswer: "Stream of charged particles (plasma)",
    category: "Space & Astronomy",
    difficulty: "medium"
  },
  {
    question: "What is the name of the volcano on Mars that is 3 times taller than Mt. Everest?",
    options: ["Mauna Kea", "Olympus Mons", "Vesuvius", "Tharsis Montes"],
    correctAnswer: "Olympus Mons",
    category: "Space & Astronomy",
    difficulty: "medium"
  },
  {
    question: "Which spacecraft is the farthest human-made object from Earth?",
    options: ["Voyager 1", "Voyager 2", "Pioneer 10", "New Horizons"],
    correctAnswer: "Voyager 1",
    category: "Space & Astronomy",
    difficulty: "medium"
  },
  {
    question: "What causes the Northern and Southern Lights (Auroras)?",
    options: ["Reflecting moonlight", "Solar particles interacting with atmosphere", "Volcanoes", "Comet dust"],
    correctAnswer: "Solar particles interacting with atmosphere",
    category: "Space & Astronomy",
    difficulty: "medium"
  },
  {
    question: "How many moons does Mars have?",
    options: ["0", "1", "2", "4"],
    correctAnswer: "2",
    category: "Space & Astronomy",
    difficulty: "medium"
  },
  {
    question: "What are the names of Mars' two moons?",
    options: ["Phobos and Deimos", "Io and Europa", "Titan and Rhea", "Castor and Pollux"],
    correctAnswer: "Phobos and Deimos",
    category: "Space & Astronomy",
    difficulty: "medium"
  },
  {
    question: "Which planet rotates in the opposite direction (retrograde) compared to most planets?",
    options: ["Mars", "Venus", "Jupiter", "Neptune"],
    correctAnswer: "Venus",
    category: "Space & Astronomy",
    difficulty: "medium"
  },
  {
    question: "What is the Great Dark Spot on Neptune?",
    options: ["A crater", "A massive storm system", "A shadow from Triton", "An ocean"],
    correctAnswer: "A massive storm system",
    category: "Space & Astronomy",
    difficulty: "medium"
  },
  {
    question: "What is the unit used to measure distances between stars and galaxies?",
    options: ["Astronomical Unit (AU)", "Light-year", "Kilometer", "Sound-year"],
    correctAnswer: "Light-year",
    category: "Space & Astronomy",
    difficulty: "medium"
  },
  {
    question: "What is an Astronomical Unit (AU)?",
    options: ["Distance from Earth to Moon", "Distance from Earth to Sun", "Diameter of Jupiter", "Speed of Light"],
    correctAnswer: "Distance from Earth to Sun",
    category: "Space & Astronomy",
    difficulty: "medium"
  },
  {
    question: "Which star system is closest to our Solar System?",
    options: ["Sirius", "Alpha Centauri", "Procyon", "Vega"],
    correctAnswer: "Alpha Centauri",
    category: "Space & Astronomy",
    difficulty: "medium"
  },
  {
    question: "What is the main theory describing the creation of the Universe?",
    options: ["Steady State Theory", "Big Bang Theory", "String Theory", "Nebular Theory"],
    correctAnswer: "Big Bang Theory",
    category: "Space & Astronomy",
    difficulty: "medium"
  },
  {
    question: "Who formulated the Laws of Planetary Motion?",
    options: ["Isaac Newton", "Johannes Kepler", "Galileo Galilei", "Nicolaus Copernicus"],
    correctAnswer: "Johannes Kepler",
    category: "Space & Astronomy",
    difficulty: "medium"
  },

  // ==========================================
  // HARD SECTION (30 QUESTIONS)
  // ==========================================
  {
    question: "What is the supermassive black hole at the center of the Milky Way called?",
    options: ["Cygnus X-1", "Sagittarius A*", "M87*", "Centaurus A"],
    correctAnswer: "Sagittarius A*",
    category: "Space & Astronomy",
    difficulty: "hard"
  },
  {
    question: "What percentage of the Universe is estimated to consist of Dark Energy?",
    options: ["5%", "27%", "68%", "95%"],
    correctAnswer: "68%",
    category: "Space & Astronomy",
    difficulty: "hard"
  },
  {
    question: "What is the Chandrasekhar limit equal to?",
    options: ["1.4 Solar Masses", "2.1 Solar Masses", "3.0 Solar Masses", "0.8 Solar Masses"],
    correctAnswer: "1.4 Solar Masses",
    category: "Space & Astronomy",
    difficulty: "hard"
  },
  {
    question: "Which cosmic distance ladder metric is based on pulsating stars?",
    options: ["Supernovae Type Ia", "Cepheid Variables", "Redshift", "Parallax"],
    correctAnswer: "Cepheid Variables",
    category: "Space & Astronomy",
    difficulty: "hard"
  },
  {
    question: "What radiation left over from the Big Bang fills all space?",
    options: ["Hawking Radiation", "Cosmic Microwave Background (CMB)", "Synchrotron Radiation", "Bremsstrahlung"],
    correctAnswer: "Cosmic Microwave Background (CMB)",
    category: "Space & Astronomy",
    difficulty: "hard"
  },
  {
    question: "What theoretical radiation is predicted to escape black holes over time?",
    options: ["Cherenkov Radiation", "Hawking Radiation", "Unruh Radiation", "Curvature Radiation"],
    correctAnswer: "Hawking Radiation",
    category: "Space & Astronomy",
    difficulty: "hard"
  },
  {
    question: "What is the name of the point in an orbit where a satellite is closest to Earth?",
    options: ["Apogee", "Perigee", "Perihelion", "Aphelion"],
    correctAnswer: "Perigee",
    category: "Space & Astronomy",
    difficulty: "hard"
  },
  {
    question: "What is the orbital point furthest from the Sun called?",
    options: ["Perihelion", "Aphelion", "Perigee", "Apogee"],
    correctAnswer: "Aphelion",
    category: "Space & Astronomy",
    difficulty: "hard"
  },
  {
    question: "Who proposed the heliocentric model of the solar system in 1543?",
    options: ["Tycho Brahe", "Nicolaus Copernicus", "Galileo Galilei", "Giordano Bruno"],
    correctAnswer: "Nicolaus Copernicus",
    category: "Space & Astronomy",
    difficulty: "hard"
  },
  {
    question: "What is the hypothetical sphere of icy bodies surrounding our solar system called?",
    options: ["Kuiper Belt", "Oort Cloud", "Hills Cloud", "Heliosphere"],
    correctAnswer: "Oort Cloud",
    category: "Space & Astronomy",
    difficulty: "hard"
  },
  {
    question: "What is the most distant active galaxy powered by a supermassive black hole called?",
    options: ["Pulsar", "Blazar / Quasar", "Magnetar", "Seyfert Galaxy"],
    correctAnswer: "Blazar / Quasar",
    category: "Space & Astronomy",
    difficulty: "hard"
  },
  {
    question: "Which galaxy was the first ever black hole image captured in (2019)?",
    options: ["Milky Way", "Andromeda (M31)", "Messier 87 (M87)", "Triangulum (M33)"],
    correctAnswer: "Messier 87 (M87)",
    category: "Space & Astronomy",
    difficulty: "hard"
  },
  {
    question: "What is the temperature of the Cosmic Microwave Background radiation?",
    options: ["2.7 Kelvin", "0 Kelvin", "100 Kelvin", "15.5 Kelvin"],
    correctAnswer: "2.7 Kelvin",
    category: "Space & Astronomy",
    difficulty: "hard"
  },
  {
    question: "What particle is emitted in immense numbers during solar nuclear fusion?",
    options: ["Positron", "Neutrino", "Muon", "Tau"],
    correctAnswer: "Neutrino",
    category: "Space & Astronomy",
    difficulty: "hard"
  },
  {
    question: "What spectral class is our Sun categorized under?",
    options: ["O-type", "B-type", "G-type (G2V)", "M-type"],
    correctAnswer: "G-type (G2V)",
    category: "Space & Astronomy",
    difficulty: "hard"
  },
  {
    question: "What process powers active stars during their main sequence life?",
    options: ["Nuclear Fission", "Nuclear Fusion (p-p chain)", "Gravitational Collapse", "Chemical Combustion"],
    correctAnswer: "Nuclear Fusion (p-p chain)",
    category: "Space & Astronomy",
    difficulty: "hard"
  },
  {
    question: "What is the Roche Limit?",
    options: ["Minimum distance for a moon to avoid tidal destruction", "Maximum speed of light", "Boundary of heliosphere", "Mass limit for neutron stars"],
    correctAnswer: "Minimum distance for a moon to avoid tidal destruction",
    category: "Space & Astronomy",
    difficulty: "hard"
  },
  {
    question: "What are Lagrange points?",
    options: ["Black hole centers", "Positions where gravitational forces balance orbital motion", "Points of max solar flares", "Telescope focal lengths"],
    correctAnswer: "Positions where gravitational forces balance orbital motion",
    category: "Space & Astronomy",
    difficulty: "hard"
  },
  {
    question: "Which Lagrange point houses the James Webb Space Telescope?",
    options: ["L1", "L2", "L4", "L5"],
    correctAnswer: "L2",
    category: "Space & Astronomy",
    difficulty: "hard"
  },
  {
    question: "What is the Drake Equation used to estimate?",
    options: ["Age of universe", "Number of active extraterrestrial civilizations in Milky Way", "Speed of cosmic expansion", "Mass of dark matter"],
    correctAnswer: "Number of active extraterrestrial civilizations in Milky Way",
    category: "Space & Astronomy",
    difficulty: "hard"
  },
  {
    question: "What type of star represents the smallest and coolest stellar objects capable of fusion?",
    options: ["White Dwarf", "Red Dwarf", "Brown Dwarf", "Neutron Star"],
    correctAnswer: "Red Dwarf",
    category: "Space & Astronomy",
    difficulty: "hard"
  },
  {
    question: "What is a Brown Dwarf colloquially referred to as?",
    options: ["Failed Star", "Dead Core", "Iron Star", "Dark Star"],
    correctAnswer: "Failed Star",
    category: "Space & Astronomy",
    difficulty: "hard"
  },
  {
    question: "What famous paradox asks: 'If extraterrestrial life is common, where is everybody?'",
    options: ["Olbers' Paradox", "Fermi Paradox", "Twin Paradox", "Bootstrap Paradox"],
    correctAnswer: "Fermi Paradox",
    category: "Space & Astronomy",
    difficulty: "hard"
  },
  {
    question: "What paradox asks why the night sky is dark if the universe is infinite with endless stars?",
    options: ["Fermi Paradox", "Olbers' Paradox", "Schrödinger Paradox", "EPR Paradox"],
    correctAnswer: "Olbers' Paradox",
    category: "Space & Astronomy",
    difficulty: "hard"
  },
  {
    question: "What element forms in the core of massive stars right before supernova collapse?",
    options: ["Carbon", "Silicon", "Iron", "Gold"],
    correctAnswer: "Iron",
    category: "Space & Astronomy",
    difficulty: "hard"
  },
  {
    question: "What instrument detected gravitational waves for the first time in 2015?",
    options: ["LIGO", "VIRGO", "CERN", "ALMA"],
    correctAnswer: "LIGO",
    category: "Space & Astronomy",
    difficulty: "hard"
  },
  {
    question: "What object results when two neutron stars collide and merge?",
    options: ["Kilonova", "White Dwarf", "Planetary Nebula", "Coronal Mass Ejection"],
    correctAnswer: "Kilonova",
    category: "Space & Astronomy",
    difficulty: "hard"
  },
  {
    question: "What is the boundary where the solar wind is slowed by interstellar medium?",
    options: ["Magnetopause", "Termination Shock", "Bow Shock", "Helio-peak"],
    correctAnswer: "Termination Shock",
    category: "Space & Astronomy",
    difficulty: "hard"
  },
  {
    question: "Which moon of Neptune has nitrogen geysers and orbits in a retrograde direction?",
    options: ["Proteus", "Triton", "Nereid", "Thalassa"],
    correctAnswer: "Triton",
    category: "Space & Astronomy",
    difficulty: "hard"
  },
  {
    question: "What astronomer discovered Uranus in 1781 using a homemade telescope?",
    options: ["William Herschel", "Edmond Halley", "Christiaan Huygens", "Giovanni Cassini"],
    correctAnswer: "William Herschel",
    category: "Space & Astronomy",
    difficulty: "hard"
  }
];

// Register under both space and formal category key
window.QuizQuestionPool["space"] = spaceQuestions;
window.QuizQuestionPool["Space & Astronomy"] = spaceQuestions;