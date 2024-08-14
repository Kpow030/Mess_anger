from django.urls import path
from .views import UserView, UserListView

urlpatterns = [
    path('user/', UserView.as_view()),
    path('users/', UserListView.as_view())
]