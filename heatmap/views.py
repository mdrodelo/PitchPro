from django.shortcuts import render

# Create your views here.

# import view sets from the REST framework
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework import permissions, status
from rest_framework.response import Response
from . import main

import base64

# import the TodoSerializer from the serializer file
from .serializers import HeatmapSerializer

# import the Todo model from the models file
from .models import PlayerMovement


# create a class for the Todo model viewsets
class HeatmapView(APIView):
    permission_classes = (permissions.AllowAny,)
    print("Reached here")

    def get(self, request):
        heatmap = main.TestHeatmap()
        res = base64.b64encode(heatmap)
        res = res.decode('utf-8')
        data = "data:image/jpeg;base64," + res
        return Response({'heatmap': data}, status=status.HTTP_200_OK)

    # create a serializer class and
    # assign it to the TodoSerializer class
    # serializer_class = HeatmapSerializer

    # define a variable and populate it
    # with the Todo list objects
    #queryset = PlayerMovement.objects.all()