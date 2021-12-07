from django.db import models
from blog.upload_to import uuid_name_upload_to

class Post(models.Model):
    author_name = models.CharField(max_length=20)
    title = models.CharField(max_length=200)
    content = models.TextField()
    # upload_to
    # - 문자열 : 파일이 저장되는 폴더의 경로. 저장한 뒤에 주석처리해도 경로가 바뀌진 않음.
    photo = models.ImageField(blank=True, upload_to=uuid_name_upload_to)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
