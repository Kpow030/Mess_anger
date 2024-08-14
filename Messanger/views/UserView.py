from rest_framework.response import Response
from rest_framework.views import APIView
from .models import User
from .serializers import UserSerializer


class UserView(APIView):
    def get(self, request):
        user = request.user
        serializer = UserSerializer
        return Response(serializer.data)

    def put(self, request):
        user = request.user
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
