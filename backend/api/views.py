from rest_framework import generics
from .serializers import NoteSerializer
from .models import Note
from django.contrib.auth import get_user_model


# Create your views here.

class NoteList(generics.ListAPIView):
    serializer_class = NoteSerializer

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)

class NoteCreate(generics.CreateAPIView):
    serializer_class = NoteSerializer
    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class NoteDetail(generics.RetrieveAPIView):
    serializer_class = NoteSerializer
    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)

class NoteUpdate(generics.UpdateAPIView):
    serializer_class = NoteSerializer
    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)

class NoteDelete(generics.DestroyAPIView):
    serializer_class = NoteSerializer
    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)
