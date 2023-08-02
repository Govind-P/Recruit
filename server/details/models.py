from django.db import models

# Create your models here.
class people(models.Model):
    name = models.CharField(max_length=20)
    specialisation=models.CharField(max_length=50)
    experience=models.CharField(max_length=5)
    image = models.ImageField(upload_to='images/')
    created_at = models.DateTimeField(auto_now_add=True)