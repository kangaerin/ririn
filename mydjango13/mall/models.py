from django.db import models
import datetime
# Create your models here.


class Shop(models.Model):
    # id = models.BigAutoFreld(primary_ky=True)
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    telephone = models.CharField(max_length=13)
    # open_time = models.TimeField(default=datetime.time)
    photo = models.ImageField(blank=True)
    cerated_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)