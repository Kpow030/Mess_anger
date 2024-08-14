from rest_framework.response import Response
from rest_framework.views import APIView
from Messanger.models import User
from Messanger.views import UserSerializer


class UserListView(APIView):
    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)