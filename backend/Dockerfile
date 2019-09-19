FROM python:3
ENV PYTHONUNBUFFERED 1

RUN set -ex

RUN mkdir /backend
WORKDIR /backend
COPY requirements.txt /backend/
RUN pip install -r requirements.txt
COPY . /backend/