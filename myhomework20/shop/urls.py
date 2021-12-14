from django.urls import path
from shop import views

app_name = 'shop'

urlpatterns = [
    path('', views.post_list, name="post_list"),
    path('<int:pk>/', views.post_detail, name="post_detail"),
    path('new/', views.post_new, name="post_new"),
    path('new/<int:pk>/', views.post_edit, name="post_edit"),
    path('<int:post_pk>/comments/new/', views.comment_new, name="comment_new"),
    path('<int:post_pk>/comments/<int:pk>/edit/', views.comment_edit, name='comment_edit'),
    path('tags/<str:tag_name>/', views.tag_detail, name='tag_detail'),
]