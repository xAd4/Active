from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProfileViewSet, UserViewSet

router = DefaultRouter()
router.register(r'', ProfileViewSet, basename='profile')
router.register(r'', UserViewSet, basename='auth')

urlpatterns = [
    path('', include(router.urls)),
]
