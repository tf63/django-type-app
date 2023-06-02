from django.urls import path
from . import views

app_name = "api"

urlpatterns = [
    path("code/", views.api_code, name="code"),
    path("", views.index, name='index')
]
