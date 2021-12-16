from django.contrib import messages
from django.http import HttpResponse, HttpRequest
from django.shortcuts import render, get_object_or_404, redirect
from django.views.generic import CreateView

from blog.forms import PostForm, SubscriberForm
from blog.models import Post, Subscriber


def post_list(request: HttpRequest) -> HttpResponse:
    post_qs = Post.objects.all()

    format = request.GET.get("format", "")

    if format == "xlsx":
        tabular_data = Post.get_tabular_data(post_qs, format="xlsx")
        return HttpResponse(tabular_data, content_type="application/vnd.ms-excel")
    elif format == "json":
        tabular_data = Post.get_tabular_data(post_qs, format="json")
        return HttpResponse(tabular_data, content_type="application/json")

    return render(
        request,
        "blog/post_list.html",
        {
            'post_list': post_qs,
        }
    )


def post_detail(request: HttpRequest, pk: int) -> HttpResponse:
    post = get_object_or_404(Post, pk=pk)
    return render(request, "blog/post_detail.html", {
        "post": post,
    })


def post_new(request: HttpRequest) -> HttpResponse:
    # request.method # GET, POST 대문자.

    if request.method == "POST":
        form = PostForm(request.POST, request.FILES)
        if form.is_valid():
            saved_post = form.save()
            messages.success(request, "새로운 포스팅을 저장했습니다.")
            return redirect(saved_post)
            # return redirect("blog:post_detail", saved_post.pk)
    else:
        form = PostForm()

    return render(request, "blog/post_form.html", {
        "form": form,
    })


def post_edit(request: HttpResponse, pk: int) -> HttpResponse:
    post = get_object_or_404(Post, pk=pk)

    if request.method == "POST":
        form = PostForm(request.POST, request.FILES, instance=post)
        if form.is_valid():
            saved_post = form.save()
            messages.success(request, f"#{pk}번 포스팅을 저장했습니다.")
            return redirect(saved_post)
            # △ get_absolute_url이 구현안되어있으면 오류나는 코드.
            # return redirect('blog:post_detail', saved_post.pk)
    else:
        form = PostForm(instance=post)

    return render(request, "blog/post_form.html", {
        "form": form,
        "post": post,
    })


def post_delete(request: HttpRequest, pk: int) -> HttpResponse:
    post = get_object_or_404(Post, pk=pk)
    # GET 요청 : 정말 삭제를 할 것인지 한 번 더 물어봅니다.
    # POST 요청 : 삭제를 하고, 다른 주소로 이동을 시킵니다.

    if request.method == "POST":
        post.delete()  # 실제로 db에 dedlte 쿼리 실행
        messages.success(request, f"{pk}번 포스팅을 삭제했습니다.")
        return redirect("blog:post_list")

    return render(
        request,
        "blog/post_confirm_delete.html",
        {
            "post": post,
        })

subscriber_new = CreateView.as_view(
    model=Subscriber,
    form_class=SubscriberForm,
)