from django.urls import path
from . import views
from .views import ImageView

urlpatterns = [
    path('hello-world/', views.hello_world, name='hello_world'),
    path('encrypt-test/', views.encrypt_test, name='encrypt_test'),
    path('test-upload/', views.ImageView, name='test-upload'),
    path('lsb-decrypt/', views.lsb_decryption, name='lsb-decrypt'),
    path('vig-encrypt/', views.vig_encryption, name='vig-encrypt'),
    path('vig-decrypt/', views.vig_decryption, name='vig-decrypt'),
    path('caesar-encrypt/', views.caesar_encryption, name='caesar-encrypt'),
    path('caesar-decrypt/', views.caesar_decryption, name='caesar-decrypt')
]