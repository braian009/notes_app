from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Note


class NoteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Note
        fields = '__all__'
        read_only_fields = ['author',]


class AccountSerializer(serializers.ModelSerializer):

    
    class Meta: 
        model = get_user_model()
        fields = '__all__'