// Constructor function for Student details
function Student(name, roll_no, className, section, marks) {
    this.name = name;
    this.roll_no = roll_no;
    this.class = className;
    this.section = section;
    this.marks_of_5_subjects = marks;

    // Method to print top three subjects based on marks
    this.printTop3Subjects = function () {
        // Create an array of subjects sorted by marks in descending order
        const sortedSubjects = Object.keys(this.marks_of_5_subjects).sort((a, b) => this.marks_of_5_subjects[b] - this.marks_of_5_subjects[a]);

        // Print the top three subjects
        console.log("Top 3 Subjects:");
        for (let i = 0; i < Math.min(3, sortedSubjects.length); i++) {
            console.log(`${i + 1}. ${sortedSubjects[i]}`);
        }
    };

    // Method to print the report card
    this.printReportCard = function () {
        console.log("Report Card for", this.name);
        console.log("Roll Number:", this.roll_no);
        console.log("Class:", this.class);
        console.log("Section:", this.section);
        console.log("Marks:");

        // Print marks for each subject
        for (const subject in this.marks_of_5_subjects) {
            console.log(`${subject}: ${this.marks_of_5_subjects[subject]}`);
        }

        // Call the printTop3Subjects method to print top three subjects
        this.printTop3Subjects();
    };
}

// Example usage
let student1 = new Student("John Doe", "12345", "10th", "A", {
    science: 72,
    maths: 75,
    social_science: 79,
    english: 80,
    hindi: 67
});

// Print the report card
student1.printReportCard();
