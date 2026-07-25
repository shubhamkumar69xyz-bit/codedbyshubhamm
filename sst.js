/* ==========================================================================
   SOCIAL SCIENCE (SST) QUESTION POOL (90 QUESTIONS TOTAL)
   ========================================================================== */

window.QuizQuestionPool = window.QuizQuestionPool || {};

const sstQuestions = [
  // ==========================================
  // EASY SECTION (30 QUESTIONS)
  // ==========================================
  {
    question: "Which is the largest continent on Earth by land area?",
    options: ["Africa", "North America", "Asia", "Europe"],
    correctAnswer: "Asia",
    category: "Social Science",
    difficulty: "easy"
  },
  {
    question: "What is the capital city of India?",
    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    correctAnswer: "New Delhi",
    category: "Social Science",
    difficulty: "easy"
  },
  {
    question: "Who is known as the Father of the Indian Nation?",
    options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Sardar Patel"],
    correctAnswer: "Mahatma Gandhi",
    category: "Social Science",
    difficulty: "easy"
  },
  {
    question: "Which layer of the Earth lies directly beneath the crust?",
    options: ["Mantle", "Outer Core", "Inner Core", "Atmosphere"],
    correctAnswer: "Mantle",
    category: "Social Science",
    difficulty: "easy"
  },
  {
    question: "Which system allows citizens to vote and choose their government?",
    options: ["Monarchy", "Dictatorship", "Democracy", "Autocracy"],
    correctAnswer: "Democracy",
    category: "Social Science",
    difficulty: "easy"
  },
  {
    question: "What is the primary currency used in India?",
    options: ["Dollar", "Euro", "Indian Rupee", "Yen"],
    correctAnswer: "Indian Rupee",
    category: "Social Science",
    difficulty: "easy"
  },
  {
    question: "Which ocean is named after a country?",
    options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
    correctAnswer: "Indian Ocean",
    category: "Social Science",
    difficulty: "easy"
  },
  {
    question: "In which year did India gain independence from British rule?",
    options: ["1942", "1945", "1947", "1950"],
    correctAnswer: "1947",
    category: "Social Science",
    difficulty: "easy"
  },
  {
    question: "What line divides the Earth into the Northern and Southern Hemispheres?",
    options: ["Tropic of Cancer", "Prime Meridian", "Equator", "Tropic of Capricorn"],
    correctAnswer: "Equator",
    category: "Social Science",
    difficulty: "easy"
  },
  {
    question: "Which fundamental right guarantees equality before the law in India?",
    options: ["Right to Freedom", "Right to Equality", "Right against Exploitation", "Right to Education"],
    correctAnswer: "Right to Equality",
    category: "Social Science",
    difficulty: "easy"
  },
  {
    question: "What sector includes activities like farming, fishing, and forestry?",
    options: ["Primary Sector", "Secondary Sector", "Tertiary Sector", "Quaternary Sector"],
    correctAnswer: "Primary Sector",
    category: "Social Science",
    difficulty: "easy"
  },
  {
    question: "Which soil type is best suited for growing cotton crops?",
    options: ["Alluvial Soil", "Black Soil", "Red Soil", "Laterite Soil"],
    correctAnswer: "Black Soil",
    category: "Social Science",
    difficulty: "easy"
  },
  {
    question: "Who was the first Prime Minister of independent India?",
    options: ["Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Dr. Rajendra Prasad", "Lal Bahadur Shastri"],
    correctAnswer: "Jawaharlal Nehru",
    category: "Social Science",
    difficulty: "easy"
  },
  {
    question: "Which organ of government is responsible for making laws?",
    options: ["Executive", "Judiciary", "Legislature", "Media"],
    correctAnswer: "Legislature",
    category: "Social Science",
    difficulty: "easy"
  },
  {
    question: "What is the minimum voting age for citizens in India?",
    options: ["16 years", "18 years", "21 years", "25 years"],
    correctAnswer: "18 years",
    category: "Social Science",
    difficulty: "easy"
  },
  {
    question: "Which monument was built by Emperor Shah Jahan in memory of Mumtaz Mahal?",
    options: ["Red Fort", "Taj Mahal", "Qutub Minar", "Fatehpur Sikri"],
    correctAnswer: "Taj Mahal",
    category: "Social Science",
    difficulty: "easy"
  },
  {
    question: "Which direction does the Prime Meridian run?",
    options: ["East to West", "North to South", "Northeast to Southwest", "Diagonal"],
    correctAnswer: "North to South",
    category: "Social Science",
    difficulty: "easy"
  },
  {
    question: "What type of energy is solar power considered?",
    options: ["Non-renewable", "Renewable", "Fossil fuel", "Exhaustible"],
    correctAnswer: "Renewable",
    category: "Social Science",
    difficulty: "easy"
  },
  {
    question: "Who was the first President of independent India?",
    options: ["Dr. Rajendra Prasad", "Dr. S. Radhakrishnan", "Mahatma Gandhi", "Sardar Patel"],
    correctAnswer: "Dr. Rajendra Prasad",
    category: "Social Science",
    difficulty: "easy"
  },
  {
    question: "Which state in India has the highest literacy rate?",
    options: ["Bihar", "Kerala", "Punjab", "Tamil Nadu"],
    correctAnswer: "Kerala",
    category: "Social Science",
    difficulty: "easy"
  },
  {
    question: "What is the head of a Gram Panchayat called?",
    options: ["Mayor", "Sarpanch", "Governor", "Collector"],
    correctAnswer: "Sarpanch",
    category: "Social Science",
    difficulty: "easy"
  },
  {
    question: "Which mountain range separates Europe from Asia?",
    options: ["Himalayas", "Andes", "Ural Mountains", "Alps"],
    correctAnswer: "Ural Mountains",
    category: "Social Science",
    difficulty: "easy"
  },
  {
    question: "Which sector involves manufacturing goods in factories?",
    options: ["Primary Sector", "Secondary Sector", "Tertiary Sector", "Service Sector"],
    correctAnswer: "Secondary Sector",
    category: "Social Science",
    difficulty: "easy"
  },
  {
    question: "What is the highest judicial court in India?",
    options: ["High Court", "District Court", "Supreme Court", "Sessions Court"],
    correctAnswer: "Supreme Court",
    category: "Social Science",
    difficulty: "easy"
  },
  {
    question: "Which imaginary line passes through the middle of India?",
    options: ["Equator", "Tropic of Cancer", "Tropic of Capricorn", "Arctic Circle"],
    correctAnswer: "Tropic of Cancer",
    category: "Social Science",
    difficulty: "easy"
  },
  {
    question: "In which year did the Constitution of India come into effect?",
    options: ["1947", "1948", "1950", "1952"],
    correctAnswer: "1950",
    category: "Social Science",
    difficulty: "easy"
  },
  {
    question: "What do we call trade conducted between two or more different countries?",
    options: ["Local Trade", "International Trade", "Internal Trade", "State Trade"],
    correctAnswer: "International Trade",
    category: "Social Science",
    difficulty: "easy"
  },
  {
    question: "Which ancient civilization developed along the banks of the Indus River?",
    options: ["Egyptian", "Mesopotamian", "Indus Valley", "Chinese"],
    correctAnswer: "Indus Valley",
    category: "Social Science",
    difficulty: "easy"
  },
  {
    question: "What is the upper house of the Indian Parliament called?",
    options: ["Lok Sabha", "Rajya Sabha", "Vidhan Sabha", "Gram Sabha"],
    correctAnswer: "Rajya Sabha",
    category: "Social Science",
    difficulty: "easy"
  },
  {
    question: "What is the lower house of the Indian Parliament called?",
    options: ["Lok Sabha", "Rajya Sabha", "Legislative Council", "Senate"],
    correctAnswer: "Lok Sabha",
    category: "Social Science",
    difficulty: "easy"
  },

  // ==========================================
  // MEDIUM SECTION (30 QUESTIONS)
  // ==========================================
  {
    question: "Who was the leader of the German unification movement?",
    options: ["Giuseppe Mazzini", "Otto von Bismarck", "Count Cavour", "Napoleon Bonaparte"],
    correctAnswer: "Otto von Bismarck",
    category: "Social Science",
    difficulty: "medium"
  },
  {
    question: "Which incident led Mahatma Gandhi to call off the Non-Cooperation Movement in 1922?",
    options: ["Jallianwala Bagh Massacre", "Chauri Chaura Incident", "Dandi March", "Simon Commission"],
    correctAnswer: "Chauri Chaura Incident",
    category: "Social Science",
    difficulty: "medium"
  },
  {
    question: "In which year was the Indian Wildlife Protection Act implemented?",
    options: ["1952", "1972", "1988", "1992"],
    correctAnswer: "1972",
    category: "Social Science",
    difficulty: "medium"
  },
  {
    question: "Which sector is also known as the Service Sector?",
    options: ["Primary Sector", "Secondary Sector", "Tertiary Sector", "Quaternary Sector"],
    correctAnswer: "Tertiary Sector",
    category: "Social Science",
    difficulty: "medium"
  },
  {
    question: "Who chaired the Drafting Committee of the Indian Constitution?",
    options: ["Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel", "Dr. Rajendra Prasad"],
    correctAnswer: "Dr. B.R. Ambedkar",
    category: "Social Science",
    difficulty: "medium"
  },
  {
    question: "What is the total income of a country divided by its total population called?",
    options: ["Gross National Product", "Per Capita Income", "Net Income", "Disposable Income"],
    correctAnswer: "Per Capita Income",
    category: "Social Science",
    difficulty: "medium"
  },
  {
    question: "Which movement was launched by Mahatma Gandhi in 1930 starting with the Salt March?",
    options: ["Non-Cooperation Movement", "Civil Disobedience Movement", "Quit India Movement", "Swadeshi Movement"],
    correctAnswer: "Civil Disobedience Movement",
    category: "Social Science",
    difficulty: "medium"
  },
  {
    question: "Which power-sharing arrangement involves distribution among different levels of government?",
    options: ["Horizontal Distribution", "Vertical Distribution", "Community Government", "Coalition Government"],
    correctAnswer: "Vertical Distribution",
    category: "Social Science",
    difficulty: "medium"
  },
  {
    question: "Which crops are sown in winter (October–December) and harvested in summer (April–June)?",
    options: ["Kharif Crops", "Rabi Crops", "Zaid Crops", "Cash Crops"],
    correctAnswer: "Rabi Crops",
    category: "Social Science",
    difficulty: "medium"
  },
  {
    question: "Which crops are sown at the onset of monsoon (June–July) and harvested in September–October?",
    options: ["Kharif Crops", "Rabi Crops", "Zaid Crops", "Winter Crops"],
    correctAnswer: "Kharif Crops",
    category: "Social Science",
    difficulty: "medium"
  },
  {
    question: "Where did Mahatma Gandhi organize his first Satyagraha in India in 1916?",
    options: ["Kheda", "Champaran", "Ahmedabad", "Amritsar"],
    correctAnswer: "Champaran",
    category: "Social Science",
    difficulty: "medium"
  },
  {
    question: "Which Indian state is the leading producer of Jute in India?",
    options: ["West Bengal", "Bihar", "Assam", "Odisha"],
    correctAnswer: "West Bengal",
    category: "Social Science",
    difficulty: "medium"
  },
  {
    question: "What system of government divides power between a central authority and constituent units?",
    options: ["Unitary System", "Federalism", "Monarchy", "Dictatorship"],
    correctAnswer: "Federalism",
    category: "Social Science",
    difficulty: "medium"
  },
  {
    question: "Which body in India issues currency notes on behalf of the Central Government?",
    options: ["State Bank of India", "Reserve Bank of India", "Ministry of Finance", "NITI Aayog"],
    correctAnswer: "Reserve Bank of India",
    category: "Social Science",
    difficulty: "medium"
  },
  {
    question: "Who founded the secret society called 'Young Italy'?",
    options: ["Giuseppe Garibaldi", "Giuseppe Mazzini", "Count Cavour", "Victor Emmanuel II"],
    correctAnswer: "Giuseppe Mazzini",
    category: "Social Science",
    difficulty: "medium"
  },
  {
    question: "In which year did the Jallianwala Bagh massacre take place?",
    options: ["1915", "1919", "1921", "1928"],
    correctAnswer: "1919",
    category: "Social Science",
    difficulty: "medium"
  },
  {
    question: "Which river valley dam project was called the 'Temple of Modern India' by Jawaharlal Nehru?",
    options: ["Hirakud Dam", "Bhakra Nangal Dam", "Tehri Dam", "Sardar Sarovar Dam"],
    correctAnswer: "Bhakra Nangal Dam",
    category: "Social Science",
    difficulty: "medium"
  },
  {
    question: "What is the term for integration of national economies with the world economy?",
    options: ["Privatization", "Liberalization", "Globalisation", "Urbanization"],
    correctAnswer: "Globalisation",
    category: "Social Science",
    difficulty: "medium"
  },
  {
    question: "Which report published by UNDP compares countries based on health, education, and income?",
    options: ["World Development Report", "Human Development Report", "Global Economic Prospect", "Literacy Index Report"],
    correctAnswer: "Human Development Report",
    category: "Social Science",
    difficulty: "medium"
  },
  {
    question: "Which mineral is generated when rocks decompose leaving a residual mass of weathered material?",
    options: ["Coal", "Gold", "Bauxite", "Zinc"],
    correctAnswer: "Bauxite",
    category: "Social Science",
    difficulty: "medium"
  },
  {
    question: "What was the civil code of 1804 in France commonly known as?",
    options: ["Napoleonic Code", "French Constitution", "Jacobin Code", "Directory Code"],
    correctAnswer: "Napoleonic Code",
    category: "Social Science",
    difficulty: "medium"
  },
  {
    question: "What type of resource is solar and wind energy?",
    options: ["Non-renewable", "Flow / Renewable", "Biotic", "Non-recyclable"],
    correctAnswer: "Flow / Renewable",
    category: "Social Science",
    difficulty: "medium"
  },
  {
    question: "Which state in India contains the famous Bandhavgarh National Park?",
    options: ["Madhya Pradesh", "Gujarat", "Assam", "Kerala"],
    correctAnswer: "Madhya Pradesh",
    category: "Social Science",
    difficulty: "medium"
  },
  {
    question: "What subject list includes defense, foreign affairs, and banking in the Indian Constitution?",
    options: ["Union List", "State List", "Concurrent List", "Residuary List"],
    correctAnswer: "Union List",
    category: "Social Science",
    difficulty: "medium"
  },
  {
    question: "Which subjects like education, forests, and trade unions fall under in the Indian Constitution?",
    options: ["Union List", "State List", "Concurrent List", "Residuary List"],
    correctAnswer: "Concurrent List",
    category: "Social Science",
    difficulty: "medium"
  },
  {
    question: "What is the primary objective of the MGNREGA 2005 scheme?",
    options: ["Free healthcare", "Guaranteed 100 days of wage employment", "Free housing", "Free education"],
    correctAnswer: "Guaranteed 100 days of wage employment",
    category: "Social Science",
    difficulty: "medium"
  },
  {
    question: "Which city is considered the silicon valley / electronic capital of India?",
    options: ["Mumbai", "Bengaluru", "Hyderabad", "Chennai"],
    correctAnswer: "Bengaluru",
    category: "Social Science",
    difficulty: "medium"
  },
  {
    question: "Which treaty recognized Greece as an independent nation in 1832?",
    options: ["Treaty of Vienna", "Treaty of Constantinople", "Treaty of Versailles", "Treaty of Paris"],
    correctAnswer: "Treaty of Constantinople",
    category: "Social Science",
    difficulty: "medium"
  },
  {
    question: "What type of forest is directly managed by government bodies for timber conservation?",
    options: ["Reserved Forests", "Protected Forests", "Unclassed Forests", "Private Forests"],
    correctAnswer: "Reserved Forests",
    category: "Social Science",
    difficulty: "medium"
  },
  {
    question: "What is the situation where more people work in a job than actually required called?",
    options: ["Seasonal Unemployment", "Disguised Unemployment", "Structural Unemployment", "Frictional Unemployment"],
    correctAnswer: "Disguised Unemployment",
    category: "Social Science",
    difficulty: "medium"
  },

  // ==========================================
  // HARD SECTION (30 QUESTIONS)
  // ==========================================
  {
    question: "Who painted the series of four prints titled 'Democratic and Social Republics' in 1848?",
    options: ["Frederic Sorrieu", "Louis Philippe", "Delacroix", "Johann Gottfried"],
    correctAnswer: "Frederic Sorrieu",
    category: "Social Science",
    difficulty: "hard"
  },
  {
    question: "Which Allegory represented the German Nation wearing a crown of oak leaves?",
    options: ["Marianne", "Germania", "Britannia", "Columbia"],
    correctAnswer: "Germania",
    category: "Social Science",
    difficulty: "hard"
  },
  {
    question: "What French female allegory symbolized the French Republic carrying a red cap and tricolor?",
    options: ["Germania", "Marianne", "Athena", "Liberty"],
    correctAnswer: "Marianne",
    category: "Social Science",
    difficulty: "hard"
  },
  {
    question: "What customs union was formed in 1834 at the initiative of Prussia to abolish tariff barriers?",
    options: ["Zollverein", "Europol", "Consulate", "Estates General"],
    correctAnswer: "Zollverein",
    category: "Social Science",
    difficulty: "hard"
  },
  {
    question: "Which conference hosted by Austrian Chancellor Duke Metternich took place in 1815?",
    options: ["Congress of Berlin", "Congress of Vienna", "Treaty of London", "Versailles Pact"],
    correctAnswer: "Congress of Vienna",
    category: "Social Science",
    difficulty: "hard"
  },
  {
    question: "Who brought woodblock printing knowledge from China back to Italy in 1295?",
    options: ["Gutenberg", "Marco Polo", "Erasmus", "Petrarch"],
    correctAnswer: "Marco Polo",
    category: "Social Science",
    difficulty: "hard"
  },
  {
    question: "Who invented the first mechanical printing press in Mainz, Germany in the 1430s?",
    options: ["Johannes Gutenberg", "William Caxton", "Martin Luther", "John Locke"],
    correctAnswer: "Johannes Gutenberg",
    category: "Social Science",
    difficulty: "hard"
  },
  {
    question: "What was the first book printed by Johannes Gutenberg?",
    options: ["The Quran", "The Bible", "The Canterbury Tales", "Dicta"],
    correctAnswer: "The Bible",
    category: "Social Science",
    difficulty: "hard"
  },
  {
    question: "Who wrote 'Sambad Kaumudi' in 1821 to express reformist ideas in India?",
    options: ["Swami Vivekananda", "Raja Ram Mohan Roy", "Ishwar Chandra Vidyasagar", "Jyotiba Phule"],
    correctAnswer: "Raja Ram Mohan Roy",
    category: "Social Science",
    difficulty: "hard"
  },
  {
    question: "Who wrote the famous book 'Gulamgiri' in 1871 criticizing the caste system?",
    options: ["Jyotiba Phule", "Dr. B.R. Ambedkar", "E.V. Ramaswamy", "Tarabai Shinde"],
    correctAnswer: "Jyotiba Phule",
    category: "Social Science",
    difficulty: "hard"
  },
  {
    question: "Where was the first Indian Jute Mill set up in 1855?",
    options: ["Risra, Bengal", "Bombay", "Kanpur", "Madras"],
    correctAnswer: "Risra, Bengal",
    category: "Social Science",
    difficulty: "hard"
  },
  {
    question: "Which port was the most prominent pre-colonial trade hub on the Gujarat coast?",
    options: ["Surat", "Hooghly", "Masulipatnam", "Cochin"],
    correctAnswer: "Surat",
    category: "Social Science",
    difficulty: "hard"
  },
  {
    question: "What were paid servants appointed by the East India Company to supervise weavers called?",
    options: ["Gomasthas", "Sepoys", "Zamindars", "Jobbers"],
    correctAnswer: "Gomasthas",
    category: "Social Science",
    difficulty: "hard"
  },
  {
    question: "Which iron and steel plant in India was established by Jamsetji Tata in 1912?",
    options: ["TISCO (Jamshedpur)", "SAIL (Bhilai)", "Rourkela Steel Plant", "Durgapur Steel Plant"],
    correctAnswer: "TISCO (Jamshedpur)",
    category: "Social Science",
    difficulty: "hard"
  },
  {
    question: "In which year did the famous Inland Emigration Act affect tea plantation workers in Assam?",
    options: ["1859", "1885", "1905", "1919"],
    correctAnswer: "1859",
    category: "Social Science",
    difficulty: "hard"
  },
  {
    question: "What system of power sharing exists among different organs like Legislature, Executive, and Judiciary?",
    options: ["Horizontal Distribution", "Vertical Distribution", "Federal Distribution", "Diagonal Distribution"],
    correctAnswer: "Horizontal Distribution",
    category: "Social Science",
    difficulty: "hard"
  },
  {
    question: "Which country successfully resolved ethnic tensions through a unique 'Community Government' model?",
    options: ["Sri Lanka", "Belgium", "Lebanon", "Yugoslavia"],
    correctAnswer: "Belgium",
    category: "Social Science",
    difficulty: "hard"
  },
  {
    question: "In which year was the Majoritarian Act passed in Sri Lanka recognizing Sinhala as the sole official language?",
    options: ["1948", "1956", "1965", "1972"],
    correctAnswer: "1956",
    category: "Social Science",
    difficulty: "hard"
  },
  {
    question: "Which constitutional amendment in 1992 strengthened local self-government (Panchayati Raj) in urban areas?",
    options: ["71st Amendment", "73rd Amendment", "74th Amendment", "86th Amendment"],
    correctAnswer: "74th Amendment",
    category: "Social Science",
    difficulty: "hard"
  },
  {
    question: "Which constitutional amendment in 1992 decentralized power to rural local bodies (Panchayats)?",
    options: ["42nd Amendment", "44th Amendment", "73rd Amendment", "74th Amendment"],
    correctAnswer: "73rd Amendment",
    category: "Social Science",
    difficulty: "hard"
  },
  {
    question: "What mineral is extracted from the Monazite sands of Kerala?",
    options: ["Uranium", "Thorium", "Coal", "Bauxite"],
    correctAnswer: "Thorium",
    category: "Social Science",
    difficulty: "hard"
  },
  {
    question: "Which belt in India is world-renowned for high-grade mica deposits?",
    options: ["Koderma-Gaya-Hazaribagh (Jharkhand)", "Durg-Bastar-Chandrapur", "Ballari-Chitradurga", "Khetri Belt"],
    correctAnswer: "Koderma-Gaya-Hazaribagh (Jharkhand)",
    category: "Social Science",
    difficulty: "hard"
  },
  {
    question: "Which region in India holds nearly 70% of the country's coal reserves?",
    options: ["Damodar Valley", "Godavari Valley", "Mahanadi Valley", "Son Valley"],
    correctAnswer: "Damodar Valley",
    category: "Social Science",
    difficulty: "hard"
  },
  {
    question: "Where is the oldest operational oil refinery in India located?",
    options: ["Bombay High", "Digboi (Assam)", "Ankleshwar (Gujarat)", "Koyali"],
    correctAnswer: "Digboi (Assam)",
    category: "Social Science",
    difficulty: "hard"
  },
  {
    question: "Which transport corridor connects Silchar in Assam to Porbandar in Gujarat?",
    options: ["North-South Corridor", "East-West Corridor", "Golden Quadrilateral", "National Highway 44"],
    correctAnswer: "East-West Corridor",
    category: "Social Science",
    difficulty: "hard"
  },
  {
    question: "What term describes the ratio of female to male population per 1000 males?",
    options: ["Sex Ratio", "Literacy Rate", "Dependency Ratio", "Fertility Rate"],
    correctAnswer: "Sex Ratio",
    category: "Social Science",
    difficulty: "hard"
  },
  {
    question: "What is an asset pledged by a borrower to a lender as a security guarantee until the loan is repaid?",
    options: ["Collateral", "Credit", "Deposit", "Debenture"],
    correctAnswer: "Collateral",
    category: "Social Science",
    difficulty: "hard"
  },
  {
    question: "What organization sets global trade rules and aims to liberalize international trade?",
    options: ["IMF", "World Bank", "World Trade Organization (WTO)", "UNESCO"],
    correctAnswer: "World Trade Organization (WTO)",
    category: "Social Science",
    difficulty: "hard"
  },
  {
    question: "Which law enacted in 1986 protects consumer rights in India?",
    options: ["COPRA (Consumer Protection Act)", "RTI Act", "FSSAI Act", "Essential Commodities Act"],
    correctAnswer: "COPRA (Consumer Protection Act)",
    category: "Social Science",
    difficulty: "hard"
  },
  {
    question: "What metric measures the proportion of literate population in the 7-and-above age group?",
    options: ["Gross Enrolment Ratio", "Literacy Rate", "Net Attendance Ratio", "Infant Mortality Rate"],
    correctAnswer: "Literacy Rate",
    category: "Social Science",
    difficulty: "hard"
  }
];

// Register under both sst and formal category keys
window.QuizQuestionPool["sst"] = sstQuestions;
window.QuizQuestionPool["Social Science"] = sstQuestions;