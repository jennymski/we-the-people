// US State Data — capitals, governors, and senators
// Current as of: April 2026
// Reflects 2024 election results (senators sworn in Jan 2025)

const STATE_DATA = {
  "Alabama": {
    capital: "Montgomery",
    governor: "Kay Ivey",
    senators: ["Tommy Tuberville", "Katie Britt"]
  },
  "Alaska": {
    capital: "Juneau",
    governor: "Mike Dunleavy",
    senators: ["Lisa Murkowski", "Dan Sullivan"]
  },
  "Arizona": {
    capital: "Phoenix",
    governor: "Katie Hobbs",
    senators: ["Ruben Gallego", "Mark Kelly"]
  },
  "Arkansas": {
    capital: "Little Rock",
    governor: "Sarah Huckabee Sanders",
    senators: ["John Boozman", "Tom Cotton"]
  },
  "California": {
    capital: "Sacramento",
    governor: "Gavin Newsom",
    senators: ["Adam Schiff", "Alex Padilla"]
  },
  "Colorado": {
    capital: "Denver",
    governor: "Jared Polis",
    senators: ["Michael Bennet", "John Hickenlooper"]
  },
  "Connecticut": {
    capital: "Hartford",
    governor: "Ned Lamont",
    senators: ["Richard Blumenthal", "Chris Murphy"]
  },
  "Delaware": {
    capital: "Dover",
    governor: "Matt Meyer",
    senators: ["Chris Coons", "Lisa Blunt Rochester"]
  },
  "Florida": {
    capital: "Tallahassee",
    governor: "Ron DeSantis",
    senators: ["Rick Scott", "Ashley Moody"]
  },
  "Georgia": {
    capital: "Atlanta",
    governor: "Brian Kemp",
    senators: ["Jon Ossoff", "Raphael Warnock"]
  },
  "Hawaii": {
    capital: "Honolulu",
    governor: "Josh Green",
    senators: ["Mazie Hirono", "Brian Schatz"]
  },
  "Idaho": {
    capital: "Boise",
    governor: "Brad Little",
    senators: ["Mike Crapo", "Jim Risch"]
  },
  "Illinois": {
    capital: "Springfield",
    governor: "JB Pritzker",
    senators: ["Dick Durbin", "Tammy Duckworth"]
  },
  "Indiana": {
    capital: "Indianapolis",
    governor: "Mike Braun",
    senators: ["Todd Young", "Jim Banks"]
  },
  "Iowa": {
    capital: "Des Moines",
    governor: "Kim Reynolds",
    senators: ["Chuck Grassley", "Joni Ernst"]
  },
  "Kansas": {
    capital: "Topeka",
    governor: "Laura Kelly",
    senators: ["Jerry Moran", "Roger Marshall"]
  },
  "Kentucky": {
    capital: "Frankfort",
    governor: "Andy Beshear",
    senators: ["Mitch McConnell", "Rand Paul"]
  },
  "Louisiana": {
    capital: "Baton Rouge",
    governor: "Jeff Landry",
    senators: ["Bill Cassidy", "John Kennedy"]
  },
  "Maine": {
    capital: "Augusta",
    governor: "Janet Mills",
    senators: ["Susan Collins", "Angus King"]
  },
  "Maryland": {
    capital: "Annapolis",
    governor: "Wes Moore",
    senators: ["Chris Van Hollen", "Angela Alsobrooks"]
  },
  "Massachusetts": {
    capital: "Boston",
    governor: "Maura Healey",
    senators: ["Elizabeth Warren", "Ed Markey"]
  },
  "Michigan": {
    capital: "Lansing",
    governor: "Gretchen Whitmer",
    senators: ["Gary Peters", "Elissa Slotkin"]
  },
  "Minnesota": {
    capital: "Saint Paul",
    governor: "Tim Walz",
    senators: ["Amy Klobuchar", "Tina Smith"]
  },
  "Mississippi": {
    capital: "Jackson",
    governor: "Tate Reeves",
    senators: ["Roger Wicker", "Cindy Hyde-Smith"]
  },
  "Missouri": {
    capital: "Jefferson City",
    governor: "Mike Kehoe",
    senators: ["Josh Hawley", "Eric Schmitt"]
  },
  "Montana": {
    capital: "Helena",
    governor: "Greg Gianforte",
    senators: ["Steve Daines", "Tim Sheehy"]
  },
  "Nebraska": {
    capital: "Lincoln",
    governor: "Jim Pillen",
    senators: ["Deb Fischer", "Pete Ricketts"]
  },
  "Nevada": {
    capital: "Carson City",
    governor: "Joe Lombardo",
    senators: ["Catherine Cortez Masto", "Jacky Rosen"]
  },
  "New Hampshire": {
    capital: "Concord",
    governor: "Kelly Ayotte",
    senators: ["Jeanne Shaheen", "Maggie Hassan"]
  },
  "New Jersey": {
    capital: "Trenton",
    governor: "Phil Murphy",
    senators: ["Cory Booker", "Andy Kim"]
  },
  "New Mexico": {
    capital: "Santa Fe",
    governor: "Michelle Lujan Grisham",
    senators: ["Martin Heinrich", "Ben Ray Lujan"]
  },
  "New York": {
    capital: "Albany",
    governor: "Kathy Hochul",
    senators: ["Kirsten Gillibrand", "Chuck Schumer"]
  },
  "North Carolina": {
    capital: "Raleigh",
    governor: "Josh Stein",
    senators: ["Thom Tillis", "Ted Budd"]
  },
  "North Dakota": {
    capital: "Bismarck",
    governor: "Kelly Armstrong",
    senators: ["John Hoeven", "Kevin Cramer"]
  },
  "Ohio": {
    capital: "Columbus",
    governor: "Mike DeWine",
    senators: ["Bernie Moreno", "Jon Husted"]
  },
  "Oklahoma": {
    capital: "Oklahoma City",
    governor: "Kevin Stitt",
    senators: ["James Lankford", "Markwayne Mullin"]
  },
  "Oregon": {
    capital: "Salem",
    governor: "Tina Kotek",
    senators: ["Ron Wyden", "Jeff Merkley"]
  },
  "Pennsylvania": {
    capital: "Harrisburg",
    governor: "Josh Shapiro",
    senators: ["Dave McCormick", "John Fetterman"]
  },
  "Rhode Island": {
    capital: "Providence",
    governor: "Dan McKee",
    senators: ["Jack Reed", "Sheldon Whitehouse"]
  },
  "South Carolina": {
    capital: "Columbia",
    governor: "Henry McMaster",
    senators: ["Lindsey Graham", "Tim Scott"]
  },
  "South Dakota": {
    capital: "Pierre",
    governor: "Larry Rhoden",
    senators: ["John Thune", "Mike Rounds"]
  },
  "Tennessee": {
    capital: "Nashville",
    governor: "Bill Lee",
    senators: ["Marsha Blackburn", "Bill Hagerty"]
  },
  "Texas": {
    capital: "Austin",
    governor: "Greg Abbott",
    senators: ["John Cornyn", "Ted Cruz"]
  },
  "Utah": {
    capital: "Salt Lake City",
    governor: "Spencer Cox",
    senators: ["Mike Lee", "John Curtis"]
  },
  "Vermont": {
    capital: "Montpelier",
    governor: "Phil Scott",
    senators: ["Bernie Sanders", "Peter Welch"]
  },
  "Virginia": {
    capital: "Richmond",
    governor: "Glenn Youngkin",
    senators: ["Mark Warner", "Tim Kaine"]
  },
  "Washington": {
    capital: "Olympia",
    governor: "Bob Ferguson",
    senators: ["Maria Cantwell", "Patty Murray"]
  },
  "West Virginia": {
    capital: "Charleston",
    governor: "Patrick Morrisey",
    senators: ["Shelley Moore Capito", "Jim Justice"]
  },
  "Wisconsin": {
    capital: "Madison",
    governor: "Tony Evers",
    senators: ["Tammy Baldwin", "Ron Johnson"]
  },
  "Wyoming": {
    capital: "Cheyenne",
    governor: "Mark Gordon",
    senators: ["John Barrasso", "Cynthia Lummis"]
  }
};
