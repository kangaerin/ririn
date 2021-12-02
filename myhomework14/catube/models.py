from django.db import models
from imagekit.models import ImageSpecField
from imagekit.processors import ResizeToFill


class Video(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    video_file = models.FileField()
    thumbnail_file = models.ImageField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    thumbnail_file_thumb = ImageSpecField(
        source="thubmbnail_file",
        processors={ResizeToFill(800, 400)},
        format="JPEG",
        options={"quality: 60"},
    )
