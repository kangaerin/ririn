from django.shortcuts import redirect
from django.urls import path, include
from shop import views

app_name = 'shop'


urlpatterns = [
    path('new/', views.shop_new, name="shop_new"),
    path('<int:pk>/', views.shop_detail, name="shop_detail"),
    path('', views.shop_list, name="shop_list"),
]


