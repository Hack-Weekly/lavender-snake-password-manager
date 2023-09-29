import json
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse,Http404
from api.serializers import MyTokenObtainPairSerializer, RegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from django.contrib.auth import get_user_model
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.views import APIView
from django.views.generic import TemplateView

User=get_user_model()
# project imports
from api.models import LockBox
from api.serializers import LockBoxSerializer

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/',
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/',
          

    ]
   
    return Response(routes)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def testEndPoint(request):
    if request.method == 'GET':
        data = f"Congratulation {request.user}, your API just responded to GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        try:
            body = request.body.decode('utf-8')
            data = json.loads(body)
            if 'text' not in data:
                return Response("Invalid JSON data", status.HTTP_400_BAD_REQUEST)
            text = data.get('text')
            data = f'Congratulation your API just responded to POST request with text: {text}'
            return Response({'response': data}, status=status.HTTP_200_OK)
        except json.JSONDecodeError:
            return Response("Invalid JSON data", status.HTTP_400_BAD_REQUEST)
    return Response("Invalid JSON data", status.HTTP_400_BAD_REQUEST)


class LockBoxAPIView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request,website=None):
        if website is None:
            return JsonResponse({'message': 'Website for query required'}, status=status.HTTP_400_BAD_REQUEST)
        lockbox=LockBox.objects.filter(user=request.user,login_website=website)
        if not lockbox:
            return JsonResponse({'message': 'The website does not exist'}, status=status.HTTP_404_NOT_FOUND)
        serializer = LockBoxSerializer(lockbox, many=True)
        return Response(serializer.data)

    def post(self, request):
        request.data['user'] = request.user.id
        serializer = LockBoxSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors)
    
    def put(self, request,website=None):
        lockbox = LockBox.objects.filter(user=request.user,login_website=website)
        if not lockbox:
            return JsonResponse({'message': 'The website does not exist'}, status=status.HTTP_404_NOT_FOUND)
        serializer = LockBoxSerializer(lockbox, data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data)
        return Response(serializer.errors)
    
    def delete(self, request,website=None):
        lockbox = LockBox.objects.filter(user=request.user,login_website=website)
        if not lockbox:
            return JsonResponse({'message': 'The website does not exist'}, status=status.HTTP_404_NOT_FOUND)
        lockbox.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

