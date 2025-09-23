// This array will hold all our scholarship data.
const scholarships = [
    // --- Computer Science Scholarships ---
    {
      name: "Amazon Future Engineer Scholarship",
      major: "Computer Science",
      link: "https://www.amazonfutureengineer.com/scholarships"
    },
    {
      name: "Google Lime Scholarship",
      major: "Computer Science",
      link: "https://buildyourfuture.withgoogle.com/scholarships"
    },
    {
      name: "Microsoft Scholarship Program",
      major: "Computer Science", 
      link: "https://www.microsoft.com/en-us/diversity/programs/students/scholarships"
    },
    {
      name: "SAIC STEM Scholarship",
      major: "Computer Science",
      link: "https://www.saic.com/who-we-are/citizenship/stem"
    },
    {
      name: "IEEE Computer Society Scholarship",
      major: "Computer Science",
      link: "https://www.computer.org/volunteering/awards/scholarships"
    },
    
    // --- Nursing Scholarships ---
    {
      name: "HRSA Nurse Corps Scholarship Program",
      major: "Nursing",
      link: "https://bhw.hrsa.gov/programs/nurse-corps/scholarship"
    },
    {
      name: "Johnson & Johnson Nursing Scholarships",
      major: "Nursing",
      link: "https://nursing.jnj.com/scholarships"
    },
    {
      name: "AACN Nursing Scholarship Program",
      major: "Nursing",
      link: "https://www.aacnnursing.org/students/scholarships-financial-aid"
    },
    {
      name: "Nurses Educational Funds Scholarships",
      major: "Nursing",
      link: "https://www.nefscholarships.org"
    },
    {
      name: "Tylenol Future Care Scholarship",
      major: "Nursing",
      link: "https://www.tylenol.com/news/scholarship"
    },
    
    // --- Business Scholarships ---
    {
      name: "NBMBAA Undergraduate Scholarship",
      major: "Business",
      link: "https://nbmbaa.org/scholarships"
    },
    {
      name: "Coca-Cola Scholars Program",
      major: "Business",
      link: "https://www.coca-colascholarsfoundation.org"
    },
    {
      name: "NSHSS Business & Entrepreneurship Scholarship",
      major: "Business",
      link: "https://www.nshss.org/scholarships"
    },
    {
      name: "Ritchie-Jennings Memorial Scholarship",
      major: "Business",
      link: "https://www.acfe.com/scholarship-award"
    },
    {
      name: "DECA Scholarships",
      major: "Business",
      link: "https://www.deca.org/scholarships"
    }
    // --- Stop adding scholarships above this line ---
  ];

  // Step 1: Get references to the HTML elements we need to work with.
const majorInput = document.getElementById('major-input');
const findButton = document.getElementById('find-button');
const resultsContainer = document.getElementById('results-container');

// Step 2: Listen for a click on the "Find Scholarships" button.
findButton.addEventListener('click', () => {
  // Step 3: Get the user's input and prepare it for matching.
  // .trim() removes any extra spaces, and .toLowerCase() makes it case-insensitive.
  const userInput = majorInput.value.trim().toLowerCase();

  // Step 4: Filter the scholarships array.
  // This is the core logic! It checks each scholarship to see if its major includes the user's input.
  const matchedScholarships = scholarships.filter(scholarship => {
    return scholarship.major.toLowerCase().includes(userInput);
  });

  // Step 5: Display the results on the page.
  displayResults(matchedScholarships);
});


// This function is responsible for showing the scholarships on the screen.
function displayResults(scholarships) {
  // First, clear any old results.
  resultsContainer.innerHTML = '';

  // Check if any scholarships were found.
  if (scholarships.length === 0) {
    resultsContainer.innerHTML = '<p>Sorry, no scholarships found for that major. Try another term.</p>';
    return; // Stop the function here.
  }

  // If we found scholarships, create HTML for each one.
  scholarships.forEach(scholarship => {
    // Create a new link element for the scholarship.
    const scholarshipLink = document.createElement('a');
    scholarshipLink.innerText = scholarship.name;
    scholarshipLink.href = scholarship.link;
    scholarshipLink.target = '_blank'; // This makes the link open in a new tab.
    
    // Add a paragraph to hold the link for better spacing.
    const scholarshipItem = document.createElement('p');
    scholarshipItem.appendChild(scholarshipLink);

    // Add the new paragraph to our results container on the page.
    resultsContainer.appendChild(scholarshipItem);
  });
}