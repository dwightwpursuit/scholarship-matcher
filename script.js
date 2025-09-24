// This array will hold all our scholarship data.
const scholarships = [
  // --- Computer Science Scholarships ---
  {
    name: "Amazon Future Engineer Scholarship",
    major: "Computer Science",
    link: "https://www.amazonfutureengineer.com/scholarships",
    amount: 40000
  },
  {
    name: "Google Lime Scholarship",
    major: "Computer Science",
    link: "https://buildyourfuture.withgoogle.com/scholarships",
    amount: 10000
  },
  {
    name: "Microsoft Scholarship Program",
    major: "Computer Science", 
    link: "https://www.microsoft.com/en-us/diversity/programs/students/scholarships",
    amount: 20000
  },
  {
    name: "SAIC STEM Scholarship",
    major: "Computer Science",
    link: "https://www.saic.com/who-we-are/citizenship/stem",
    amount: 5000
  },
  {
    name: "IEEE Computer Society Scholarship",
    major: "Computer Science",
    link: "https://www.computer.org/volunteering/awards/scholarships",
    amount: 5000
  },
  
  // --- Nursing Scholarships ---
  {
    name: "HRSA Nurse Corps Scholarship Program",
    major: "Nursing",
    link: "https://bhw.hrsa.gov/programs/nurse-corps/scholarship",
    amount: 85000
  },
  {
    name: "Johnson & Johnson Nursing Scholarships",
    major: "Nursing",
    link: "https://nursing.jnj.com/scholarships",
    amount: 25000
  },
  {
    name: "AACN Nursing Scholarship Program",
    major: "Nursing",
    link: "https://www.aacnnursing.org/students/scholarships-financial-aid",
    amount: 10000
  },
  {
    name: "Nurses Educational Funds Scholarships",
    major: "Nursing",
    link: "https://www.nefscholarships.org",
    amount: 5000
  },
  {
    name: "Tylenol Future Care Scholarship",
    major: "Nursing",
    link: "https://www.tylenol.com/news/scholarship",
    amount: 10000
  },
  
  // --- Business Scholarships ---
  {
    name: "NBMBAA Undergraduate Scholarship",
    major: "Business",
    link: "https://nbmbaa.org/scholarships",
    amount: 15000
  },
  {
    name: "Coca-Cola Scholars Program",
    major: "Business",
    link: "https://www.coca-colascholarsfoundation.org",
    amount: 20000
  },
  {
    name: "NSHSS Business & Entrepreneurship Scholarship",
    major: "Business",
    link: "https://www.nshss.org/scholarships",
    amount: 2000
  },
  {
    name: "Ritchie-Jennings Memorial Scholarship",
    major: "Business",
    link: "https://www.acfe.com/scholarship-award",
    amount: 10000
  },
  {
    name: "DECA Scholarships",
    major: "Business",
    link: "https://www.deca.org/scholarships",
    amount: 5000
  },
  
  // --- Engineering Scholarships ---
  {
    name: "ASHRAE Engineering Scholarship",
    major: "Engineering",
    link: "https://www.ashrae.org/scholarships",
    amount: 10000
  },
  {
    name: "SAE Engineering Scholarship",
    major: "Engineering",
    link: "https://www.sae.org/participate/scholarships",
    amount: 6000
  },
  {
    name: "ASCE Civil Engineering Scholarship",
    major: "Engineering",
    link: "https://www.asce.org/career-growth/awards-and-honors/scholarships",
    amount: 5000
  },
  {
    name: "ASME Mechanical Engineering Scholarship",
    major: "Engineering",
    link: "https://www.asme.org/asme-programs/students-and-faculty/scholarships",
    amount: 5000
  },
  {
    name: "SWE Scholarship Program",
    major: "Engineering",
    link: "https://swe.org/scholarships",
    amount: 15000
  },
  
  // --- Psychology Scholarships ---
  {
    name: "APA Graduate Student Scholarship",
    major: "Psychology",
    link: "https://www.apa.org/apf/funding",
    amount: 5000
  },
  {
    name: "Psi Chi Undergraduate Scholarship",
    major: "Psychology",
    link: "https://www.psichi.org/page/scholarships",
    amount: 3000
  },
  {
    name: "Health Psychology Scholarship",
    major: "Psychology",
    link: "https://www.health-psych.org/StudentScholarshipAwards",
    amount: 2000
  },
  
  // --- Education Scholarships ---
  {
    name: "TEACH Grant",
    major: "Education",
    link: "https://studentaid.gov/understand-aid/types/grants/teach",
    amount: 4000
  },
  {
    name: "Phi Delta Kappa Scholarship",
    major: "Education",
    link: "https://pdkintl.org/programs-resources/scholarships-awards",
    amount: 5000
  },
  {
    name: "NEA Foundation Student Achievement Grant",
    major: "Education",
    link: "https://www.neafoundation.org/for-educators/student-achievement-grants",
    amount: 5000
  },
  
  // --- Art & Design Scholarships ---
  {
    name: "Scholastic Art & Writing Awards",
    major: "Art",
    link: "https://www.artandwriting.org",
    amount: 10000
  },
  {
    name: "Print and Graphics Scholarship Foundation",
    major: "Art",
    link: "https://pgsf.org",
    amount: 5000
  },
  {
    name: "AIGA Worldstudio Scholarship",
    major: "Art",
    link: "https://www.aiga.org/worldstudio-scholarship",
    amount: 2000
  }
  // --- Stop adding scholarships above this line ---
];

// Step 1: Get references to the HTML elements we need to work with.
const majorInput = document.getElementById('major-input');
const findButton = document.getElementById('find-button');
const resultsContainer = document.getElementById('results-container');
const clearButton = document.getElementById('clear-button');
const autocompleteList = document.getElementById('autocomplete-list');
const loadingSpinner = document.getElementById('loading-spinner');

// Get all unique majors for autocomplete
const allMajors = [...new Set(scholarships.map(s => s.major))].sort();

// Step 2: Listen for a click on the "Find Scholarships" button.
findButton.addEventListener('click', () => {
  resultsContainer.innerHTML = ''; // Clear previous results immediately
  loadingSpinner.style.display = 'block'; // Show spinner
  
  // Simulate a network request or heavy processing
  setTimeout(() => {
    loadingSpinner.style.display = 'none'; // Hide spinner after delay
    // Step 3: Get the user's input and prepare it for matching.
    const userInput = majorInput.value.trim().toLowerCase();

    // Step 4: Filter the scholarships array.
    const matchedScholarships = scholarships.filter(scholarship => {
      // Only check for input if the user actually typed something
      if (userInput) {
        return scholarship.major.toLowerCase().includes(userInput);
      }
      return false; // If input is empty, don't show any results
    });

    // Step 5: Display the results on the page.
    displayResults(matchedScholarships);
  }, 1000); // Simulate a 1-second delay for the spinner
});

// Listen for input on the major field for autocomplete
majorInput.addEventListener('input', () => {
  const inputValue = majorInput.value.toLowerCase();
  autocompleteList.innerHTML = ''; // Clear previous suggestions

  if (!inputValue) { return false; }

  const filteredMajors = allMajors.filter(major => 
    major.toLowerCase().includes(inputValue)
  );

  filteredMajors.forEach(major => {
    const item = document.createElement('div');
    item.innerHTML = `<strong>${major.substr(0, inputValue.length)}</strong>${major.substr(inputValue.length)}`;
    item.addEventListener('click', () => {
      majorInput.value = major;
      autocompleteList.innerHTML = ''; // Clear suggestions after selection
    });
    autocompleteList.appendChild(item);
  });
});

// Close autocomplete suggestions when clicking outside
document.addEventListener('click', (e) => {
  if (e.target != majorInput && e.target != autocompleteList) {
    autocompleteList.innerHTML = '';
  }
});

// Listen for a click on the "Clear" button.
clearButton.addEventListener('click', () => {
  majorInput.value = ''; // Clear the input field
  resultsContainer.innerHTML = ''; // Clear the results
  loadingSpinner.style.display = 'none'; // Hide spinner
});

// This function is responsible for showing the scholarships on the screen.
function displayResults(scholarships) {
  // First, clear any old results.
  resultsContainer.innerHTML = '';

  const userInput = majorInput.value.trim(); // Get current input to check if it's empty

  if (userInput === '') {
    resultsContainer.innerHTML = '<p>Please enter your major to find scholarships.</p>';
    return;
  }

  // Check if any scholarships were found.
  if (scholarships.length === 0) {
    resultsContainer.innerHTML = '<p>Sorry, no scholarships found for that major. Try another term.</p>';
    return; // Stop the function here.
  }

  // If we found scholarships, create an HTML card for each one.
  scholarships.forEach(scholarship => {
    // Create an anchor tag '<a>' to be the main container for the card.
    // This makes the entire card a clickable link.
    const cardLink = document.createElement('a');
    cardLink.className = 'scholarship-card'; // Use the new CSS class
    cardLink.href = scholarship.link;
    cardLink.target = '_blank'; // Open link in a new tab

    // Format the amount with a comma (e.g., 5000 -> "5,000")
    const formattedAmount = scholarship.amount.toLocaleString();

    // Create the inner HTML for the card using a template literal.
    // This structure includes a title, a major tag, and the amount.
    cardLink.innerHTML = `
      <div>
        <h4>${scholarship.name}</h4>
        <p class="major-tag">${scholarship.major}</p>
      </div>
      <span class="amount">$${formattedAmount}</span>
    `;
    
    // Add the new card to our results container on the page.
    resultsContainer.appendChild(cardLink);
  });
}