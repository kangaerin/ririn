from django.db import models


class TimestampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Post(TimestampedModel):
    title = models.CharField(max_length=30, db_index=True)
    description = models.TextField(blank=True)
    photo = models.ImageField(blank=True)

    def __str__(self) -> str:
        return self.title
    
    class Meta:
        verbose_name = "포스트"
        verbose_name_plural = "포스팅 목록"


class Comment(TimestampedModel):
    author_name = models.CharField(max_length=20)
    message = models.TextField()

    def __str__(self) -> str:
        return self.author_name
    
    class Meta:
        verbose_name = "댓글"
        verbose_name_plural = "댓글 목록"
