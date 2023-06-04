from django.shortcuts import render
from django.http import JsonResponse
from random import choice
from string import ascii_lowercase

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Problem
from .serializers import ProblemSerializer

class ProblemAPIView(APIView):
    def get(self, request):
        try:
            lang = request.GET.get('language')
            length = request.GET.get('length')
            queryset = Problem.objects.all()

            if lang:
                queryset = queryset.filter(language=lang)
            
            if length:
                queryset = queryset.filter(length=length)

            serializer = ProblemSerializer(queryset, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class InfoAPIView(APIView):
    def get(self, request):
        try:
            lang = request.GET.get('language')
            length = request.GET.get('length')
            queryset = Problem.objects.all()

            if lang:
                queryset = queryset.filter(language=lang)
            
            if length:
                queryset = queryset.filter(length=length)

            serializer = ProblemSerializer(queryset, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


def api_code(request):
    # wordsとtab_countsの長さが同じとなるようにする

    # word = "".join([choice(ascii_lowercase) for i in range(50)])
    # word = "aiueo kakikukeko sasisuseso tatituteto naninuneno hahihuheho mamimumemo yayuyo rarirurero wawon"
    word = """class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def introduce(self):
        print(f"My name is {self.name} and I am {self.age} years old.")"""

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
    data["Access-Control-Allow-Origin"] = "http://localhost:5173"

    return JsonResponse(data)


def index(request):
    return render(request, "index.html")
