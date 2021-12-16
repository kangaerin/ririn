from django.contrib import admin
from blog.models import Category, Post, Comment, Tag, Subscriber


# 이름은 어떻게 지어도 상관없지만 연관있어보이게 짓는게 좋음.
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    pass


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    pass


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    pass


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    pass


@admin.register(Subscriber)
class Subscriber(admin.ModelAdmin):
    pass