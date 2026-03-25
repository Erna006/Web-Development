from django.http import JsonResponse
from .models import Product, Category  # Правильный импорт

def home(request):
    return JsonResponse({
        'message': 'Welcome to Shop API',
        'endpoints': {
            'products': '/api/products/',
            'product_detail': '/api/products/<id>/',
            'categories': '/api/categories/',
            'category_detail': '/api/categories/<id>/',
            'category_products': '/api/categories/<id>/products/'
        }
    })

def product_list(request):
    products = Product.objects.filter(is_active=True)
    data = []
    for product in products:
        data.append({
            'id': product.id,
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active,
            'category': product.category.name,
            'category_id': product.category.id
        })
    return JsonResponse(data, safe=False)

def product_detail(request, id):
    try:
        product = Product.objects.get(id=id)
        data = {
            'id': product.id,
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active,
            'category': product.category.name,
            'category_id': product.category.id
        }
        return JsonResponse(data)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)

def category_list(request):
    categories = Category.objects.all()
    data = []
    for category in categories:
        data.append({
            'id': category.id,
            'name': category.name,
            'products_count': category.products.count()
        })
    return JsonResponse(data, safe=False)

def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
        data = {
            'id': category.id,
            'name': category.name,
            'products_count': category.products.count()
        }
        return JsonResponse(data)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)

def category_products(request, id):
    try:
        category = Category.objects.get(id=id)
        products = category.products.filter(is_active=True)
        data = []
        for product in products:
            data.append({
                'id': product.id,
                'name': product.name,
                'price': product.price,
                'description': product.description,
                'count': product.count,
                'is_active': product.is_active
            })
        return JsonResponse(data, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)