from django.contrib import admin
from catube.models import Viedo


class VideoAdmin(admin.ModelAdmin):
    pass


admin.site.register(Viedo, VideoAdmin)
