from django.shortcuts import render
from details.models import people
from django.http import JsonResponse, HttpResponse
import json
from django.core.serializers.json import DjangoJSONEncoder
from django.views.decorators.csrf import csrf_exempt


def data(request):
    print("hii",request)
    data=people.objects.all().values()
    return JsonResponse({'data': list(data)})

# Create your views here.
@csrf_exempt 
def filter(request):
    if request.method == 'POST':  # Or use 'PUT' depending on your frontend API
        data = json.loads(request.body)  # Use .dict() to convert POST data to a dictionary
        # Process the data as needed
        if(data.specialisation=="Software Engineer"):
            pass
        print(data)
        return JsonResponse({'message': 'Data received successfully'})
    else:
        return JsonResponse({'error': 'Invalid method'}, status=405)