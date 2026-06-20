from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Destination(models.Model):
    title = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    price = models.IntegerField()
    ratings = models.FloatField()
    image = models.URLField()
    description = models.TextField()

    def __str__(self):
        return self.title


class Booking(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )
    destination = models.ForeignKey(
        Destination,
        on_delete=models.CASCADE
    )
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=10)
    travel_date = models.DateField()
    travelers = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.destination.title}"
    

class Wishlist(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )
    destination = models.ForeignKey(
        Destination,
        on_delete=models.CASCADE
    )
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.destination.title}"