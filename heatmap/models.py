# Create your models here.
from django.db import models
from user_api.models import User
import pandas as pd

# creating PlayerMovements data table
class PlayerMovement(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name='+'),
    movement_id = models.BigAutoField(primary_key=True)  # MovementID as a primary key
    session_date = models.DateField()  # SessionDate
    timestamp = models.TimeField()  # Timestamp
    latitude = models.FloatField()  # Latitude
    longitude = models.FloatField()  # Longitude
    heart_rate = models.IntegerField(null=True, blank=True)  # Heart Rate, allowing null values