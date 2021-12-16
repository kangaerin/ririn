from django.urls import path

# from blog.views import cbv as views
from blog.views import fbv as views
# 클래스 기반으로 구성, 함수기반으로 구성

app_name = 'blog'

urlpatterns = [
    path('', views.post_list, name='post_list'),
    path('<int:pk>/', views.post_detail, name='post_detail'),
    path('new/', views.post_new, name="post_new"),
    path('<int:pk>/edit/', views.post_edit, name="post_edit"),
    path('<int:pk>/delete/', views.post_delete, name="post_delete"),
]
