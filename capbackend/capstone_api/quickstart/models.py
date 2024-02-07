from django.db import models

# Create your models here.
class ImageModel(models.Model):
    image = models.ImageField(upload_to='images/')
# ^^^ creates a model to store images