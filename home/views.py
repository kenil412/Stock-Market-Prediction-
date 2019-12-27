from django.shortcuts import render
#from django.shortcuts import render_to_response
from django.views.generic import TemplateView
from django.http import HttpResponseRedirect
from django.contrib import auth
from django.template.context_processors import csrf


def index(request):
    c={}
    c.update(csrf(request))
    return render(request,'stock-market-UI/demo.goodlayers.com/finanza/index.html',c)
