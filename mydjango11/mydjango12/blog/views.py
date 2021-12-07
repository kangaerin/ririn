from django.http import HttpRequest, HttpResponse
from django.shortcuts import render
from blog.models import Post


def index(request):
    return render(request, "blog/index.html")

def post_list(request: HttpRequest) -> HttpResponse:
    # request.GET : QueryString Values
    # request.POST : Post 요청 Values
    # request.FILES : Post 요청에서 파일 Values

    qs = Post.objects.all() # QuerySet Type

    q = request.GET.get("q", "") #하나의 사전
    if q:
        qs = qs.filter(title__icontains=q)

    # blog/templates/blog/post_list.html 을 만들어야함.
    return render(request, "blog/post_list.html", {
        "post_list": qs,
    })

def post_detail(request: HttpRequest, pk: int) -> HttpResponse:
    # pk = 1 #premary key
    post = Post.objects.get(pk=pk) #id=pk로 써도됨. PK키기 때문에 pk=pk로 가능.
    return render(request, "blog/post_detail.html", {
        "post": post,
    })

# 타입을 안써도 에러는 안나지만 쓰면 더 안정해짐.