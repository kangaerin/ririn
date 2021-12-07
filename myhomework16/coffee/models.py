from django.db import models


class Coffee(models.Model):
    title = models.CharField(max_length=30)
    description = models.TextField()
    image = models.ImageField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    season_menu = models.BooleanField(default=False)