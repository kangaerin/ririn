from django.http import HttpRequest, HttpResponse
from django.shortcuts import render
from Pe.models import Pe


def index(request: HttpRequest) -> HttpResponse:
    qs = Pe.objects.all()
    return render(
        request,
        "Pe/index.html",
        {
            "Image_list": qs,
        }
    )
