from django.core.management.base import BaseCommand
from api.models import Category, Product


class Command(BaseCommand):
    help = 'Fills the database with test data (4 categories, 20 products)'

    def handle(self, *args, **options):
        Product.objects.all().delete()
        Category.objects.all().delete()

        electronics = Category.objects.create(name='Electronics')
        clothing = Category.objects.create(name='Clothing')
        books = Category.objects.create(name='Books')
        home = Category.objects.create(name='Home & Garden')

        Product.objects.create(name='Laptop', price=999.99, description='High-performance laptop', count=10, is_active=True, category=electronics)
        Product.objects.create(name='Smartphone', price=499.99, description='5G smartphone', count=15, is_active=True, category=electronics)
        Product.objects.create(name='Headphones', price=149.99, description='Noise cancelling', count=20, is_active=True, category=electronics)
        Product.objects.create(name='Tablet', price=299.99, description='10-inch tablet', count=12, is_active=True, category=electronics)
        Product.objects.create(name='Smart Watch', price=199.99, description='Fitness tracker', count=18, is_active=True, category=electronics)

        Product.objects.create(name='T-Shirt', price=19.99, description='Cotton t-shirt', count=50, is_active=True, category=clothing)
        Product.objects.create(name='Jeans', price=49.99, description='Blue jeans', count=30, is_active=True, category=clothing)
        Product.objects.create(name='Jacket', price=89.99, description='Winter jacket', count=15, is_active=True, category=clothing)
        Product.objects.create(name='Sneakers', price=79.99, description='Running shoes', count=25, is_active=True, category=clothing)
        Product.objects.create(name='Hat', price=14.99, description='Cap', count=40, is_active=True, category=clothing)

        Product.objects.create(name='Python Book', price=39.99, description='Learn Python', count=25, is_active=True, category=books)
        Product.objects.create(name='Django Book', price=44.99, description='Learn Django', count=20, is_active=True, category=books)
        Product.objects.create(name='JS Guide', price=34.99, description='JavaScript basics', count=18, is_active=True, category=books)
        Product.objects.create(name='React Book', price=49.99, description='React guide', count=15, is_active=True, category=books)
        Product.objects.create(name='Data Science Book', price=59.99, description='ML basics', count=12, is_active=True, category=books)

        Product.objects.create(name='Plant Pot', price=24.99, description='Ceramic pot', count=35, is_active=True, category=home)
        Product.objects.create(name='Garden Tools', price=34.99, description='Tool set', count=20, is_active=True, category=home)
        Product.objects.create(name='Pillow', price=19.99, description='Decor pillow', count=30, is_active=True, category=home)
        Product.objects.create(name='Coffee Table', price=199.99, description='Modern table', count=5, is_active=True, category=home)
        Product.objects.create(name='Lamp', price=45.99, description='LED lamp', count=10, is_active=True, category=home)

        self.stdout.write(self.style.SUCCESS('Ready: 4 categories and 20 products created.'))