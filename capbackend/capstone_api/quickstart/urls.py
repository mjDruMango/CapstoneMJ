from django.urls import path
from . import views

urlpatterns = [
    path('hello-world/', views.hello_world, name='hello_world'),
    path('encrypt-test/', views.encrypt_test, name='encrypt_test')
]