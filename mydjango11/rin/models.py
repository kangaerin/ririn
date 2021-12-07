from django.db import models
from django.contrib import admin

# Create your models here.
class Aerin(models.Model):
	title = models.CharField(max_length=100)
	content = models.TextField()

	def __str__(self):
		return self.title

# 해당 필드별로 날짜기반 탐색이 포함됨.
class AuthorAdmin(admin.ModelAdmin):
	date_hierarchy = 'author__pub_date'
#    list_display = ('title', 'publisher', 'publication_date')
#    list_filter = ('publication_date',)
#    date_hierarchy = 'publication_date'

