from rest_framework import serializers
from .models import Problem, Record


class ProblemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Problem
        fields = "__all__"


class RecordSerializer(serializers.Serializer):
    correct = serializers.IntegerField()
    miss = serializers.IntegerField()
    time = serializers.IntegerField()

    def create(self, validated_data):
        # Create and return a new record instance
        return Record.objects.create(**validated_data)

    def update(self, instance, validated_data):
        # Update and return an existing record instance
        instance.correct = validated_data.get("correct", instance.correct)
        instance.miss = validated_data.get("miss", instance.miss)
        instance.time = validated_data.get("time", instance.time)
        instance.save()
        return instance
