from django.contrib import admin
from Pe.models import Pe


@admin.register(Pe)
class PEAdmin(admin.ModelAdmin):
    list_display = ["title"]
