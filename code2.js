const students = [
  {
    name: "John",
    chemistryMarks: 85,
    biologyMarks: 90,
    dob: "15-11-1998"
  },
  {
    name: "Sarah",
    chemistryMarks: 90,
    biologyMarks: 95,
    dob: "20-10-1999"
  },
  {
    name: "Alice",
    chemistryMarks: 85,
    biologyMarks: 85,
    dob: "15-11-1998"
  },
  // Add more student objects here
];

// Sorting function
const sortByMarks = (a, b) => {
  // First priority: Total marks
  if (a.chemistryMarks + a.biologyMarks > b.chemistryMarks + b.biologyMarks) {
    return -1;
  }
  if (a.chemistryMarks + a.biologyMarks < b.chemistryMarks + b.biologyMarks) {
    return 1;
  }
  
  // Second priority: Biology marks
  if (a.biologyMarks > b.biologyMarks) {
    return -1;
  }
  if (a.biologyMarks < b.biologyMarks) {
    return 1;
  }
  
  // Third priority: Date of birth (in format DD-MM-YYYY)
  const aDobParts = a.dob.split("-");
  const bDobParts = b.dob.split("-");
  
  const aDob = new Date(aDobParts[2], aDobParts[1] - 1, aDobParts[0]);
  const bDob = new Date(bDobParts[2], bDobParts[1] - 1, bDobParts[0]);
  
  return aDob - bDob;
};

// Sort the array of student objects
students.sort(sortByMarks);

// Print sorted array of student objects
console.log(students);