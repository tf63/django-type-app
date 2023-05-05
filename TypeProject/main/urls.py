from django.urls import path
from . import views

app_name = "main"

urlpatterns = [
    path("", views.index, name="index"),
    path("game/", views.game, name="game"),
    path("profile/", views.profile, name="profile"),
    path("select/", views.select, name="select"),
]
