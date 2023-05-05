from django.shortcuts import render
from django.http import JsonResponse
from main.models import Game


def index(request):
    return render(request, "index.html")


def game(request):
    return render(request, "game.html")
