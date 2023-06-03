from django.db import models



class Problem(models.Model):
    LENGTH_CHOICES = (
        ('short', 'Short'),
        ('medium', 'Medium'),
        ('long', 'Long'),
    )

    language = models.CharField(max_length=100)
    length = models.CharField(max_length=10, choices=LENGTH_CHOICES)
    text = models.TextField(max_length=2000)