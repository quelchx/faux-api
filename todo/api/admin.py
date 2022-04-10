from django.contrib import admin


# if we want to use created models within the admin panel we have to address them here
from .models import Note
admin.site.register(Note)
