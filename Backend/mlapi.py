from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
app = FastAPI()
import pickle


class ScoringItems2(BaseModel):
    stay_up_late: float
    pressure_level: float
    coffee_consumed:float
    brain_working_duration:float
    stress_level:float
    shampoo_brand:float
    swimming: float
    hair_washing:float
    hair_grease:float
    dandruff:float
    libido:float

class ScoringItems3(BaseModel):
    Age: float
    Duration: float
    Frequency:float
    Location:float
    Character:float
    Intensity:float
    Nausea:float
    Vomit: float
    Phonophobia: float
    Photophobia:float
    Visual:float
    Sensory:float
    Dysphasia:float
    Dysarthria: float
    Vertigo:float
    Tinnitus:float
    Hypoacusis:float
    Diplopia:float
    Defect: float
    Conscience:float
    Paresthesia:float
    DPF:float

class ScoringItems4(BaseModel):
    radius: float
    texture: float
    perimeter:float
    area:float
    smoothness:float
    symmetry:float
    fractal_dimension:float

class ScoringItems5(BaseModel):
    GENDER: float
    AGE: float
    SMOKING:float
    YELLOW_FINGERS:float
    ANXIETY:float
    PEER_PRESSURE:float
    CHRONIC_DISEASE:float
    WHEEZING:float
    ALCOHOL_CONSUMING:float
    COUGHING:float
    SHORTNESS_OF_BREATH	:float
    SWALLOWING_DIFFICULTY: float
    CHEST_PAIN:float

with open('hair_loss.pkl', 'rb') as f2:
    model2 = pickle.load(f2)

with open('migraine.pkl', 'rb') as f3:
    model3 = pickle.load(f3)

with open('Prostate_Cancer.pkl', 'rb') as f4:
    model4 = pickle.load(f4)

with open('survey_lung_cancer.pkl', 'rb') as f5:
    model5 = pickle.load(f5)


@app.post('/hair_loss')
async def scoring_endpoint(item2:ScoringItems2):
    df2 = pd.DataFrame([item2.dict().values()], columns=item2.dict().keys())
    yhat2 = model2.predict(df2)
    return {"prediction2": int(yhat2)}

@app.post('/migraine')
async def scoring_endpoint(item3:ScoringItems3):
    df3 = pd.DataFrame([item3.dict().values()], columns=item3.dict().keys())
    yhat3 = model3.predict(df3)
    return {"prediction3": int(yhat3)}

@app.post('/Prostate_Cancer')
async def scoring_endpoint(item4:ScoringItems4):
    df4 = pd.DataFrame([item4.dict().values()], columns=item4.dict().keys())
    yhat4 = model4.predict(df4)
    return {"prediction4": int(yhat4)}

@app.post('/survey_lung_cancer')
async def scoring_endpoint(item5:ScoringItems5):
    df5 = pd.DataFrame([item5.dict().values()], columns=item5.dict().keys())
    yhat5 = model5.predict(df5)
    return {"prediction5": int(yhat5)}