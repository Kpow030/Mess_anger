from django.db import models


class Message(models.Model):
    text = models.TextField()
    sender = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    recipient = models.ForeignKey('auth.User', on_delete=models.CASCADE, related_name='recipient')
    created_at = models.DateimeField(auto_now_add=True)