from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from coffee.views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('coffee/', index),
]


urlpatterns += static(settings.MEDIA_URL,
                      documtent_root=settings.MEDIA_ROOT)


if settings.DEBUG:
    import debug_toolbar
    urlpatterns += [
    path('__debug__/', include(debug_toolbar.urls)),
]