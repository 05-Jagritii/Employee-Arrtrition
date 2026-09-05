import joblib

from pathlib import Path

model = joblib.load('../models/employee_attrition_model.pkl')
label_encoder = joblib.load('../models/label_encoder.pkl')



BASE_DIR = Path(__file__).resolve().parent.parent
MODEL_DIR = BASE_DIR / "models"

model = joblib.load(MODEL_DIR / "employee_attrition_model.pkl")
label_encoder = joblib.load(MODEL_DIR / "label_encoder.pkl")
