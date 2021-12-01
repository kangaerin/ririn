from django.db import models

# Create your models here.
class Shop(models.Model):
    # id = models.BigAutoFreld(primary_ky=True)
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    photo = models.ImageField(blank=True)
    cerated_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)