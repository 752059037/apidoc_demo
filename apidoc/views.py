from django.shortcuts import render, HttpResponse

from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes

# Create your views here.
@api_view(http_method_names=['post', 'get'])
@csrf_exempt
def index(request):
    """
@api {get} /:id Request User information
@apiName GetUser
@apiGroup Test--apiGroup



@api {post} /
@apiParam {Number} id Users unique ID.
 """
    print(request.POST)
    msg = request.POST.get('id')
    
    print(msg)
    return Response({"id": msg})
