from django.urls import path
from . import views

app_name = "TypeApp"

urlpatterns = [
    path("start_game/", views.start_game, name="start_game"),
    path("play_game/", views.play_game, name="play_game"),
]
