from django.urls import path, include
from rest_framework.routers import DefaultRouter

from product import views


router = DefaultRouter()

router.register('products', views.ProductViewSet)
router.register('watchlist', views.WatchlistViewSet)


app_name = 'product'

urlpatterns = [
    path('', include(router.urls)),
]