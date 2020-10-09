from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from django.template import loader


def index(request):
    print("entered!")
#    template = loader.get_template('main/index.html')
#    if template is None:
#        print("None")
    context = {}
    return render(request, 'main/index.html', context)
