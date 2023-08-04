from django.shortcuts import render
from details.models import people
from django.http import JsonResponse, HttpResponse
import json
from django.core.serializers.json import DjangoJSONEncoder
from django.views.decorators.csrf import csrf_exempt


def data(request):
    specialisation = request.GET.get('specialisation')
    location = request.GET.get('location')
    availability = request.GET.get('availability')
    experience = request.GET.get('experience')

    filters = {}
    if specialisation:
        filters['specialisation'] = specialisation
    if location:
        filters['location'] = location
    if availability:
        filters['availability'] = availability
    if experience:
        filters['experience'] = experience

    data = people.objects.filter(**filters).values()
    return JsonResponse({'data': list(data)})