from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.

class Note(models.Model):
    body = models.TextField(null=True, blank=True)
    author = models.ForeignKey(
        get_user_model(),
        on_delete=models.CASCADE        
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.body[:50]