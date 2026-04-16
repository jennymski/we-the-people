// We the People (and Winter) — civics question bank
// Source: USCIS 100 civics questions for the naturalization test (rev. 01/19)
// Customized for: Arizona | Current officials as of: April 2026
//
// Fields:
//   id, question, answer (single best — used for quiz choices),
//   fullAnswer (ALL acceptable USCIS answers — shown in reference + any counts as correct),
//   category (for distractor selection)

const QUESTIONS = [
  // ===== A: Principles of American Democracy =====
  { id: 1,  question: "What is the supreme law of the land?",
    answer: "the Constitution",
    fullAnswer: ["the Constitution"],
    category: "document-law" },

  { id: 2,  question: "What does the Constitution do?",
    answer: "sets up the government",
    fullAnswer: ["sets up the government", "defines the government", "protects basic rights of Americans"],
    category: "concept" },

  { id: 3,  question: "The idea of self-government is in the first three words of the Constitution. What are these words?",
    answer: "We the People",
    fullAnswer: ["We the People"],
    category: "concept" },

  { id: 4,  question: "What is an amendment?",
    answer: "a change to the Constitution",
    fullAnswer: ["a change to the Constitution", "an addition to the Constitution"],
    category: "concept" },

  { id: 5,  question: "What do we call the first ten amendments to the Constitution?",
    answer: "the Bill of Rights",
    fullAnswer: ["the Bill of Rights"],
    category: "document-law" },

  { id: 6,  question: "What is one right or freedom from the First Amendment?",
    answer: "speech",
    fullAnswer: ["speech", "religion", "assembly", "press", "petition the government"],
    category: "concept" },

  { id: 7,  question: "How many amendments does the Constitution have?",
    answer: "27",
    fullAnswer: ["27"],
    category: "number" },

  { id: 8,  question: "What did the Declaration of Independence do?",
    answer: "announced our independence from Great Britain",
    fullAnswer: ["announced our independence from Great Britain", "declared our independence from Great Britain", "said that the United States is free from Great Britain"],
    category: "action-description" },

  { id: 9,  question: "What are two rights in the Declaration of Independence?",
    answer: "life and liberty",
    fullAnswer: ["life and liberty", "life and pursuit of happiness", "liberty and pursuit of happiness"],
    category: "concept" },

  { id: 10, question: "What is freedom of religion?",
    answer: "You can practice any religion, or not practice a religion.",
    fullAnswer: ["You can practice any religion, or not practice a religion."],
    category: "action-description" },

  { id: 11, question: "What is the economic system in the United States?",
    answer: "capitalist economy",
    fullAnswer: ["capitalist economy", "market economy"],
    category: "concept" },

  { id: 12, question: "What is the \u201Crule of law\u201D?",
    answer: "Everyone must follow the law.",
    fullAnswer: ["Everyone must follow the law.", "Leaders must obey the law.", "Government must obey the law.", "No one is above the law."],
    category: "concept" },

  // ===== B: System of Government =====
  { id: 13, question: "Name one branch or part of the government.",
    answer: "Congress / legislative",
    fullAnswer: ["Congress / legislative", "President / executive", "the courts / judicial"],
    category: "group-body" },

  { id: 14, question: "What stops one branch of government from becoming too powerful?",
    answer: "checks and balances",
    fullAnswer: ["checks and balances", "separation of powers"],
    category: "concept" },

  { id: 15, question: "Who is in charge of the executive branch?",
    answer: "the President",
    fullAnswer: ["the President"],
    category: "person" },

  { id: 16, question: "Who makes federal laws?",
    answer: "Congress",
    fullAnswer: ["Congress", "the Senate and House of Representatives", "the U.S. or national legislature"],
    category: "group-body" },

  { id: 17, question: "What are the two parts of the U.S. Congress?",
    answer: "the Senate and House of Representatives",
    fullAnswer: ["the Senate and House of Representatives"],
    category: "group-body" },

  { id: 18, question: "How many U.S. Senators are there?",
    answer: "100",
    fullAnswer: ["100"],
    category: "number" },

  { id: 19, question: "We elect a U.S. Senator for how many years?",
    answer: "6",
    fullAnswer: ["6"],
    category: "number" },

  { id: 20, question: "Who is one of your state\u2019s U.S. Senators now?",
    answer: "Mark Kelly",
    fullAnswer: ["Mark Kelly", "Ruben Gallego"],
    category: "person" },

  { id: 21, question: "The House of Representatives has how many voting members?",
    answer: "435",
    fullAnswer: ["435"],
    category: "number" },

  { id: 22, question: "We elect a U.S. Representative for how many years?",
    answer: "2",
    fullAnswer: ["2"],
    category: "number" },

  { id: 24, question: "Who does a U.S. Senator represent?",
    answer: "all people of the state",
    fullAnswer: ["all people of the state"],
    category: "concept" },

  { id: 25, question: "Why do some states have more Representatives than other states?",
    answer: "because of the state\u2019s population",
    fullAnswer: ["because of the state\u2019s population", "because they have more people", "because some states have more people"],
    category: "concept" },

  { id: 26, question: "We elect a President for how many years?",
    answer: "4",
    fullAnswer: ["4"],
    category: "number" },

  { id: 27, question: "In what month do we vote for President?",
    answer: "November",
    fullAnswer: ["November"],
    category: "date" },

  { id: 28, question: "What is the name of the President of the United States now?",
    answer: "Donald Trump",
    fullAnswer: ["Donald Trump", "Trump"],
    category: "person" },

  { id: 29, question: "What is the name of the Vice President of the United States now?",
    answer: "JD Vance",
    fullAnswer: ["JD Vance", "Vance"],
    category: "person" },

  { id: 30, question: "If the President can no longer serve, who becomes President?",
    answer: "the Vice President",
    fullAnswer: ["the Vice President"],
    category: "person" },

  { id: 31, question: "If both the President and the Vice President can no longer serve, who becomes President?",
    answer: "the Speaker of the House",
    fullAnswer: ["the Speaker of the House"],
    category: "person" },

  { id: 32, question: "Who is the Commander in Chief of the military?",
    answer: "the President",
    fullAnswer: ["the President"],
    category: "person" },

  { id: 33, question: "Who signs bills to become laws?",
    answer: "the President",
    fullAnswer: ["the President"],
    category: "person" },

  { id: 34, question: "Who vetoes bills?",
    answer: "the President",
    fullAnswer: ["the President"],
    category: "person" },

  { id: 35, question: "What does the President\u2019s Cabinet do?",
    answer: "advises the President",
    fullAnswer: ["advises the President"],
    category: "concept" },

  { id: 36, question: "What are two Cabinet-level positions?",
    answer: "Secretary of State and Secretary of Defense",
    fullAnswer: ["Secretary of State and Secretary of Defense", "Secretary of the Treasury and Attorney General", "Secretary of Education and Secretary of Energy", "Secretary of Homeland Security and Secretary of Labor"],
    category: "group-body" },

  { id: 37, question: "What does the judicial branch do?",
    answer: "reviews laws",
    fullAnswer: ["reviews laws", "explains laws", "resolves disputes", "decides if a law goes against the Constitution"],
    category: "action-description" },

  { id: 38, question: "What is the highest court in the United States?",
    answer: "the Supreme Court",
    fullAnswer: ["the Supreme Court"],
    category: "group-body" },

  { id: 39, question: "How many justices are on the Supreme Court?",
    answer: "9",
    fullAnswer: ["9"],
    category: "number" },

  { id: 40, question: "Who is the Chief Justice of the United States now?",
    answer: "John Roberts",
    fullAnswer: ["John Roberts", "John G. Roberts, Jr."],
    category: "person" },

  { id: 41, question: "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
    answer: "to print money",
    fullAnswer: ["to print money", "to declare war", "to create an army", "to make treaties"],
    category: "concept" },

  { id: 42, question: "Under our Constitution, some powers belong to the states. What is one power of the states?",
    answer: "provide schooling and education",
    fullAnswer: ["provide schooling and education", "provide protection (police)", "provide safety (fire departments)", "give a driver\u2019s license", "approve zoning and land use"],
    category: "concept" },

  { id: 43, question: "Who is the Governor of your state now?",
    answer: "Katie Hobbs",
    fullAnswer: ["Katie Hobbs"],
    category: "person" },

  { id: 44, question: "What is the capital of your state?",
    answer: "Phoenix",
    fullAnswer: ["Phoenix"],
    category: "place" },

  { id: 45, question: "What are the two major political parties in the United States?",
    answer: "Democratic and Republican",
    fullAnswer: ["Democratic and Republican"],
    category: "group-body" },

  { id: 46, question: "What is the political party of the President now?",
    answer: "Republican",
    fullAnswer: ["Republican"],
    category: "concept" },

  { id: 47, question: "What is the name of the Speaker of the House of Representatives now?",
    answer: "Mike Johnson",
    fullAnswer: ["Mike Johnson"],
    category: "person" },

  // ===== C: Rights and Responsibilities =====
  { id: 48, question: "There are four amendments to the Constitution about who can vote. Describe one of them.",
    answer: "Citizens 18 and older can vote.",
    fullAnswer: ["Citizens 18 and older can vote.", "You don\u2019t have to pay a poll tax to vote.", "Any citizen can vote (women and men can vote).", "A male citizen of any race can vote."],
    category: "concept" },

  { id: 49, question: "What is one responsibility that is only for United States citizens?",
    answer: "serve on a jury",
    fullAnswer: ["serve on a jury", "vote in a federal election"],
    category: "concept" },

  { id: 50, question: "Name one right only for United States citizens.",
    answer: "vote in a federal election",
    fullAnswer: ["vote in a federal election", "run for federal office"],
    category: "concept" },

  { id: 51, question: "What are two rights of everyone living in the United States?",
    answer: "freedom of speech and freedom of religion",
    fullAnswer: ["freedom of speech and freedom of religion", "freedom of assembly and freedom of expression", "freedom of speech and the right to bear arms", "freedom of religion and freedom to petition the government"],
    category: "concept" },

  { id: 52, question: "What do we show loyalty to when we say the Pledge of Allegiance?",
    answer: "the United States",
    fullAnswer: ["the United States", "the flag"],
    category: "concept" },

  { id: 53, question: "What is one promise you make when you become a United States citizen?",
    answer: "give up loyalty to other countries",
    fullAnswer: ["give up loyalty to other countries", "defend the Constitution and laws of the United States", "obey the laws of the United States", "serve in the U.S. military if needed", "serve the nation if needed", "be loyal to the United States"],
    category: "concept" },

  { id: 54, question: "How old do citizens have to be to vote for President?",
    answer: "18 and older",
    fullAnswer: ["18 and older"],
    category: "number" },

  { id: 55, question: "What are two ways that Americans can participate in their democracy?",
    answer: "vote and join a political party",
    fullAnswer: ["vote and join a political party", "help with a campaign and join a civic group", "call Senators and Representatives and run for office", "write to a newspaper and publicly support or oppose an issue or policy"],
    category: "concept" },

  { id: 56, question: "When is the last day you can send in federal income tax forms?",
    answer: "April 15",
    fullAnswer: ["April 15"],
    category: "date" },

  { id: 57, question: "When must all men register for the Selective Service?",
    answer: "between 18 and 26",
    fullAnswer: ["at age 18", "between 18 and 26"],
    category: "number" },

  // ===== AMERICAN HISTORY — A: Colonial Period and Independence =====
  { id: 58, question: "What is one reason colonists came to America?",
    answer: "religious freedom",
    fullAnswer: ["freedom", "political liberty", "religious freedom", "economic opportunity", "practice their religion", "escape persecution"],
    category: "concept" },

  { id: 59, question: "Who lived in America before the Europeans arrived?",
    answer: "American Indians",
    fullAnswer: ["American Indians", "Native Americans"],
    category: "group-body" },

  { id: 60, question: "What group of people was taken to America and sold as slaves?",
    answer: "Africans",
    fullAnswer: ["Africans", "people from Africa"],
    category: "group-body" },

  { id: 61, question: "Why did the colonists fight the British?",
    answer: "because of high taxes (taxation without representation)",
    fullAnswer: ["because of high taxes (taxation without representation)", "because the British army stayed in their houses", "because they didn\u2019t have self-government"],
    category: "concept" },

  { id: 62, question: "Who wrote the Declaration of Independence?",
    answer: "Thomas Jefferson",
    fullAnswer: ["Thomas Jefferson"],
    category: "person" },

  { id: 63, question: "When was the Declaration of Independence adopted?",
    answer: "July 4, 1776",
    fullAnswer: ["July 4, 1776"],
    category: "date" },

  { id: 64, question: "There were 13 original states. Name three.",
    answer: "Virginia, Massachusetts, and New York",
    fullAnswer: ["Virginia, Massachusetts, and New York", "Pennsylvania, Delaware, and Georgia", "Connecticut, New Jersey, and Maryland", "New Hampshire, Rhode Island, and North Carolina"],
    category: "place" },

  { id: 65, question: "What happened at the Constitutional Convention?",
    answer: "The Constitution was written.",
    fullAnswer: ["The Constitution was written.", "The Founding Fathers wrote the Constitution."],
    category: "action-description" },

  { id: 66, question: "When was the Constitution written?",
    answer: "1787",
    fullAnswer: ["1787"],
    category: "date" },

  { id: 67, question: "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
    answer: "James Madison",
    fullAnswer: ["James Madison", "Alexander Hamilton", "John Jay", "Publius"],
    category: "person" },

  { id: 68, question: "What is one thing Benjamin Franklin is famous for?",
    answer: "U.S. diplomat",
    fullAnswer: ["U.S. diplomat", "oldest member of the Constitutional Convention", "first Postmaster General of the United States", "writer of \u201CPoor Richard\u2019s Almanac\u201D", "started the first free libraries"],
    category: "action-description" },

  { id: 69, question: "Who is the \u201CFather of Our Country\u201D?",
    answer: "George Washington",
    fullAnswer: ["George Washington"],
    category: "person" },

  { id: 70, question: "Who was the first President?",
    answer: "George Washington",
    fullAnswer: ["George Washington"],
    category: "person" },

  // ===== B: 1800s =====
  { id: 71, question: "What territory did the United States buy from France in 1803?",
    answer: "the Louisiana Territory",
    fullAnswer: ["the Louisiana Territory", "Louisiana"],
    category: "place" },

  { id: 72, question: "Name one war fought by the United States in the 1800s.",
    answer: "Civil War",
    fullAnswer: ["War of 1812", "Mexican-American War", "Civil War", "Spanish-American War"],
    category: "event-war" },

  { id: 73, question: "Name the U.S. war between the North and the South.",
    answer: "the Civil War",
    fullAnswer: ["the Civil War", "the War between the States"],
    category: "event-war" },

  { id: 74, question: "Name one problem that led to the Civil War.",
    answer: "slavery",
    fullAnswer: ["slavery", "economic reasons", "states\u2019 rights"],
    category: "concept" },

  { id: 75, question: "What was one important thing that Abraham Lincoln did?",
    answer: "freed the slaves (Emancipation Proclamation)",
    fullAnswer: ["freed the slaves (Emancipation Proclamation)", "saved (or preserved) the Union", "led the United States during the Civil War"],
    category: "action-description" },

  { id: 76, question: "What did the Emancipation Proclamation do?",
    answer: "freed the slaves",
    fullAnswer: ["freed the slaves", "freed slaves in the Confederacy", "freed slaves in the Confederate states", "freed slaves in most Southern states"],
    category: "action-description" },

  { id: 77, question: "What did Susan B. Anthony do?",
    answer: "fought for women\u2019s rights",
    fullAnswer: ["fought for women\u2019s rights", "fought for civil rights"],
    category: "action-description" },

  // ===== C: Recent American History =====
  { id: 78, question: "Name one war fought by the United States in the 1900s.",
    answer: "World War II",
    fullAnswer: ["World War I", "World War II", "Korean War", "Vietnam War", "Persian Gulf War"],
    category: "event-war" },

  { id: 79, question: "Who was President during World War I?",
    answer: "Woodrow Wilson",
    fullAnswer: ["Woodrow Wilson"],
    category: "person" },

  { id: 80, question: "Who was President during the Great Depression and World War II?",
    answer: "Franklin Roosevelt",
    fullAnswer: ["Franklin Roosevelt"],
    category: "person" },

  { id: 81, question: "Who did the United States fight in World War II?",
    answer: "Japan, Germany, and Italy",
    fullAnswer: ["Japan, Germany, and Italy"],
    category: "group-body" },

  { id: 82, question: "Before he was President, Eisenhower was a general. What war was he in?",
    answer: "World War II",
    fullAnswer: ["World War II"],
    category: "event-war" },

  { id: 83, question: "During the Cold War, what was the main concern of the United States?",
    answer: "Communism",
    fullAnswer: ["Communism"],
    category: "concept" },

  { id: 84, question: "What movement tried to end racial discrimination?",
    answer: "the civil rights movement",
    fullAnswer: ["the civil rights movement"],
    category: "concept" },

  { id: 85, question: "What did Martin Luther King, Jr. do?",
    answer: "fought for civil rights",
    fullAnswer: ["fought for civil rights", "worked for equality for all Americans"],
    category: "action-description" },

  { id: 86, question: "What major event happened on September 11, 2001, in the United States?",
    answer: "Terrorists attacked the United States.",
    fullAnswer: ["Terrorists attacked the United States."],
    category: "action-description" },

  { id: 87, question: "Name one American Indian tribe in the United States.",
    answer: "Cherokee",
    fullAnswer: ["Cherokee", "Navajo", "Sioux", "Chippewa", "Choctaw", "Pueblo", "Apache", "Iroquois", "Creek", "Blackfeet", "Seminole", "Cheyenne", "Arawak", "Shawnee", "Mohegan", "Huron", "Oneida", "Lakota", "Crow", "Teton", "Hopi", "Inuit"],
    category: "group-body" },

  // ===== INTEGRATED CIVICS — A: Geography =====
  { id: 88, question: "Name one of the two longest rivers in the United States.",
    answer: "Mississippi River",
    fullAnswer: ["Missouri River", "Mississippi River"],
    category: "place" },

  { id: 89, question: "What ocean is on the West Coast of the United States?",
    answer: "Pacific Ocean",
    fullAnswer: ["Pacific Ocean"],
    category: "place" },

  { id: 90, question: "What ocean is on the East Coast of the United States?",
    answer: "Atlantic Ocean",
    fullAnswer: ["Atlantic Ocean"],
    category: "place" },

  { id: 91, question: "Name one U.S. territory.",
    answer: "Puerto Rico",
    fullAnswer: ["Puerto Rico", "U.S. Virgin Islands", "American Samoa", "Northern Mariana Islands", "Guam"],
    category: "place" },

  { id: 92, question: "Name one state that borders Canada.",
    answer: "Michigan",
    fullAnswer: ["Maine", "New Hampshire", "Vermont", "New York", "Pennsylvania", "Ohio", "Michigan", "Minnesota", "North Dakota", "Montana", "Idaho", "Washington", "Alaska"],
    category: "place" },

  { id: 93, question: "Name one state that borders Mexico.",
    answer: "Arizona",
    fullAnswer: ["California", "Arizona", "New Mexico", "Texas"],
    category: "place" },

  { id: 94, question: "What is the capital of the United States?",
    answer: "Washington, D.C.",
    fullAnswer: ["Washington, D.C."],
    category: "place" },

  { id: 95, question: "Where is the Statue of Liberty?",
    answer: "New York Harbor",
    fullAnswer: ["New York Harbor", "Liberty Island", "New Jersey", "near New York City", "on the Hudson River"],
    category: "place" },

  // ===== B: Symbols =====
  { id: 96, question: "Why does the flag have 13 stripes?",
    answer: "because there were 13 original colonies",
    fullAnswer: ["because there were 13 original colonies", "because the stripes represent the original colonies"],
    category: "concept" },

  { id: 97, question: "Why does the flag have 50 stars?",
    answer: "because there is one star for each state",
    fullAnswer: ["because there is one star for each state", "because each star represents a state", "because there are 50 states"],
    category: "concept" },

  { id: 98, question: "What is the name of the national anthem?",
    answer: "The Star-Spangled Banner",
    fullAnswer: ["The Star-Spangled Banner"],
    category: "document-law" },

  // ===== C: Holidays =====
  { id: 99,  question: "When do we celebrate Independence Day?",
    answer: "July 4",
    fullAnswer: ["July 4"],
    category: "date" },

  { id: 100, question: "Name two national U.S. holidays.",
    answer: "Thanksgiving and Independence Day",
    fullAnswer: ["Thanksgiving and Independence Day", "Memorial Day and Veterans Day", "Labor Day and Christmas", "Presidents\u2019 Day and Martin Luther King, Jr. Day"],
    category: "date" }
];

if (typeof window !== "undefined") window.QUESTIONS = QUESTIONS;
