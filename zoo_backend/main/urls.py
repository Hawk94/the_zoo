from django.conf.urls import url

from .views import ProtectedDataView

urlpatterns = [
    url(r'^data/$', ProtectedDataView.as_view(), name='protected_data'),
]
