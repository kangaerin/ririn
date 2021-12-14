from django.http import HttpResponse, HttpRequest
from django.shortcuts import render, get_object_or_404
from shop.models import Post


def post_list(request: HttpRequest) -> HttpResponse:
    qs = Post.objects.all()
    query = request.GET.get("query", "")
    if query:
        qs = qs.filter(name__icontains=query)

    return render(request, "shop/post_list.html", {
        "post_list": qs,
    })


def post_detail(request: HttpRequest, pk: int) -> HttpResponse:
    shop = get_object_or_404(Post, pk=pk)
    return render(request, "shop/post_detail.html", {
        "post": shop,
    })

