from rest_framework import serializers
from .models import Destination, Booking
from django.contrib.auth.models import User
from .models import Wishlist

class DestinationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Destination
        fields = '__all__'


class BookingSerializer(serializers.ModelSerializer):
    destination_title = serializers.CharField(
        source="destination.title",
        read_only=True
    )
    destination_image = serializers.CharField(
        source="destination.image",
        read_only=True
    )

    class Meta:
        model = Booking
        fields = fields = [
            "id",
            "user",
            "destination",
            "travel_date",
            "travelers",
            "created_at",
            "destination_title",
            "destination_image",
        ]


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only = True)
    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def create(self, validated_data):
        return User.objects.create_user(
            username = validated_data['username'],
            email = validated_data['email'],
            password = validated_data['password']
        )
    

class WishlistSerializer(serializers.ModelSerializer):
    destination_title = serializers.CharField(
        source="destination.title",
        read_only=True
    )
    destination_image = serializers.CharField(
        source="destination.image",
        read_only=True
    )
    destination_country = serializers.CharField(
        source="destination.country",
        read_only=True
    )

    class Meta:
        model = Wishlist
        fields = [
            "id",
            "destination",
            "destination_title",
            "destination_image",
            "destination_country",
            "created_at"
        ]