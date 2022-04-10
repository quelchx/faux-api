from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # letting api/urls.py handle routes
    path('api/', include('api.urls'))
]
