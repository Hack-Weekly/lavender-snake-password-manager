from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.exceptions import ValidationError
User=get_user_model()
#project imports

from api.models import LockBox


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email']




class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['email'] = user.email
        # ...

        return token


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('email','password', 'password2')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            email=validated_data['email']
        )

        user.set_password(validated_data['password'])
        user.save()

        return user

# project serializers
class LockBoxSerializer(serializers.ModelSerializer):
    class Meta:
        model = LockBox
        fields = ['login_website','login_id','login_password','login_note']
        read_only_fields = ['id']
        extra_kwargs = {
            'user': {'write_only': True},
            'id': {'read_only': True},
        }

    def create(self, validated_data):
        
        return super().create(validated_data)

    # def validate(self, data):
    #     if not data['login_website'] and not data['login_id'] and not data['login_password'] and not data['login_note']:
    #         raise ValidationError("At least one field must be filled")
    #     return data