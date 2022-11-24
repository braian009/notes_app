from django.urls import path
from .views import NoteList, NoteCreate, NoteDetail, NoteUpdate, NoteDelete

urlpatterns = [
    path('notes/', NoteList.as_view(), name='note_list'),
    path('notes/create/', NoteCreate.as_view(), name='note_create'),
    path('notes/<int:pk>/edit/', NoteUpdate.as_view(), name='note_edit'),
    path('notes/<int:pk>/delete/', NoteDelete.as_view(), name='note_delete'),
    path('notes/<int:pk>/', NoteDetail.as_view(), name='note_detail'),
]