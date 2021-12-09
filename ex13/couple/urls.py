from django.urls import path
from couple import views

app_name = "couple"

urlpatterns = [
    path("", views.post_list, name='post_list'),
]