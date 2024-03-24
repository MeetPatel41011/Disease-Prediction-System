# Disease-Prediction-System

## Machine Learning Directory
Contains .ipynb files ( Machine Learning Models ) and Datasets.
You can view each disease's .ipynb file and dataset in their folder.

## Backend Directory
Contains .pkl files, generated by Machine Learning models.
And contains a Python file, which basically takes .pkl files and makes an API.

### To run the Backend

Go to the Backend directory in your terminal and run the snippets mentioned below, in order to run the backend.

```python -m venv ml```

```.\ml\Scripts\activate```

pip install uvicorn gunicorn fastapi pydantic scikit-learn pandas
 
uvicorn mlapi:app --reload


## Frontend Directory
For frontend integration with ML, I used React JS

### To run Frontend

Go to Frontend/ml-react dir in your terminal and run,

npm install

NPM RUN DEV

<img src="https://t.bkit.co/w_64ba1fc5798f2.gif" />
