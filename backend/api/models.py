from django.db import models
from django.contrib.postgres.fields import ArrayField


class Problem(models.Model):
    LANGUAGE_CHOICES = (
        ('python', 'Python'),
        ('java', 'Java'),
        ('javascript', 'JavaScript'),
        ('c', 'C'),
        ('cpp', 'C++'),
        ('csharp', 'C#'),
        ('php', 'PHP'),
        ('ruby', 'Ruby'),
        ('go', 'Go'),
        ('swift', 'Swift'),
        ('kotlin', 'Kotlin'),
        ('rust', 'Rust'),
        ('typescript', 'TypeScript'),
        ('html', 'HTML'),
        ('css', 'CSS'),
        ('sql', 'SQL'),
        ('bash', 'Bash'),
        ('powershell', 'PowerShell'),
    )

    LENGTH_CHOICES = (
        ('short', 'short'),
        ('medium', 'medium'),
        ('long', 'long'),
    )
    
    language = models.CharField(max_length=100, choices=LANGUAGE_CHOICES)
    length = models.CharField(max_length=10, choices=LENGTH_CHOICES)
    words = ArrayField(models.CharField(max_length=200), default=list)
    tab_counts = ArrayField(models.IntegerField(), default=list)

    def __str__(self):
        return f"Problem {self.pk}, Lang: {self.language}, length: {self.length}"

class Record(models.Model):
    correct = models.IntegerField()
    miss = models.IntegerField()
    time = models.IntegerField()

    def __str__(self):
        return f"Record {self.id}"