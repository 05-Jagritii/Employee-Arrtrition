from pydantic import BaseModel


class FeatureContribution(BaseModel):
    feature: str
    impact: float
    effect: str


class PredictionResponse(BaseModel):

    prediction: str
    probability: float
    risk_level: str
    recommendation: str
    top_factors: list[FeatureContribution]