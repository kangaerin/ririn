from django.http import HttpResponse, HttpRequest
from django.shortcuts import render
from django.template.context_processors import request


def index(requse: HttpRequest) -> HttpResponse:
    return render(request, "catbube/index.html")
