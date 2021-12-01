from django.db import models
from blog.upload_to import uuid_name_upload_to

class Post(models.Model):
    title = models.CharField(max_length=200)
    author_name = models.CharField(max_length=10)
    content = models.TextField()
    photo = models.ImageField(blank=True, upload_to=uuid_name_upload_to)
    reference = models.CharField(max_length=150)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
