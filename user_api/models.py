from django.db import models


class User(models.Model):
    username = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)  # You should use a hashed password in a real-world application

    def __str__(self):
        return self.username
