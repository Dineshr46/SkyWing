from django.urls import path
from .views import destination_list
from .views import destination_detail
from .views import create_booking
from .views import register_user
from .views import my_bookings
from .views import my_wishlist
from .views import add_to_wishlist
from .views import remove_wishlist
from .views import cancel_booking
from .views import profile

urlpatterns = [
    path("", destination_list),
    path("<int:pk>/", destination_detail),
    path("book/", create_booking),
    path("register/", register_user),
    path("my-bookings/", my_bookings),
    path('wishlist/', my_wishlist),
    path('wishlist/add/', add_to_wishlist),
    path('wishlist/remove/<int:pk>/', remove_wishlist),
    path('bookings/cancel/<int:pk>/', cancel_booking),
    path('profile/', profile),
]