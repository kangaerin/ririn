from django.urls import path
from shop import views

app_name = 'shop'

urlpatterns = [
    path('', views.post_list, name="post_list"),
    path("<int:pk>/", views.post_detail, name="post_detail"),
]
