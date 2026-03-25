from django.core.management.base import BaseCommand
from api.models import Category, Product

class Command(BaseCommand):
    help = 'Заполняет базу данных тестовыми данными'
    
    def handle(self, *args, **options):
        Product.objects.all().delete()
        Category.objects.all().delete()
        
        electronics = Category.objects.create(name='Electronics')
        clothing = Category.objects.create(name='Clothing')
        books = Category.objects.create(name='Books')
        
        Product.objects.create(
            name='Laptop',
            price=999.99,
            description='High-performance laptop with 16GB RAM',
            count=10,
            is_active=True,
            category=electronics
        )
        
        Product.objects.create(
            name='Smartphone',
            price=499.99,
            description='Latest smartphone model with 5G',
            count=15,
            is_active=True,
            category=electronics
        )
        
        Product.objects.create(
            name='T-Shirt',
            price=19.99,
            description='Cotton t-shirt, various colors',
            count=50,
            is_active=True,
            category=clothing
        )
        
        Product.objects.create(
            name='Jeans',
            price=49.99,
            description='Classic blue jeans',
            count=30,
            is_active=True,
            category=clothing
        )
        
        Product.objects.create(
            name='Python Book',
            price=39.99,
            description='Learn Python programming',
            count=25,
            is_active=True,
            category=books
        )
        
        self.stdout.write(self.style.SUCCESS('База данных успешно заполнена!'))