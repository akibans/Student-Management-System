# 🎓 Student Management System

A full-stack Student Management System built using **Python, Flask, MongoDB, HTML, CSS, and JavaScript**.

This application allows users to manage student academic records through a simple and user-friendly dashboard. Users can add, view, update, and delete student information.

## 🚀 Features

- Add new student records
- View all registered students
- Update existing student details
- Delete student records
- Store student information in MongoDB
- REST API integration using Flask
- Responsive and modern user interface
- Manage student details such as name, age, email, course, and marks

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Frontend structure |
| CSS3 | Styling and responsive design |
| JavaScript | DOM manipulation and API integration |
| Python | Backend programming |
| Flask | Backend framework and REST API |
| MongoDB | NoSQL database |
| PyMongo | Python integration with MongoDB |
| Git & GitHub | Version control and project hosting |

## 📂 Project Structure

```text
Student_Management_System/
│
├── backend/
│   ├── app.py
│   ├── database.py
│   └── requirements.txt
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── .gitignore
└── README.md
```

## ⚙️ Project Setup and Installation

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/akibans/Student-Management-System.git
```

### 2. Navigate to the Project Folder

```bash
cd Student-Management-System
```

### 3. Create a Virtual Environment

```bash
python -m venv venv
```

### 4. Activate the Virtual Environment

For Windows PowerShell:

```powershell
.\venv\Scripts\Activate
```

### 5. Install Dependencies

```bash
pip install -r backend/requirements.txt
```

### 6. Start MongoDB

Make sure MongoDB is installed and running locally.

The project uses the following MongoDB connection:

```text
mongodb://localhost:27017/
```

### 7. Run the Flask Backend

```bash
python backend/app.py
```

The backend API will run at:

```text
http://127.0.0.1:5000
```

### 8. Run the Frontend

Open `frontend/index.html` in your browser, or use the VS Code Live Server extension.

The frontend communicates with the Flask backend through API requests.

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/students` | Retrieve all students |
| POST | `/add-student` | Add a new student |
| PUT | `/update-student/<student_id>` | Update student details |
| DELETE | `/delete-student/<student_id>` | Delete a student |

## 🖥️ Application Preview

The dashboard provides a student registration form and a records table where users can manage student information.

## 🎯 Learning Objectives

This project helped me practice:

- Frontend development using HTML, CSS, and JavaScript
- Backend development using Python and Flask
- Building and integrating REST APIs
- MongoDB database connectivity
- Performing CRUD operations
- Connecting frontend and backend applications
- Using Git and GitHub for version control

## 👨‍💻 Author

**Akib Ansari**

- GitHub: [@akibans](https://github.com/akibans)
- LinkedIn: [Akib Ansari](https://www.linkedin.com/in/akib-ansari/)

---

⭐ If you find this project useful, feel free to star the repository!