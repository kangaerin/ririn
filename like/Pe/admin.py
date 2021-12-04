from django.contrib import admin
from Pe.models import Pe


class PEAdmin(admin.ModelAdmin):
    pass


admin.site.register(Pe, PEAdmin)