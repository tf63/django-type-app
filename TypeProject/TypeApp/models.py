from django.db import models


class Game(models.Model):
    word = models.CharField(max_length=100)
    time_limit = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
