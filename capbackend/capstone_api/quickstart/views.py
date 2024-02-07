import base64
from django.shortcuts import render, redirect
from django.contrib.auth.models import Group, User
from rest_framework import permissions, viewsets, generics, status
from .models import ImageModel
from .serializers import ImageSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

from capstone_api.quickstart.serializers import GroupSerializer, UserSerializer, TextSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

# Create your views here.
@api_view(['GET'])
def hello_world(request):
    return Response({'message': 'Hello, world!'})

@api_view(['POST'])
def encrypt_test(request):
    serializer = TextSerializer(data=request.data)
    if serializer.is_valid():
        text_data = serializer.validated_data['text_data']
        manipulated_data = text_data + ' is manipulated'
    return Response({'message': manipulated_data})

@api_view(['POST'])
def ImageView(request):
    print(request.data)
    serializer = ImageSerializer(data=request.data)

    if serializer.is_valid():
            # Save the object to the database
        image_instance = serializer.save()

            # Read the image file data
        with open(image_instance.image.path, 'rb') as image_file:
            image_data = base64.b64encode(image_file.read()).decode('utf-8')

            # Return the image data in the response
        return Response({'image_data': image_data}, status=status.HTTP_201_CREATED)
    else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['POST'])
def web_encryption(request):
    return()