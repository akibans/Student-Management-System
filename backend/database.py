from pymongo import MongoClient


client = MongoClient("mongodb://localhost:27017/")

db = client["student_management"]

students_collection = db["students"]

try:
    client.admin.command("ping")
    print("MongoDB connected successfully!")
except Exception as e:
    print("MongoDB connection failed:", e)