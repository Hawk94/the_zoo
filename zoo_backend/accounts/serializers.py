from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email')


class UserRegistrationSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()

    class Meta:
        model = User
        fields = ('id', 'email', 'password')

    def create(self, validated_data):
        """
        Create the object.

        :param validated_data: string
        """
        user = User.objects.create(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user

    def validate_email(self, email):
        """
        Validate if email is valid or there is an user using the email.
        """

        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError('Email already in use, please use a different email address.')

        return email
