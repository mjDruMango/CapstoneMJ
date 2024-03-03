#python image
FROM python:3.12

#env variables
ENV PYTHONDONTWRITEBYTECODE 1

ENV PYTHONUNBUFFERED 1

#set working directory
WORKDIR /app/

#install dependencies
COPY requirements.txt /app/

RUN pip install --no-cache-dir -r requirements.txt

#copy current directory contents into container

COPY . /app/

#expose django port
EXPOSE 8000

#run django dev server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
