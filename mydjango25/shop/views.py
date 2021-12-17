from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.http import HttpResponse
from django.shortcuts import redirect, get_object_or_404, resolve_url
from django.urls import reverse_lazy
from django.views.generic import ListView, DetailView, CreateView, UpdateView

from shop.forms import ReviewForm
from shop.mixins import ReviewUserCheckMixin
from shop.models import Shop, Category, Review


class ShopListView(ListView):
    model = Shop
    paginate_by = 3  # 한페이지에 보이는 shop 수

    def get_queryset(self):
        qs = super().get_queryset()

        query = self.request.GET.get("query", "")
        if query:
            qs = qs.filter(name__icontains=query)

            return qs

    def get_context_data(self, **kwargs):
        context_data = super().get_context_data(**kwargs)
        context_data["category_list"] = Category.objects.all()
        return context_data


shop_list = ShopListView.as_view()

shop_detail = DetailView.as_view(
    model=Shop,
)


# TODO: 작성 후 shop detail로 이동
class ReviewCreateView(LoginRequiredMixin, CreateView):
    model = Review
    form_class = ReviewForm

    # FIXME : shop detail로 이동
    # form_valid에서 직접 url 이동을 했기 때문에 아래 success_url은 불필요.
    # success_url = reverse_lazy("shop:shop_list")

    # 유효성 검사에 통과한다면...
    def form_valid(self, form) -> HttpResponse:
        # self.kwargs : URL Captured 값들이 사전으로 저장되어있음.
        shop_pk = self.kwargs["shop_pk"]
        shop = get_object_or_404(Shop, pk=shop_pk)

        review = form.save(commit=False)
        review.shop = shop
        review.user = self.request.user
        review.save()

        # return redirect('shop:shop_detail', shop.pk)
        return redirect(shop)


review_new = ReviewCreateView.as_view()


# 다중 상속(부모가 둘) LoginRequiredMixin, UpdateView
# 파이썬은 다중 상속을 지원함.(지원하지 않는 언어도 있음)
class ReviewUpdateView(LoginRequiredMixin, ReviewUserCheckMixin, UpdateView):
    model = Review
    form_class = ReviewForm

    # FIXME: shop detail로 보내기
    # success_url = reverse_lazy("shop:shop_list")

    def get_success_url(self) -> str:
        review = self.object
        return resolve_url(review.shop)


review_edit = ReviewUpdateView.as_view()
