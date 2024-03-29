from django.shortcuts import render
from rest_framework import viewsets
from .serizlizers import TodoSerializer
from .models import Todo

class TodoViewSet(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
