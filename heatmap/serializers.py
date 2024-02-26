from rest_framework import serializers
from rest_framework.renderers import JSONRenderer

# import the todo data model
from .models import PlayerMovement


# create a serializer class
class HeatmapSerializer(serializers.Serializer):
    image = serializers.ImageField()

    """"# create a meta class
    class Meta:
        model = PlayerMovement
        fields = ('id', 'title', 'description', 'completed')"""