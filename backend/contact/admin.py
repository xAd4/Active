from django.contrib import admin
from .models import ContactMessage
from authentication.admin import ReadOnlyFields

# Register your models here.

admin.site.register(ContactMessage, ReadOnlyFields)