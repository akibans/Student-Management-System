
const API_URL = "http://127.0.0.1:5000"

async function getStudents() {
    const response = await fetch(`${API_URL}/students`);

    const data = await response.json();

    students = data.students;

    displayStudents();
}

const studentForm = document.querySelector("#studentForm");

const nameInput = document.querySelector("#name");
const age = document.querySelector("#age");
const email = document.querySelector("#email");
const marks = document.querySelector("#marks");
const course = document.querySelector("#course");

const addStudent = document.querySelector("#addStudent");
const studentList = document.querySelector("#studentList");

let students = [];
let editStudentId = null;


// Create / Update Students

studentForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    let student = {
        name: nameInput.value.trim(),
        age: Number(age.value),
        email: email.value.trim(),
        course: course.value,
        marks: Number(marks.value)
    };

    let url;
    let method;

    if (editStudentId === null) {
        url = `${API_URL}/add-student`;
        method = "POST";
    } else {
        url = `${API_URL}/update-student/${editStudentId}`;
        method = "PUT";
    }

    const response = await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    });

    const data = await response.json();

    console.log(data.message);

    editStudentId = null;

    studentForm.reset();

    addStudent.textContent = "Add Student";

    getStudents();

});


// Delete Students

let selectedStudentId = null;

function deleteStudent(studentId) {

    selectedStudentId = studentId;

    document.querySelector("#deleteModal").style.display = "flex";

}

function closeDeleteModal() {

    document.querySelector("#deleteModal").style.display = "none";

    selectedStudentId = null;

}

async function confirmDeleteStudent() {

    if (selectedStudentId === null) {
        return;
    }

    try {

        const response = await fetch(
            `${API_URL}/delete-student/${selectedStudentId}`,
            {
                method: "DELETE"
            }
        );

        const data = await response.json();

        if (response.ok) {

            closeDeleteModal();

            getStudents();

        } else {

            alert(data.message || "Failed to delete student.");

        }

    } catch (error) {

        console.error("Delete error:", error);

        alert("Something went wrong!");

    }

}

// Display Students

function displayStudents() {

    studentList.innerHTML = "";

    students.forEach(function(student, index) {

        let row = document.createElement("tr");

        ["name", "age", "email", "course", "marks"].forEach(function(key) {

            let cell = document.createElement("td");

            cell.textContent = student[key];

            row.appendChild(cell);

        });


        // Delete Button

let deleteBtn = document.createElement("button");

deleteBtn.textContent = "Delete";

deleteBtn.classList.add("delete-btn");

deleteBtn.addEventListener("click", function() {

    deleteStudent(student._id);

});


// Edit Button

let editBtn = document.createElement("button");

editBtn.textContent = "Edit";

editBtn.classList.add("edit-btn");

editBtn.addEventListener("click", function() {

    editStudentId = student._id;

    addStudent.textContent = "Update Student";

    nameInput.value = student.name;
    age.value = student.age;
    email.value = student.email;
    course.value = student.course;
    marks.value = student.marks;

});

        // Action Cell

        let actionCell = document.createElement("td");

        actionCell.appendChild(editBtn);
        
        actionCell.appendChild(deleteBtn);


        row.appendChild(actionCell);

        studentList.appendChild(row);

    });

}


// Load Students

getStudents();


// Search Students by Name, Email, Course

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function() {

    let searchValue = searchInput.value.toLowerCase();

    let rows = document.querySelectorAll("#studentList tr");

    rows.forEach(function(row) {

        let rowData = row.textContent.toLowerCase();

        if (rowData.includes(searchValue)) {

            row.style.display = "";

        } else {

            row.style.display = "none";

        }

    });

});
