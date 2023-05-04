from django.shortcuts import render
from django.http import JsonResponse
from TypeApp.models import Game
from random import choice
from string import ascii_lowercase


def start_game(request):
    # word = "".join([choice(ascii_lowercase) for i in range(50)])
    word = "aiueo kakikukeko sasisuseso tatituteto naninuneno hahihuheho mamimumemo yayuyo rarirurero wawon"
    words = ["aiueo", "\tkakikukeko"]
    time_limit = 60
    data = {"word": word, "words": words, "time_limit": time_limit}
    return JsonResponse(data)


def play_game(request):
    return render(request, "game.html")
