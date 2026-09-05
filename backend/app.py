from fastapi import FastAPI
from backend.schemas import EmployeeData
from backend.response_schema import PredictionResponse
from backend.predict import predict_attrition
from fastapi import HTTPException
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI(
    title="Employee Attrition Prediction API",
    version="1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)

@app.get("/")
def home():
    return{
        "message": "Employee Attrition Prediction API is running!"
    }

@app.get("/health")
def health():
    return {
        "status" : "healthy",
        "model_loaded" : True
    }

@app.post("/predict", response_model=PredictionResponse)
def predict(employee: EmployeeData):

    try:
        return predict_attrition(employee.model_dump())
    
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )
