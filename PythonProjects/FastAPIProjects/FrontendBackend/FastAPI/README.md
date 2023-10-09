
## Create siloed environment
python3 -m venv env

## Activate virtual env
source env/bin/activate


## Dependencies
pip install uvicorn, sqlalchemy, fastapi


## run app
uvicorn main:app --reload
