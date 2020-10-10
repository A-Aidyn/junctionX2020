from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader

from .forms import DocumentForm
from .models import Document

def handle_uploaded_file(f):
    print(f.name)
    with open('media/' + f.name, 'wb+') as destination:
        for chunk in f.chunks():
            destination.write(chunk)

def index(request):
    # if this is a POST request we need to process the form data
    if request.method == 'POST':
        print("in post")
        # create a form instance and populate it with data from the request:
        form = DocumentForm(request.POST, request.FILES)
        # form.docfile.widget_attrs().update({'class': 'upload-input'})
        # check whether it's valid:
        print(form)
        if form.is_valid():
            handle_uploaded_file(request.FILES['docfile'])
            print("form is valid")
            # process the data in form.cleaned_data as required
            # ...
            # redirect to a new URL:
            return HttpResponseRedirect('/result/')
        else:
            print("form is not valid")
    else:
        form = DocumentForm()
        print("in get")
        print(form)
    return render(request, 'main/index.html', {'form': form})