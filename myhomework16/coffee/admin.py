from django.contrib import admin
from coffee.models import Coffee


@admin.register(Coffee)
class CoffeeAdmin(admin.ModelAdmin):
    list_display = ['title']

