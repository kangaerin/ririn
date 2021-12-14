from django.http import HttpResponse, HttpRequest
from django.shortcuts import render, get_object_or_404

from shop.models import Post


def post_list(request: HttpRequest) -> HttpResponse:
    qs = Post.objects.all()
    query = request.GET.get("query", "")
    if query:
        qs = qs.filter(title__icontains=query)

    return render(request, "shop/post_list.html",{
        "post_list" : qs,
    })


def post_detail(request: HttpRequest, pk: int) -> HttpResponse:
    post = get_object_or_404(Post, pk=pk)
    # comment_list = post.comment_set.all()
    # tag_list = post.tag_set.all()
    return render(request, "shop/post_detail.html", {
        "post": post,
        # "comment_list": comment_list,
        # "tag_list": tag_list,
    })