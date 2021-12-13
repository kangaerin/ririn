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

    def __str__(self) -> str:  # 포스팅시 제목이 보이게
        return self.title

    class Meta:
        verbose_name = "포스트"
        verbose_name_plural = "포스팅 목록"  # 게시판 이름 지정


class Comment(TimestampedModel):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    author_name = models.CharField(max_length=20)
    message = models.TextField()

    def __str__(self) -> str:
        return self.author_name

    class Meta:
        verbose_name = "댓글"
        verbose_name_plural = "댓글 목록"
