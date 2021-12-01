from django.db import models
import datetime
# Create your models here.


class Shop(models.Model):
    # id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    telephone = models.CharField(max_length=13)
    # open_time = models.TimeField(default=datetime.time)
    photo = models.ImageField(blank=True)
    cerated_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        # 관련 쿼리셋에서 order_by를 지정하지 않았을 때
        # 적용될 디폴트 정렬
        ordering = ['-id']