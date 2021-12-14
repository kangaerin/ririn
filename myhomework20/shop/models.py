from django.db import models


class TimestampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Category(TimestampedModel):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self) -> str:
        return self.name

    class Meta:
        ordering = ['-id']


class Post(TimestampedModel):
    author_name = models.CharField(max_length=30)
    title = models.CharField(max_length=50, db_index=True)
    description = models.TextField(blank=True)
    photo = models.ImageField(blank=True)

    def __str__(self) -> str:  # 포스팅시 제목이 보이게
        return self.title

    class Meta:
        verbose_name = "포스트"
        verbose_name_plural = "포스팅 목록"


class Comment(TimestampedModel):
    name = models.CharField(max_length=30)
    message = models.TextField()

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name = "댓글"
        verbose_name_plural = "댓글 목록"


class Tag(TimestampedModel):
    name = models.CharField(max_length=10)

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name = "태그"
        verbose_name_plural = "태그 목록"
