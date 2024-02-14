from django.urls import path
from . import views
from .views import ImageView

urlpatterns = [
    path('hello-world/', views.hello_world, name='hello_world'),
    path('encrypt-test/', views.encrypt_test, name='encrypt_test'),
    path('test-upload/', views.ImageView, name='test-upload'),
    path('lsb-decrypt/', views.lsb_decryption, name='lsb-decrypt'),
]