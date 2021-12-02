from django.shortcuts import render
from django.http import HttpRequest, HttpResponse
from catube.models import Video
from django.views.generic import ListView


# Class Based View(CBV) 클래스 기반의 view
# index = ListView.as_view(model=Video, template_name="catube/index.html")

# Fuction Based View (FBV) 함수기반 view
def index(request: HttpRequest) -> HttpResponse:
    qs = Video.objects.all()
    return render(
        request,
        "catube/index.html",
        {
            "video_list": qs,
        },
    )


def video_detail(request: HttpRequest, pk: int) -> HttpResponse:
    video = Video.objects.get(pk=pk)
    return render(
        request,
        "catube/video_detail.html",
        {
            "video": video,
        },
    )
