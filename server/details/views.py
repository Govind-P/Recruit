from django.shortcuts import render
from details.models import people
from django.http import JsonResponse, HttpResponse
import json
from django.core.serializers.json import DjangoJSONEncoder
from django.views.decorators.csrf import csrf_exempt


def data(request):
    specialisation = request.GET.get('specialisation')
    data = people.objects.filter(specialisation=specialisation).values()
    return JsonResponse({'data': list(data)})
