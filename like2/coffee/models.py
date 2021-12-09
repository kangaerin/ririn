from django.db import models


class Coffee(models.Model):
    title = models.CharField(max_length=30, db_index=True)
    description = models.TextField()
    image = models.ImageField(upload_to="coffee/post/%Y/%m")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    season_menu = models.BooleanField(default=False)
