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


class Comment(TimestampedModel):
    message = models.TextField()
    author_name = models.CharField(max_length=20)


class Tag(TimestampedModel):
    name = models.CharField(max_length=10, db_index=True)



