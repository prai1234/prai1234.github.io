// Initialize course counter
let courseCount = 1;

// Function to add a new course field
function addCourseField() {
    courseCount++;
    const coursesDiv = document.getElementById('courses');
    const newCourseDiv = document.createElement('div');
    const newLabel = document.createElement('label');
    const newInput = document.createElement('input');
    const deleteButton = document.createElement('button');

    newLabel.htmlFor = `course${courseCount}`;
    newLabel.textContent = `Course ${courseCount}`;
    
    newInput.type = 'text';
    newInput.name = 'courses';
    newInput.id = `course${courseCount}`;
    
    deleteButton.type = 'button';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        coursesDiv.removeChild(newCourseDiv);
    };

    newCourseDiv.appendChild(newLabel);
    newCourseDiv.appendChild(newInput);
    newCourseDiv.appendChild(deleteButton);
    
    // Insert before the "Add another course" button
    coursesDiv.insertBefore(newCourseDiv, coursesDiv.lastElementChild);
}

// Function to show results
function showResults() {
    const form = document.getElementById('introForm');
    const resultDiv = document.getElementById('result');
    
    // Set all result values
    document.getElementById('resultName').textContent = document.getElementById('name').value;
    document.getElementById('resultMascot').textContent = document.getElementById('mascot').value;
    
    const imageFile = document.getElementById('image').files[0];
    if (imageFile) {
        document.getElementById('resultImage').src = URL.createObjectURL(imageFile);
    }
    
    document.getElementById('resultImageCaption').textContent = document.getElementById('imageCaption').value;
    document.getElementById('resultPersonalBackground').textContent = document.getElementById('personalBackground').value;
    document.getElementById('resultProfessionalBackground').textContent = document.getElementById('professionalBackground').value;
    document.getElementById('resultAcademicBackground').textContent = document.getElementById('academicBackground').value;
    document.getElementById('resultWebDevelopmentBackground').textContent = document.getElementById('webDevelopmentBackground').value;
    document.getElementById('resultPrimaryComputerPlatform').textContent = document.getElementById('primaryComputerPlatform').value;
    
    // Collect all course values
    const courseInputs = document.querySelectorAll('input[name="courses"]');
    const courses = Array.from(courseInputs).map(input => input.value.trim()).filter(Boolean);
    document.getElementById('resultCourses').textContent = courses.join(', ');
    
    document.getElementById('resultFunnyThing').textContent = document.getElementById('funnyThing').value;
    document.getElementById('resultAnythingElse').textContent = document.getElementById('anythingElse').value;
    
    // Show results and hide form
    form.style.display = 'none';
    resultDiv.style.display = 'block';
}

// Function to validate form
function validateForm(event) {
    event.preventDefault();
    
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
    
    showResults();
    return false;
}

// Function to reset form
function resetForm() {
    document.getElementById('introForm').reset();
    document.getElementById('result').style.display = 'none';
    document.getElementById('introForm').style.display = 'block';
    courseCount = 1;
}

// Add form submit event listener
document.getElementById('introForm').addEventListener('submit', validateForm);
