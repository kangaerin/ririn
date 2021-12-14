from django.contrib import messages
from django.http import HttpResponse, HttpRequest
from django.shortcuts import render, get_object_or_404, redirect
from shop.forms import PostForm, CommentForm

from shop.models import Post, Comment


def post_list(request: HttpRequest) -> HttpResponse:
    qs = Post.objects.all()
    query = request.GET.get("query", "")
    if query:
        qs = qs.filter(title__icontains=query)

    return render(request, "shop/post_list.html", {
        "post_list": qs,
    })


def post_detail(request: HttpRequest, pk: int) -> HttpResponse:
    post = get_object_or_404(Post, pk=pk)
    comment_list = post.comment_set.all()
    tag_list = post.tag_set.all()
    return render(request, "shop/post_detail.html", {
        "post": post,
        "comment_list": comment_list,
        "tag_list": tag_list,
    })


def post_new(request: HttpRequest) -> HttpResponse:
    if request.method == "POST":
        form = PostForm(request.POST, request.FILES)
        if form.is_valid():
            post = form.save()
            messages.success(request, "성공적으로 저장했습니다.")
            return redirect("shop:post_list")
    else:
        form = PostForm()
    return render(request, "shop/post_new.html", {
        "form": form,
    })


def post_edit(request: HttpRequest, pk: int) -> HttpResponse:
    post = get_object_or_404(Post, pk=pk)

    if request.method == "POST":
        form = PostForm(request.POST, request.FILES, instance=post)
        if form.is_valid():
            form.save()
            messages.success(request, "성공적으로 수정했습니다.")
            return redirect("shop:post_list")
    else:
        form = PostForm(instance=post)

    return render(request, "shop/post_new.html", {
        "form": form,
    })


def comment_new(requset: HttpRequest, post_pk: int) -> HttpResponse:
    post = get_object_or_404(Post, pk=post_pk)

    if requset.method == "POST":
        form = CommentForm(requset.POST, requset.FILES)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.post = post
            comment.save()
            return redirect("shop:post_detail", post_pk)
    else:
        form = CommentForm()
    return render(requset, "shop/comment_new.html", {
        "form": form,
    })


def comment_edit(request: HttpRequest, post_pk: int, pk: int) -> HttpResponse:
    comment = get_object_or_404(Comment, pk=pk)

    if request.method == "POST":
        form = CommentForm(request.POST, request.FILES, instance=comment)
        if form.is_valid():
            form.save()
            return redirect("shop:post_detail", post_pk)
    else:
        form = CommentForm(instance=comment)

    return render(request, "shop/comment_new.html", {
        "form": form,
    })


def tag_detail(request: HttpRequest, tag_name: str) -> HttpResponse:
    qs = Post.objects.all()
    qs = qs.filter(tag_set__name=tag_name)

    return render(request, "shop/tag_detail.html", {
        "tag_name": tag_name,
        "post_list": qs,
    })