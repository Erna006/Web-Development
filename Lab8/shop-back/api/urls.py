from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('api/products/', views.product_list, name='product_list'),
    path('api/products/', views.product_list, name='product_list'),
    path('api/products/<int:id>/', views.product_detail, name='product_detail'),
    path('api/categories/', views.category_list, name='category_list'),
    path('api/categories/<int:id>/', views.category_detail, name='category_detail'),
    path('api/categories/<int:id>/products/', views.category_products, name='category_products'),
]