from django.contrib import messages
from django.http import HttpResponse, HttpRequest
from django.shortcuts import render, get_object_or_404, redirect
from shop.forms import PostForm
from shop.models import Post


def post_list(request: HttpRequest) -> HttpResponse:
    post_qs = Post.objects.all()
    return render(request, "shop/post_list.html", {
        'post_list': post_qs,
    })


def post_detail(request: HttpRequest, pk: int) -> HttpResponse:
    post = get_object_or_404(Post, pk=pk)
    return render(request, "shop/post_detail.html", {
        "post": post,
    })


def post_new(request: HttpRequest) -> HttpResponse:
    # request.method # GET, POST 대문자.

    if request.method == "POST":
        form = PostForm(request.POST, request.FILES)
        if form.is_valid():
            saved_post = form.save()
            messages.success(request, "새로운 포스팅을 저장했습니다.")
            return redirect("shop:post_detail", saved_post.pk)
    else:
        form = PostForm()

    return render(request, "shop/post_form.html", {
        "form": form,
    })


def post_edit(request: HttpResponse, pk: int) -> HttpResponse:
    post = get_object_or_404(Post, pk=pk)

    if request.method == "POST":
        form = PostForm(request.POST, request.FILES, instance=post)
        if form.is_valid():
            saved_post = form.save()
            messages.success(request, f"#{pk}번 포스팅을 저장했습니다.")
            return redirect('blog:post_detail', saved_post.pk)
    else:
        form = PostForm(instance=post)

    return render(request, "shop/post_form.html", {
        "form": form,
        "post": post,
    })


def post_delete(request: HttpRequest, pk: int) -> HttpResponse:
    post = get_object_or_404(Post, pk=pk)
    if request.method == "POST":
        post.delete()  # 실제로 db에 dedlte 쿼리 실행
        messages.success(request, f"{pk}번 포스팅을 삭제했습니다.")
        return redirect("blog:post_list")

    return render(
        request,
        "shop/post_confirm_delete.html",
        {
            "post": post,
        })
