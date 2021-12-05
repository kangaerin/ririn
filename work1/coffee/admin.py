from django.contrib import admin
from coffee.models import Coffee


class CoffeeAdmin(admin.ModelAdmin):
    pass


admin.site.register(Coffee, CoffeeAdmin)