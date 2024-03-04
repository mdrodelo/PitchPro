from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def create(self, validated_data):
        # Extract the 'password' from validated_data
        password = validated_data.pop('password', None)

        # Create the user without the password
        user = User.objects.create(**validated_data)

        # Set the password using the set_password method
        if password:
            user.set_password(password)

        # Save the user object
        user.save()

        return user

    def update(self, instance, validated_data):
        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)
        password = validated_data.get('password', None)

        # Update the password using the set_password method
        if password:
            instance.set_password(password)

        instance.save()
        return instance
