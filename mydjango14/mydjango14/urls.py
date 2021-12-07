import debug_toolbar
from django.conf import settings
from django.conf.urls.static import static
from catube.views import index, video_detail

from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path("admin/", admin.site.urls),
    path("catube/", index),
    path("catube/<int:pk>/", video_detail),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    urlpatterns += [
        path("__debug__", include(debug_toolbar.urls)),
    ]
