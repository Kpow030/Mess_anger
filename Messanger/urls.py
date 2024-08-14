from django.urls import path
from views import SendMessageView, GetMessageView

urlpatterns = [
    path('send_message/', SendMessageView.as_view()),
    path('get_message/', GetMessageView.as_view()),
]