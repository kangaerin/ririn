from django.conf import settings
from django.contrib import admin
from django.conf.urls.static import static
import debug_toolbar
from django.urls import include, path

from catube.views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('catube/', index),
]


if settings.DEBUG:
    urlpatterns += [
        path("__debug__", include(debug_toolbar.urls)),
    ]