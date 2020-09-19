from django.conf.urls import url
from . import views

urlpatterns = [  # Task views
    url(r'^$', views.task_list, name='task_list'),
]
