from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import viewsets, fbv, cbv, mixins, generics

router = DefaultRouter()
router.register('categories', viewsets.CategoryViewSet)
router.register('products', viewsets.ProductViewSet)

urlpatterns = [
    # Level 1: ViewSets
    path('', include(router.urls)),

    # Level 2: Function-Based Views
    path('fbv/products/', fbv.products_list, name='fbv-products-list'),
    path('fbv/products/<int:product_id>/', fbv.product_detail, name='fbv-product-detail'),

    # Level 3: Class-Based Views
    path('cbv/products/', cbv.ProductListAPIView.as_view(), name='cbv-products-list'),
    path('cbv/products/<int:product_id>/', cbv.ProductDetailAPIView.as_view(), name='cbv-product-detail'),

    # Level 4: Mixins endpoints
    path('api/mixins/products/', mixins.ProductListAPIView.as_view(), name='mixins-products-list'),
    path('api/mixins/products/<int:product_id>/', mixins.ProductDetailAPIView.as_view(), name='mixins-product-detail'),

    # Level 5: Generic Views
    path('api/generics/products/', generics.ProductListAPIView.as_view(), name='generics-products-list'),
    path('api/generics/products/<int:product_id>/', generics.ProductDetailAPIView.as_view(), name='generics-product-detail'),
    
    # 5: Category endpoints
    path('api/generics/categories/', generics.CategoryListAPIView.as_view(), name='generics-categories-list'),
    path('api/generics/categories/<int:category_id>/', generics.CategoryDetailAPIView.as_view(), name='generics-category-detail'),
    
    # 5: Custom: Products by category
    path('api/generics/categories/<int:category_id>/products/', generics.CategoryProductsAPIView.as_view(), name='generics-category-products'),
]