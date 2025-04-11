document.addEventListener('DOMContentLoaded', () => {
    let courseCount = 1;

    // DOM Elements
    const introForm = document.getElementById('introForm');
    const addCourseBtn = document.getElementById('addCourseBtn');
    const resetBtn = document.getElementById('resetBtn');
    const resultDiv = document.getElementById('result');

    // Event Listeners
    addCourseBtn.addEventListener('click', addCourseField);
    resetBtn.addEventListener('click', resetForm);
    introForm.addEventListener('submit', handleSubmit);

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
        deleteButton.addEventListener('click', () => {
            coursesDiv.removeChild(newCourseDiv);
        });

        newCourseDiv.appendChild(newLabel);
        newCourseDiv.appendChild(newInput);
        newCourseDiv.appendChild(deleteButton);
        
        coursesDiv.insertBefore(newCourseDiv, addCourseBtn);
    }

    function handleSubmit(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const image = document.getElementById('image').files[0];
        
        if (!name) {
            alert("Name is required!");
            return;
        }
        if (!image) {
            alert("Please upload an image!");
            return;
        }
        
        showResults();
    }

    function showResults() {
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
        introForm.style.display = 'none';
        resultDiv.style.display = 'block';
    }

    function resetForm() {
        introForm.reset();
        introForm.style.display = 'block';
        resultDiv.style.display = 'none';
        courseCount = 1;
        
        // Reset courses to just the first one
        const coursesDiv = document.getElementById('courses');
        while (coursesDiv.children.length > 1) {
            coursesDiv.removeChild(coursesDiv.lastElementChild);
        }
    }
});
