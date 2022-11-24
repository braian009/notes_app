from rest_framework import generics
from .serializers import NoteSerializer
from .models import Note


# Create your views here.

class NoteList(generics.ListAPIView):
    serializer_class = NoteSerializer
    queryset = Note.objects.all().order_by('-updated_at')

class NoteCreate(generics.CreateAPIView):
    serializer_class = NoteSerializer
    queryset = Note.objects.all()

class NoteDetail(generics.RetrieveAPIView):
    serializer_class = NoteSerializer
    queryset = Note.objects.all()

class NoteUpdate(generics.UpdateAPIView):
    serializer_class = NoteSerializer
    queryset = Note.objects.all()

class NoteDelete(generics.DestroyAPIView):
    serializer_class = NoteSerializer
    queryset = Note.objects.all()
