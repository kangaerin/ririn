from django.contrib import messages
from django.http import HttpResponse, HttpRequest, Http404
from django.shortcuts import render, redirect, get_object_or_404

from diary.forms import PostForm, CommentForm
from diary.models import Post, Comment


def tag_detail(request: HttpRequest, tag_name: str) -> HttpResponse:
    qs = Post.objects.all()
    qs = qs.filter(tag_set__name=tag_name)

    return render(request, "diary/tag_detail.html", {
        "tag_name": tag_name,
        "post_list": qs,
    })


def post_list(request: HttpRequest) -> HttpResponse:
    qs = Post.objects.all()

    query = request.GET.get("query", "")
    if query:
        qs = qs.filter(title__icontains=query)

    return render(request, "diary/post_list.html", {
        "post_list": qs,
    })


def post_detail(request: HttpRequest, pk: int) -> HttpResponse:
    post = get_object_or_404(Post, pk=pk)

    # try:
    #     post = Post.objects.get(pk=pk) # DoesNotExist 예외
    # except Post.DoesNotExist:
    #     raise Http404 # 예외 발생

    comment_list = post.comment_set.all()
    tag_list = post.tag_set.all()
    return render(request, "diary/post_detail.html", {
        "post": post,
        "comment_list": comment_list,
        "tag_list": tag_list,
    })


def post_new(request: HttpRequest) -> HttpResponse:
    if request.method == "POST":  # 항상 대문자
        # POST 요청을 받았을 때
        form = PostForm(request.POST, request.FILES)
        if form.is_valid():
            post = form.save(commit=False)
            post.ip = request.META["REMOTE_ADDR"]
            post.save()
            messages.success(request, "성공적으로 저장했습니다.")
            return redirect("diary:post_list")
    else:
        # GET 요청을 받았을 때
        form = PostForm()

    return render(request, "diary/post_form.html", {
        "form": form,
    })


def post_edit(request: HttpRequest, pk: int) -> HttpResponse:
    # 아래 코드는 ModelForm에 한해 동작하는 코드.
    post = get_object_or_404(pk=pk)

    if request.method == "POST":
        form = PostForm(request.POST, request.FILES, instance=post)
        if form.is_valid():
            form.save
            messages.success(request, "성공적으로 수정했습니다.")
            return redirect("diary:post_list")
    else:
        form = PostForm(instance=post)

    return render(request, "diary/post_form.html", {
        "form": form,
    })


# /diary/100/comments/new/
# 100번째 포스트의 댓글
def comment_new(request: HttpRequest, post_pk) -> HttpResponse:
    post = get_object_or_404(Post, pk=post_pk)

    if request.method == "POST":
        form = CommentForm(request.POST, request.FILES)
        if form.is_valid():
            # form.cleaned_data # 유효성 검사에 통과한 값들(dict)
            comment = form.save(commit=False)
            # comment.post_id = post_pk # 할 순 있으나 FK를 직접 채우진 않음.
            comment.post = post
            comment.save()
            return redirect("diary:post_detail", post_pk)
    else:
        form = CommentForm()

    return render(request, "diary/comment_form.html", {
        "form": form,
    })


# /diary/100/comments/20/edit/
# 20만으로도 찾을 수 있지만 일관성있게 주기 위해 100을 추가로 넣음.
# 100번째 포스트의 20번째 댓글 수정
def comment_edit(request: HttpRequest, post_pk: int, pk: int) -> HttpResponse:
    comment = get_object_or_404(Comment, pk=pk)

    if request.method == "POST":
        form = CommentForm(request.POST, request.FILES, instance=comment)
        if form.is_valid():
            form.save()
            return redirect("diary:post_detail", post_pk)
    else:
        form = CommentForm(instance=comment)

    return render(request, "diary/comment_form.html", {
        "form": form,
    })
