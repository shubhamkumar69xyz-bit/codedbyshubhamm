/* ==========================================================================
   GENERAL SCIENCE QUESTION POOL (90 QUESTIONS TOTAL)
   ========================================================================== */

window.QuizQuestionPool = window.QuizQuestionPool || {};

const scienceQuestions = [
  // ==========================================
  // EASY SECTION (30 QUESTIONS)
  // ==========================================
  {
    question: "What chemical element has the symbol 'O'?",
    options: ["Osmium", "Oxygen", "Gold", "Zinc"],
    correctAnswer: "Oxygen",
    category: "Science",
    difficulty: "easy"
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
    correctAnswer: "Diamond",
    category: "Science",
    difficulty: "easy"
  },
  {
    question: "Which gas do plants absorb during photosynthesis?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correctAnswer: "Carbon Dioxide",
    category: "Science",
    difficulty: "easy"
  },
  {
    question: "How many bones are in the adult human body?",
    options: ["206", "180", "215", "300"],
    correctAnswer: "206",
    category: "Science",
    difficulty: "easy"
  },
  {
    question: "What is the boiling point of water in Celsius at sea level?",
    options: ["90°C", "100°C", "110°C", "120°C"],
    correctAnswer: "100°C",
    category: "Science",
    difficulty: "easy"
  },
  {
    question: "Which organ pumps blood throughout the human body?",
    options: ["Lungs", "Brain", "Liver", "Heart"],
    correctAnswer: "Heart",
    category: "Science",
    difficulty: "easy"
  },
  {
    question: "What power source powers our solar system?",
    options: ["The Moon", "The Sun", "Black Hole", "Jupiter"],
    correctAnswer: "The Sun",
    category: "Science",
    difficulty: "easy"
  },
  {
    question: "What force pulls objects toward the center of the Earth?",
    options: ["Magnetism", "Gravity", "Friction", "Tension"],
    correctAnswer: "Gravity",
    category: "Science",
    difficulty: "easy"
  },
  {
    question: "What form of matter is steam?",
    options: ["Solid", "Liquid", "Gas", "Plasma"],
    correctAnswer: "Gas",
    category: "Science",
    difficulty: "easy"
  },
  {
    question: "Which organ do humans use to smell?",
    options: ["Ears", "Eyes", "Nose", "Tongue"],
    correctAnswer: "Nose",
    category: "Science",
    difficulty: "easy"
  },
  {
    question: "What is the freezing point of water in Celsius?",
    options: ["-10°C", "0°C", "10°C", "32°C"],
    correctAnswer: "0°C",
    category: "Science",
    difficulty: "easy"
  },
  {
    question: "What gas do humans need to breathe in to survive?",
    options: ["Carbon Dioxide", "Helium", "Oxygen", "Nitrogen"],
    correctAnswer: "Oxygen",
    category: "Science",
    difficulty: "easy"
  },
  {
    question: "Which animal classification produces milk for its young?",
    options: ["Reptiles", "Mammals", "Amphibians", "Birds"],
    correctAnswer: "Mammals",
    category: "Science",
    difficulty: "easy"
  },
  {
    question: "What is the main source of energy for Earth's water cycle?",
    options: ["The Moon", "The Wind", "The Sun", "Ocean currents"],
    correctAnswer: "The Sun",
    category: "Science",
    difficulty: "easy"
  },
  {
    question: "Which body organ filters thoughts and controls actions?",
    options: ["Heart", "Lungs", "Brain", "Stomach"],
    correctAnswer: "Brain",
    category: "Science",
    difficulty: "easy"
  },
  {
    question: "What is the study of living organisms called?",
    options: ["Physics", "Chemistry", "Biology", "Geology"],
    correctAnswer: "Biology",
    category: "Science",
    difficulty: "easy"
  },
  {
    question: "Which part of the plant absorbs water from the soil?",
    options: ["Leaves", "Stem", "Roots", "Flowers"],
    correctAnswer: "Roots",
    category: "Science",
    difficulty: "easy"
  },
  {
    question: "What instrument is used to measure temperature?",
    options: ["Barometer", "Thermometer", "Speedometer", "Scale"],
    correctAnswer: "Thermometer",
    category: "Science",
    difficulty: "easy"
  },
  {
    question: "Which organ do fish use to breathe underwater?",
    options: ["Lungs", "Gills", "Skin", "Fins"],
    correctAnswer: "Gills",
    category: "Science",
    difficulty: "easy"
  },
  {
    question: "What color reflects all light wavelengths?",
    options: ["Black", "White", "Red", "Blue"],
    correctAnswer: "White",
    category: "Science",
    difficulty: "easy"
  },
  {
    question: "Which animal is an amphibian?",
    options: ["Snake", "Frog", "Eagle", "Dog"],
    correctAnswer: "Frog",
    category: "Science",
    difficulty: "easy"
  },
  {
    question: "What chemical symbol represents Gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    correctAnswer: "Au",
    category: "Science",
    difficulty: "easy"
  },
  {
    question: "What layer protects Earth from harmful solar radiation?",
    options: ["Crust", "Ozone Layer", "Magma Layer", "Core"],
    correctAnswer: "Ozone Layer",
    category: "Science",
    difficulty: "easy"
  },
  {
    question: "Which type of diet consists only of plants?",
    options: ["Carnivore", "Herbivore", "Omnivore", "Insectivore"],
    correctAnswer: "Herbivore",
    category: "Science",
    difficulty: "easy"
  },
  {
    question: "What type of diet consists only of meat?",
    options: ["Herbivore", "Carnivore", "Omnivore", "Vegan"],
    correctAnswer: "Carnivore",
    category: "Science",
    difficulty: "easy"
  },
  {
    question: "What metal is liquid at room temperature?",
    options: ["Iron", "Lead", "Mercury", "Copper"],
    correctAnswer: "Mercury",
    category: "Science",
    difficulty: "easy"
  },
  {
    question: "What natural phenomenon occurs when Earth shakes?",
    options: ["Tsunami", "Tornado", "Earthquake", "Hurricane"],
    correctAnswer: "Earthquake",
    category: "Science",
    difficulty: "easy"
  },
  {
    question: "Which light wavelength color absorbs all light?",
    options: ["White", "Black", "Yellow", "Green"],
    correctAnswer: "Black",
    category: "Science",
    difficulty: "easy"
  },
  {
    question: "What simple machine is used to split things apart?",
    options: ["Lever", "Pulley", "Wedge", "Wheel"],
    correctAnswer: "Wedge",
    category: "Science",
    difficulty: "easy"
  },
  {
    question: "What do bees collect from flowers to make honey?",
    options: ["Water", "Nectar", "Leaves", "Seeds"],
    correctAnswer: "Nectar",
    category: "Science",
    difficulty: "easy"
  },

  // ==========================================
  // MEDIUM SECTION (30 QUESTIONS)
  // ==========================================
  {
    question: "What is the primary gas found in Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
    correctAnswer: "Nitrogen",
    category: "Science",
    difficulty: "medium"
  },
  {
    question: "Which part of the plant cell is responsible for photosynthesis?",
    options: ["Mitochondria", "Nucleus", "Chloroplast", "Ribosome"],
    correctAnswer: "Chloroplast",
    category: "Science",
    difficulty: "medium"
  },
  {
    question: "What is the unit of electrical resistance?",
    options: ["Volt", "Ampere", "Watt", "Ohm"],
    correctAnswer: "Ohm",
    category: "Science",
    difficulty: "medium"
  },
  {
    question: "Which vitamin is produced when human skin is exposed to sunlight?",
    options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    correctAnswer: "Vitamin D",
    category: "Science",
    difficulty: "medium"
  },
  {
    question: "What is the speed of light in vacuum (approximate)?",
    options: ["150,000 km/s", "300,000 km/s", "500,000 km/s", "1,000,000 km/s"],
    correctAnswer: "300,000 km/s",
    category: "Science",
    difficulty: "medium"
  },
  {
    question: "Which human organ is primarily responsible for filtering blood?",
    options: ["Heart", "Kidney", "Pancreas", "Spleen"],
    correctAnswer: "Kidney",
    category: "Science",
    difficulty: "medium"
  },
  {
    question: "What type of energy is stored in a battery?",
    options: ["Thermal Energy", "Chemical Energy", "Nuclear Energy", "Mechanical Energy"],
    correctAnswer: "Chemical Energy",
    category: "Science",
    difficulty: "medium"
  },
  {
    question: "What type of acid is found in the human stomach?",
    options: ["Sulfuric Acid", "Hydrochloric Acid", "Nitric Acid", "Acetic Acid"],
    correctAnswer: "Hydrochloric Acid",
    category: "Science",
    difficulty: "medium"
  },
  {
    question: "Which organ produces insulin in the human body?",
    options: ["Liver", "Kidney", "Pancreas", "Gallbladder"],
    correctAnswer: "Pancreas",
    category: "Science",
    difficulty: "medium"
  },
  {
    question: "What is the chemical formula for salt?",
    options: ["H2O", "NaCl", "CO2", "CH4"],
    correctAnswer: "NaCl",
    category: "Science",
    difficulty: "medium"
  },
  {
    question: "What is the primary constituent of natural gas?",
    options: ["Ethane", "Methane", "Propane", "Butane"],
    correctAnswer: "Methane",
    category: "Science",
    difficulty: "medium"
  },
  {
    question: "Which blood type is known as the universal donor?",
    options: ["A positive", "B negative", "AB positive", "O negative"],
    correctAnswer: "O negative",
    category: "Science",
    difficulty: "medium"
  },
  {
    question: "Which blood type is known as the universal recipient?",
    options: ["O negative", "A positive", "AB positive", "B positive"],
    correctAnswer: "AB positive",
    category: "Science",
    difficulty: "medium"
  },
  {
    question: "What is the law that states energy cannot be created or destroyed?",
    options: ["Law of Gravity", "First Law of Thermodynamics", "Boyle's Law", "Newton's Second Law"],
    correctAnswer: "First Law of Thermodynamics",
    category: "Science",
    difficulty: "medium"
  },
  {
    question: "What is the process by which liquid turns into gas at room temperature?",
    options: ["Condensation", "Evaporation", "Sublimation", "Deposition"],
    correctAnswer: "Evaporation",
    category: "Science",
    difficulty: "medium"
  },
  {
    question: "What process turns a solid directly into a gas without melting?",
    options: ["Evaporation", "Freezing", "Sublimation", "Condensation"],
    correctAnswer: "Sublimation",
    category: "Science",
    difficulty: "medium"
  },
  {
    question: "What is the pH value of neutral pure water?",
    options: ["0", "5", "7", "14"],
    correctAnswer: "7",
    category: "Science",
    difficulty: "medium"
  },
  {
    question: "Which particle carries a positive electrical charge?",
    options: ["Electron", "Neutron", "Proton", "Photon"],
    correctAnswer: "Proton",
    category: "Science",
    difficulty: "medium"
  },
  {
    question: "Which particle carries a neutral (zero) electrical charge?",
    options: ["Proton", "Neutron", "Electron", "Positron"],
    correctAnswer: "Neutron",
    category: "Science",
    difficulty: "medium"
  },
  {
    question: "What is the strongest force in nature over short distances?",
    options: ["Gravity", "Electromagnetic Force", "Strong Nuclear Force", "Weak Nuclear Force"],
    correctAnswer: "Strong Nuclear Force",
    category: "Science",
    difficulty: "medium"
  },
  {
    question: "What alloy is produced by mixing iron and carbon?",
    options: ["Brass", "Bronze", "Steel", "Pewter"],
    correctAnswer: "Steel",
    category: "Science",
    difficulty: "medium"
  },
  {
    question: "What alloy is produced by combining copper and zinc?",
    options: ["Bronze", "Brass", "Steel", "Electrum"],
    correctAnswer: "Brass",
    category: "Science",
    difficulty: "medium"
  },
  {
    question: "Which hormone regulates human sleep-wake cycles?",
    options: ["Insulin", "Melatonin", "Adrenaline", "Cortisol"],
    correctAnswer: "Melatonin",
    category: "Science",
    difficulty: "medium"
  },
  {
    question: "Which gland is known as the 'master gland' in the human body?",
    options: ["Thyroid Gland", "Pituitary Gland", "Adrenal Gland", "Pancreas"],
    correctAnswer: "Pituitary Gland",
    category: "Science",
    difficulty: "medium"
  },
  {
    question: "What is the common term for Nitrogen Dioxide or Nitrous Oxide in medical fields?",
    options: ["Teardrop gas", "Laughing gas", "Mustard gas", "Nerve gas"],
    correctAnswer: "Laughing gas",
    category: "Science",
    difficulty: "medium"
  },
  {
    question: "What scale is used to measure earthquake intensity?",
    options: ["Celsius Scale", "Richter Scale", "Kelvin Scale", "Beaufort Scale"],
    correctAnswer: "Richter Scale",
    category: "Science",
    difficulty: "medium"
  },
  {
    question: "What type of lens is used in a magnifying glass?",
    options: ["Concave Lens", "Convex Lens", "Flat Lens", "Bifocal Lens"],
    correctAnswer: "Convex Lens",
    category: "Science",
    difficulty: "medium"
  },
  {
    question: "Which scientist discovered penicillin in 1928?",
    options: ["Louis Pasteur", "Alexander Fleming", "Robert Koch", "Edward Jenner"],
    correctAnswer: "Alexander Fleming",
    category: "Science",
    difficulty: "medium"
  },
  {
    question: "What is the study of fossils called?",
    options: ["Archaeology", "Paleontology", "Anthropology", "Radiology"],
    correctAnswer: "Paleontology",
    category: "Science",
    difficulty: "medium"
  },
  {
    question: "Which element has the highest thermal conductivity of all metals?",
    options: ["Gold", "Copper", "Silver", "Aluminum"],
    correctAnswer: "Silver",
    category: "Science",
    difficulty: "medium"
  },

  // ==========================================
  // HARD SECTION (30 QUESTIONS)
  // ==========================================
  {
    question: "What is the powerhouse / power center of the cell?",
    options: ["Golgi Apparatus", "Endoplasmic Reticulum", "Mitochondria", "Lysosome"],
    correctAnswer: "Mitochondria",
    category: "Science",
    difficulty: "hard"
  },
  {
    question: "Which element on the periodic table has the symbol 'Hg'?",
    options: ["Silver", "Mercury", "Lead", "Tin"],
    correctAnswer: "Mercury",
    category: "Science",
    difficulty: "hard"
  },
  {
    question: "What law of motion states 'For every action, there is an equal and opposite reaction'?",
    options: ["First Law", "Second Law", "Third Law", "Law of Gravitation"],
    correctAnswer: "Third Law",
    category: "Science",
    difficulty: "hard"
  },
  {
    question: "Which subatomic particle has a negative electric charge?",
    options: ["Proton", "Neutron", "Electron", "Positron"],
    correctAnswer: "Electron",
    category: "Science",
    difficulty: "hard"
  },
  {
    question: "What fundamental constant is represented by 'h' in quantum mechanics?",
    options: ["Avogadro's Constant", "Planck's Constant", "Boltzmann Constant", "Rydberg Constant"],
    correctAnswer: "Planck's Constant",
    category: "Science",
    difficulty: "hard"
  },
  {
    question: "What is the rarest naturally occurring element in Earth's crust?",
    options: ["Francium", "Astatine", "Oganesson", "Promethium"],
    correctAnswer: "Astatine",
    category: "Science",
    difficulty: "hard"
  },
  {
    question: "Which organic molecule carries genetic instructions in all living organisms?",
    options: ["RNA", "DNA", "ATP", "Glucose"],
    correctAnswer: "DNA",
    category: "Science",
    difficulty: "hard"
  },
  {
    question: "What energy-carrying molecule is known as the cellular energy currency?",
    options: ["NADH", "ATP (Adenosine Triphosphate)", "DNA", "RNA"],
    correctAnswer: "ATP (Adenosine Triphosphate)",
    category: "Science",
    difficulty: "hard"
  },
  {
    question: "Who developed the Theory of General Relativity?",
    options: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Max Planck"],
    correctAnswer: "Albert Einstein",
    category: "Science",
    difficulty: "hard"
  },
  {
    question: "What element has an atomic number of 1?",
    options: ["Helium", "Hydrogen", "Lithium", "Carbon"],
    correctAnswer: "Hydrogen",
    category: "Science",
    difficulty: "hard"
  },
  {
    question: "What is absolute zero in Celsius?",
    options: ["-100°C", "-273.15°C", "-300°C", "0°C"],
    correctAnswer: "-273.15°C",
    category: "Science",
    difficulty: "hard"
  },
  {
    question: "What phenomenon occurs when light bends as it passes from one medium to another?",
    options: ["Reflection", "Refraction", "Diffraction", "Dispersion"],
    correctAnswer: "Refraction",
    category: "Science",
    difficulty: "hard"
  },
  {
    question: "Which scientist formulated the Uncertainty Principle in quantum mechanics?",
    options: ["Erwin Schrödinger", "Werner Heisenberg", "Louis de Broglie", "Max Born"],
    correctAnswer: "Werner Heisenberg",
    category: "Science",
    difficulty: "hard"
  },
  {
    question: "What equation describes wave-particle duality and quantum wave states?",
    options: ["Einstein Field Equation", "Schrödinger Equation", "Maxwell's Equations", "Dirac Equation"],
    correctAnswer: "Schrödinger Equation",
    category: "Science",
    difficulty: "hard"
  },
  {
    question: "What type of chemical bond involves the sharing of electron pairs?",
    options: ["Ionic Bond", "Covalent Bond", "Hydrogen Bond", "Metallic Bond"],
    correctAnswer: "Covalent Bond",
    category: "Science",
    difficulty: "hard"
  },
  {
    question: "What type of chemical bond involves the transfer of electrons from one atom to another?",
    options: ["Covalent Bond", "Ionic Bond", "Van der Waals Bond", "Metallic Bond"],
    correctAnswer: "Ionic Bond",
    category: "Science",
    difficulty: "hard"
  },
  {
    question: "Who is known as the Father of Modern Chemistry?",
    options: ["Antoine Lavoisier", "Dmitri Mendeleev", "John Dalton", "Robert Boyle"],
    correctAnswer: "Antoine Lavoisier",
    category: "Science",
    difficulty: "hard"
  },
  {
    question: "Who created the first recognized periodic table of elements?",
    options: ["Henry Moseley", "Dmitri Mendeleev", "Marie Curie", "Ernest Rutherford"],
    correctAnswer: "Dmitri Mendeleev",
    category: "Science",
    difficulty: "hard"
  },
  {
    question: "What particle is its own antiparticle?",
    options: ["Electron", "Neutrino", "Photon", "Quark"],
    correctAnswer: "Photon",
    category: "Science",
    difficulty: "hard"
  },
  {
    question: "Which scientist won Nobel Prizes in two different scientific fields (Physics and Chemistry)?",
    options: ["Linus Pauling", "Marie Curie", "John Bardeen", "Albert Einstein"],
    correctAnswer: "Marie Curie",
    category: "Science",
    difficulty: "hard"
  },
  {
    question: "What is the process of cell division that results in four daughter cells with half the chromosomes?",
    options: ["Mitosis", "Meiosis", "Binary Fission", "Budding"],
    correctAnswer: "Meiosis",
    category: "Science",
    difficulty: "hard"
  },
  {
    question: "What is the standard cell division process that produces two genetically identical daughter cells?",
    options: ["Meiosis", "Mitosis", "Apoptosis", "Cytokinesis"],
    correctAnswer: "Mitosis",
    category: "Science",
    difficulty: "hard"
  },
  {
    question: "What particle gives other fundamental particles their mass in the Standard Model?",
    options: ["Gluon", "Higgs Boson", "Z Boson", "Graviton"],
    correctAnswer: "Higgs Boson",
    category: "Science",
    difficulty: "hard"
  },
  {
    question: "What state of matter exists at extremely high temperatures consisting of ions and free electrons?",
    options: ["Bose-Einstein Condensate", "Plasma", "Superfluid", "Degenerate Matter"],
    correctAnswer: "Plasma",
    category: "Science",
    difficulty: "hard"
  },
  {
    question: "What state of matter forms near absolute zero where quantum effects become macroscopic?",
    options: ["Plasma", "Bose-Einstein Condensate", "Supercritical Fluid", "Neutronium"],
    correctAnswer: "Bose-Einstein Condensate",
    category: "Science",
    difficulty: "hard"
  },
  {
    question: "Which law states that pressure and volume of a gas are inversely proportional at constant temperature?",
    options: ["Charles's Law", "Boyle's Law", "Gay-Lussac's Law", "Avogadro's Law"],
    correctAnswer: "Boyle's Law",
    category: "Science",
    difficulty: "hard"
  },
  {
    question: "Which element has the highest electrical conductivity of any element?",
    options: ["Copper", "Gold", "Silver", "Graphene"],
    correctAnswer: "Silver",
    category: "Science",
    difficulty: "hard"
  },
  {
    question: "What rule states that an atom is most stable when its valence shell contains eight electrons?",
    options: ["Hund's Rule", "Octet Rule", "Pauli Exclusion Principle", "Aufbau Principle"],
    correctAnswer: "Octet Rule",
    category: "Science",
    difficulty: "hard"
  },
  {
    question: "What quantum principle states that two identical fermions cannot occupy the same quantum state simultaneously?",
    options: ["Heisenberg Uncertainty Principle", "Pauli Exclusion Principle", "Aufbau Principle", "Hund's Rule"],
    correctAnswer: "Pauli Exclusion Principle",
    category: "Science",
    difficulty: "hard"
  },
  {
    question: "Which organelle contains digestive enzymes to break down waste inside biological cells?",
    options: ["Ribosome", "Lysosome", "Peroxisome", "Vacuole"],
    correctAnswer: "Lysosome",
    category: "Science",
    difficulty: "hard"
  }
];

// Register under both science and formal category keys
window.QuizQuestionPool["science"] = scienceQuestions;
window.QuizQuestionPool["Science"] = scienceQuestions;
