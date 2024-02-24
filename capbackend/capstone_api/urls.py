"""
URL configuration for capstone_api project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('lsb/encrypt/', views.ImageView, name='test-upload'),
    path('lsb/decrypt/', views.lsb_decryption, name='lsb-decrypt'),
    path('vig/encrypt/', views.vig_encryption, name='vig-encrypt'),
    path('vig/decrypt/', views.vig_decryption, name='vig-decrypt'),
    path('caesar/encrypt/', views.caesar_encryption, name='caesar-encrypt'),
    path('caesar/decrypt/', views.caesar_decryption, name='caesar-decrypt'),
]

urlpatterns += router.urls
