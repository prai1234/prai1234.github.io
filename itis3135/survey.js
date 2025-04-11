document.addEventListener('DOMContentLoaded', function() {
    // Function declarations
    function showResults() {
        const form = document.getElementById('introForm');
        const resultDiv = document.getElementById('result');
        
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
        
        const courseInputs = document.querySelectorAll('input[name="courses"]');
        const courses = Array.from(courseInputs).map(function(input) {
            return input.value.trim();
        }).filter(Boolean);
        document.getElementById('resultCourses').textContent = courses.join(', ');
        
        document.getElementById('resultFunnyThing').textContent = document.getElementById('funnyThing').value;
        document.getElementById('resultAnythingElse').textContent = document.getElementById('anythingElse').value;
        
        form.style.display = 'none';
        resultDiv.style.display = 'block';
    }

    function addCourseField() {
        courseCount++;
        const coursesDiv = document.getElementById('courses');
        const newCourseDiv = document.createElement('div');
        const newLabel = document.createElement('label');
        const newInput = document.createElement('input');
        const deleteButton = document.createElement('button');

        newLabel.htmlFor = 'course' + courseCount;
        newLabel.textContent = 'Course ' + courseCount;
        
        newInput.type = 'text';
        newInput.name = 'courses';
        newInput.id = 'course' + courseCount;
        
        deleteButton.type = 'button';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            coursesDiv.removeChild(newCourseDiv);
        });

        newCourseDiv.appendChild(newLabel);
        newCourseDiv.appendChild(newInput);
        newCourseDiv.appendChild(deleteButton);
        
        coursesDiv.insertBefore(newCourseDiv, document.getElementById('addCourseBtn'));
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

    function resetForm() {
        document.getElementById('introForm').reset();
        document.getElementById('result').style.display = 'none';
        document.getElementById('introForm').style.display = 'block';
        courseCount = 1;
        
        const coursesDiv = document.getElementById('courses');
        while (coursesDiv.children.length > 1) {
            coursesDiv.removeChild(coursesDiv.lastElementChild);
        }
    }

    // Variable declarations
    let courseCount = 1;
    const introForm = document.getElementById('introForm');
    const addCourseBtn = document.getElementById('addCourseBtn');
    const resetBtn = document.getElementById('resetBtn');

    // Event listeners
    addCourseBtn.addEventListener('click', addCourseField);
    resetBtn.addEventListener('click', resetForm);
    introForm.addEventListener('submit', handleSubmit);
});
