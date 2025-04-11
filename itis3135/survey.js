// Function to add a new course text box
let courseCount = 1; // Variable to track the number of courses added
function addCourseField() {
    const courseDiv = document.createElement('div');
    const courseInput = document.createElement('input');
    const courseId = 'course' + (courseCount + 1); // Generate unique ID for the new input
    courseInput.type = 'text';
    courseInput.name = 'courses';
    courseInput.id = courseId;
    const newLabel = document.createElement('label');
    newLabel.setAttribute('for', courseId);
    newLabel.textContent = 'Course ' + (courseCount + 1);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.type = 'button';
    deleteButton.onclick = function() {
        courseDiv.remove();
    };
    courseDiv.appendChild(newLabel);
    courseDiv.appendChild(courseInput);
    courseDiv.appendChild(deleteButton);
    document.getElementById('courses').appendChild(courseDiv);
    courseCount++;
}

// Function to validate the form
function validateForm() {
    const name = document.getElementById('name').value;
    const image = document.getElementById('image').files[0];
    
    if (!name) {
        alert("Name is required!");
        return false;
    }
    if (!image) {
        alert("Please upload an image!");
        return false;
    }
    
    // If validation passes, show results
    showResults();
    return false; // Prevent form submission for demo purposes
}

// Function to display the results and hide the form
function showResults() {
    const form = document.getElementById('introForm');
    const resultDiv = document.getElementById('result');
    
    // Gather data from form fields
    document.getElementById('resultName').textContent = document.getElementById('name').value;
    document.getElementById('resultMascot').textContent = document.getElementById('mascot').value;
    document.getElementById('resultImage').src = URL.createObjectURL(document.getElementById('image').files[0]);
    document.getElementById('resultImageCaption').textContent = document.getElementById('imageCaption').value;
    document.getElementById('resultPersonalBackground').textContent = document.getElementById('personalBackground').value;
    document.getElementById('resultProfessionalBackground').textContent = document.getElementById('professionalBackground').value;
    document.getElementById('resultAcademicBackground').textContent = document.getElementById('academicBackground').value;
    document.getElementById('resultWebDevelopmentBackground').textContent = document.getElementById('webDevelopmentBackground').value;
    document.getElementById('resultPrimaryComputerPlatform').textContent = document.getElementById('primaryComputerPlatform').value;
    
    // Gather courses data
    const courseInputs = document.getElementsByName('courses');
    let courses = [];
    for (let input of courseInputs) {
        if (input.value.trim()) {
            courses.push(input.value);
        }
    }
    document.getElementById('resultCourses').textContent = courses.join(', ');
    
    document.getElementById('resultFunnyThing').textContent = document.getElementById('funnyThing').value;
    document.getElementById('resultAnythingElse').textContent = document.getElementById('anythingElse').value;
    form.style.display = 'none';
    resultDiv.style.display = 'block';
}

// Function to reset the form
function resetForm() {
    document.getElementById('introForm').reset();
    document.getElementById('result').style.display = 'none';
    document.getElementById('introForm').style.display = 'block';
    // Reset course counter but keep the first course field
    courseCount = 1;
}
