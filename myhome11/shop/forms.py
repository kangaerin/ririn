from django import forms
from django.core.validators import RegexValidator
from shop.models import Post, Comment


class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = '__all__'


class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = [
            'author_name',
            'message',
        ]
