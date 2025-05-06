from fastapi import APIRouter, Form,HTTPException
from pydantic import BaseModel
from typing import List
from fastapi.responses import JSONResponse
from models.main import genarete_cheatsheet_Content


router = APIRouter()

class CheatSheetRequest(BaseModel):
    library_name:str

@router.get("/Hello")
async def hello():
    return {"message":"Hello AI"}

@router.post("/create")
async def contentCreater(request: CheatSheetRequest):
    try:
        content = genarete_cheatsheet_Content(request.library_name)
        return {"results":[content]}
    except Exception as e:
        raise HTTPException(state_code=500,detail=str(e))
