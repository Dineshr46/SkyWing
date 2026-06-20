from django.contrib import admin
from .models import Destination
from .models import Booking
from .models import Wishlist

# Register your models here.
admin.site.register(Destination)
admin.site.register(Booking)
admin.site.register(Wishlist)   