const API_URL = "http://127.0.0.1:5000"

async function getStudents() {
    const response = await fetch(`${API_URL}/students`);

    const data = await response.json();

    students = data.students;
displayStudents();
}

const studentForm = document.querySelector("#studentForm")

const nameInput = document.querySelector("#name")
const age = document.querySelector("#age")
const email = document.querySelector("#email")
const marks = document.querySelector("#marks")
const course = document.querySelector("#course")


const addStudent = document.querySelector("#addStudent")
const studentList = document.querySelector("#studentList")

let students = []
let editStudentId = null;
// Create Students
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

        // Delete students
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", async function() {

        const response = await fetch(
             `${API_URL}/delete-student/${student._id}`,
            {
                method: "DELETE"
            }
        )

        const data = await response.json()

        console.log(data.message)

        getStudents()
    })
        
        // Edit/Update info
        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", function() {
                editStudentId = student._id;
                addStudent.textContent = "Update Student";

                nameInput.value = student.name;
                age.value = student.age;
                email.value = student.email;
                course.value = student.course;
                 marks.value = student.marks;
})

        let actionCell = document.createElement("td")
        actionCell.appendChild(deleteBtn)
        actionCell.appendChild(editBtn)
        row.appendChild(actionCell)

        studentList.appendChild(row)
    })
}

getStudents();



