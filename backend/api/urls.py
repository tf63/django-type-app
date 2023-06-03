from django.urls import path
from . import views

app_name = "api"

urlpatterns = [
    path("problem/", views.ProblemAPIView.as_view(), name="problem"),
    path("info/", views.InfoAPIView.as_view(), name="info"),
    path("", views.index, name='index')
]
