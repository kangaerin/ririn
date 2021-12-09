from django.db import models


class TimestampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Post(models.Model):
    author_name = models.CharField(max_length=20)
    title = models.CharField(max_length=20, db_index=True)
    content = models.TextField()
    photo = models.ImageField(blank=True, upload_to='couple/pose/%Y/%m')
    Love = models.BooleanField(default=True)
    tag_set = models.ManyToManyField('Tag', blank=True)

    def __str__(self) -> str:
        return self.title

    class Meta:
        verbose_name = "포스트"
        verbose_name_plural = "포스팅 목록"


class Comment(TimestampedModel):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    message = models.TextField()
    author_name = models.CharField(max_length=20)

    def __str__(self) -> str:
        return self.author_name

    class Meta:
        verbose_name = "댓글"
        verbose_name_plural = "댓글 목록"


class Tag(TimestampedModel):
    name = models.CharField(max_length=10, db_index=True)

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name = "태그"
        verbose_name_plural = "태그 목록"



