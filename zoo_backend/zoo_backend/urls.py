"""zoo_backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls import include, url
from django.views.decorators.cache import cache_page

from django.contrib import admin
from accounts import urls as accounts_urls
from main import urls as main_urls
from main import views as main_views


urlpatterns = [
    url(r'^main/', include(main_urls)),
    url(r'^accounts/', include(accounts_urls)),
    url(r'^admin/', include(admin.site.urls)),
    
    url(r'', cache_page(settings.PAGE_CACHE_SECONDS)(main_views.IndexView.as_view()), name='index'),
]
