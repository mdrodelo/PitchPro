from django.urls import path
from . import views

urlpatterns = [
    path('heatmap/', views.HeatmapView.as_view(), name='heatmap'),
]
