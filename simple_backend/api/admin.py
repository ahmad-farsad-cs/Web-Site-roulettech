from django.contrib import admin
from .models import Task  # Import the Task model

# Register the Task model with the admin site
admin.site.register(Task)