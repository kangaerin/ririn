from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.views import LoginView, LogoutView
from django.http import HttpRequest, HttpResponse
from django.shortcuts import render, redirect
from PIL import Image

from accounts.forms import LoginForm, SignupForm


def profile_image(request: HttpRequest) -> HttpResponse:
    canvas = Image.new("RGBA", (256, 256), (255, 0, 0, 100))
    # text/image

    response = HttpResponse(content_type="image/png")
    canvas.save(response, "png")

    return response


login = LoginView.as_view(
    form_class=LoginForm,
    template_name="accounts/login_form.html",
)


# 새로운 User 인스턴스를 만드는 것.
def signup(request):
    UserCreationForm
    if request.method == "POST":
        form = SignupForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect("accounts:login")
    else:
        form = SignupForm()

    return render(request, "accounts/signup_form.html", {
        "form": form,
    })

# 회원가입을 처리하는 django view 코드
# signup = CreateView.as_view(
#     form_class=UserCreationForm,
#     success_url=reverse_lazy("accounts:login"),
#     template_name="accounts/signup_form.html",
# )


@login_required
def profile(request):
    return render(request, "accounts/profile.html")


logout = LogoutView.as_view(
    next_page="accounts:login",
)
