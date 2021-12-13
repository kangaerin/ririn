from django.contrib import admin
from shop.forms import ShopForm
from shop.models import Shop, Review, Tag, Category


@admin.register(Category)
class Category(admin.ModelAdmin):
    form = ShopForm


@admin.register(Shop)
class ShopAdmin(admin.ModelAdmin):
    pass


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    pass


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    pass
