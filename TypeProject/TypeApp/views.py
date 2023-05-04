from django.shortcuts import render
from django.http import JsonResponse
from TypeApp.models import Game
from random import choice
from string import ascii_lowercase


def start_game(request):
    # wordsとtab_countsの長さが同じとなるようにする

    # word = "".join([choice(ascii_lowercase) for i in range(50)])
    # word = "aiueo kakikukeko sasisuseso tatituteto naninuneno hahihuheho mamimumemo yayuyo rarirurero wawon"
    word = """class BankAccount:
    def __init__(self, name, balance=0):
        self.name = name
        self.balance = balance
    
    def deposit(self, amount):
        self.balance += amount
        print(f"{self.name}さんの口座に{amount}円を預けました。残高は{self.balance}円です。")
    
    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance -= amount
            print(f"{self.name}さんの口座から{amount}円を引き出しました。残高は{self.balance}円です。")
        else:
            print(f"残高不足です。{self.name}さんの口座には{self.balance}円しかありません。")
    
    def check_balance(self):
        print(f"{self.name}さんの残高は{self.balance}円です。")"""

    words = []
    tab_counts = []
    for i, w in enumerate(word.split("\n")):
        tab_count = 0
        w_striped = w.lstrip("\t")
        tab_count += len(w) - len(w_striped)
        w_striped = w.lstrip(" ")
        tab_count += int((len(w) - len(w_striped)) / 4)

        words.append(w_striped)
        tab_counts.append(tab_count)

    time_limit = 60
    data = {
        "word": word,
        "words": words,
        "tab_counts": tab_counts,
        "time_limit": time_limit,
    }
    return JsonResponse(data)


def play_game(request):
    return render(request, "game.html")
