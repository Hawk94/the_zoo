from django.conf.urls import url
from django.utils.translation import ugettext_lazy as _

from .views import UserLoginView, UserRegisterView

urlpatterns = [
    url(r'^register/$', UserRegisterView.as_view(), name='register'),
    url(r'^login/$', UserLoginView.as_view(), name='login'),

]
