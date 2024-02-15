# Create your models here.
from django.db import models
import pandas as pd
def lat_lon_adjust(df):
    latmin=df['latitude'].min()
    lonmin=df['longitude'].min()

    df['latitude']=df['latitude'].div(latmin)
    df['longitude'] = df['longitude'].div(lonmin)

    df['latitude'] = df['latitude'].multiply(latmin)
    df['longitude'] = df['longitude'].multiply(lonmin)

    return df


# creating PlayerMovements data table
class PlayerMovement(models.Model):
    movement_id = models.BigAutoField(primary_key=True)  # MovementID as a primary key
    session_date = models.DateField()  # SessionDate
    timestamp = models.TimeField()  # Timestamp
    latitude = models.FloatField()  # Latitude
    longitude = models.FloatField()  # Longitude
    heart_rate = models.IntegerField(null=True, blank=True)  # Heart Rate, allowing null values