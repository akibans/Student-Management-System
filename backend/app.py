
from flask import Flask, jsonify, request
from database import students_collection
from bson import ObjectId
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Student Management System API is running!"

@app.route("/students", methods=["GET"])
def students():
    all_students = list(students_collection.find())

    for student in all_students:
        student["_id"] = str(student["_id"])

    return jsonify({"students": all_students})


@app.route("/add-student", methods=["POST"])
def add_student():
    student = request.json

    students_collection.insert_one(student)

    return jsonify({"message": "Student added successfully!"})


@app.route("/update-student/<student_id>", methods=["PUT"])
def update_student(student_id):
    student_id = ObjectId(student_id)

    data = request.json

    students_collection.update_one(
        {"_id": student_id},
        {"$set": data}
    )

    return jsonify({"message": "Student updated successfully!"})


@app.route("/delete-student/<student_id>", methods=["DELETE"])
def delete_student(student_id):

    student_id = ObjectId(student_id)

    result = students_collection.delete_one(
        {"_id": student_id}
    )

    if result.deleted_count == 1:
        return jsonify({"message": "Student deleted successfully!"})

    return jsonify({"message": "Student not found!"}), 404

if __name__ == "__main__":
    app.run(debug=True)


