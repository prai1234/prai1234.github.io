// Function to add a new course text box
function addCourseField() {
    const courseDiv = document.createElement('div');
    const courseInput = document.createElement('input');
    const courseCount = document.getElementsByName('courses').length + 1; // Counting current courses
    const inputId = 'course' + courseCount; // Generating unique ID

    courseInput.type = 'text';
    courseInput.name = 'courses';
    courseInput.id = inputId; // Assign unique ID to each input

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.type = 'button';
    deleteButton.onclick = function() {
        courseDiv.remove();
    };

    courseDiv.appendChild(courseInput);
    courseDiv.appendChild(deleteButton);
    document.getElementById('courses').appendChild(courseDiv);

    // Updating the 'for' attribute of the label to point to the new input's ID
    const newLabel = document.createElement('label');
    newLabel.setAttribute('for', inputId); // Match the 'for' with the newly created input ID
    newLabel.textContent = 'Course ' + courseCount;
    document.getElementById('courses').appendChild(newLabel);
}
