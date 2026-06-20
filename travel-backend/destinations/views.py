from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Destination, Booking
from .serializers import BookingSerializer
from .serializers import DestinationSerializer
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from .serializers import RegisterSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes
from .models import Wishlist
from .serializers import WishlistSerializer

@api_view(["GET"])
def destination_list(request):
    destinations = Destination.objects.all()
    serializer = DestinationSerializer(destinations, many = True)
    return Response(serializer.data)


@api_view(["GET"])
def destination_detail(request, pk):
    destinations = get_object_or_404(Destination, pk=pk)
    serializer = DestinationSerializer(destinations)
    return Response(serializer.data)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def create_booking(request):
    serializer = BookingSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save(user =request.user)
        return Response(serializer.data, status = 201)
    return Response(serializer.errors, status =400)    


@api_view(["POST"])
def register_user(request):
    serializer = RegisterSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status = 201)
    return Response(serializer.errors, status =400)  


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def my_bookings(request):
    bookings = Booking.objects.filter(user = request.user)
    serializer = BookingSerializer(bookings, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_to_wishlist(request):
    destination_id = request.data.get("destination")
    if Wishlist.objects.filter(
        user=request.user,
        destination_id=destination_id
    ).exists():

        return Response(
            {"message": "Already in wishlist"},
            status=400
        )

    wishlist_item = Wishlist.objects.create(
        user=request.user,
        destination_id=destination_id
    )
    serializer = WishlistSerializer(wishlist_item)

    return Response(serializer.data, status=201)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def my_wishlist(request):
    wishlist = Wishlist.objects.filter(
        user=request.user
    )

    serializer = WishlistSerializer(
        wishlist,
        many=True
    )
    
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def remove_wishlist(request, pk):
    try:
        item = Wishlist.objects.get(
            id=pk,
            user=request.user
        )
        item.delete()
        return Response(
            {"message": "Removed"},
            status=200
        )

    except Wishlist.DoesNotExist:
        return Response(
            {"error": "Not Found"},
            status=404
        )
    

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def cancel_booking(request, pk):
    try:
        booking = Booking.objects.get(
            id=pk,
            user=request.user
        )
        booking.delete()
        return Response(
            {"message": "Booking cancelled"},
            status=200
        )

    except Booking.DoesNotExist:
        return Response(
            {"error": "Booking not found"},
            status=404
        )
    

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def profile(request):
    user = request.user
    bookings_count = Booking.objects.filter(
        user=user
    ).count()

    wishlist_count = Wishlist.objects.filter(
        user=user
    ).count()

    return Response({
        "username": user.username,
        "email": user.email,
        "date_joined": user.date_joined,
        "bookings_count": bookings_count,
        "wishlist_count": wishlist_count,
    })