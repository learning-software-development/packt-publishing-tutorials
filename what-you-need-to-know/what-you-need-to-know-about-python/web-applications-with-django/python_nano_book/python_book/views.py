from django.shortcuts import render
from .model import Task

# Create your views here.
def task_list(request):
    tasks = Task.published.all()
    return render(request,'blog/task/list.html',{'tasks': tasks})
