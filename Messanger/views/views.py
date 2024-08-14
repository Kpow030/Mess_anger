from rest_framework.response import Response
from rest_framework.views import APIView
from Messanger.models import Message
from .serializers import MessageSerializer


class SendMessageView(APIView):
    def post(selfself, request):
        serializer = MessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(sender=request.user)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


class GetMessageView(APIView):
    def get(self, request):
        messages = Message.objects.filter(recipient=request.user)
        serializer = MessageSerializer(messages, many=True)
        return Response(serializer.data)

