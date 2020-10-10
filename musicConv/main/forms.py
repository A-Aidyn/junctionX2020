from django import forms


class DocumentForm(forms.Form):
    docfile = forms.FileField(widget=forms.FileInput(attrs={'class': 'upload-input',
                                                            'accept': '.mp3,audio/*',
                                                            'onchange':'selectedFileHandler()'}))
