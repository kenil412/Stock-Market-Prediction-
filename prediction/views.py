import numpy as np
import pandas as pd
import os
import re
import time
from datetime import datetime
import matplotlib.pyplot as plt
import math
from .forms import NameForm
from matplotlib import style
from django.shortcuts import render
#from django.shortcuts import render_to_response
from django.views.generic import TemplateView
from django.http import HttpResponseRedirect
from django.template.response import TemplateResponse
from django.contrib import auth
from django.template.context_processors import csrf


def prediction(request):
    c={}
    c.update(csrf(request))
    # -*- coding: utf-8 -*-
    style.use("dark_background")
    path =(r"C:\Users\KenilGajera\Desktop\SMP\DATASET-STOCK MARKET")
    statspath = path +'/_KeyStats'
    stock_list=[x[0] for x in os.walk(statspath)]
    ticker_list=[]
    for each_dir in stock_list[1:560]:
        each_file = os.listdir(each_dir)
        ticker=each_dir.split("_KeyStats\\")[1]
        ticker_list.append(ticker)
    c['ticker_list']=ticker_list
    company=''
    if request.method == 'POST':
        form = NameForm(request.POST)
        if form.is_valid():
            company=form.cleaned_data['company']
    else:
        form = NameForm()
    dic={}
    if company is not None:
        path=(r"C:\Users\KenilGajera\Desktop\SMP\save.csv")
        df = pd.read_csv(path)
        for index, row in df.iterrows():
            if row['Ticker']==company:
                dic[row['Date'].split(' ')[0]]=row['price']
        path=(r"C:\Users\KenilGajera\Desktop\SMP\predictedprice.csv")
        df = pd.read_csv(path)
        for index, row in df.iterrows():
            if row['Company_name']==company:
                c['pprice']=row['Next_year_price']
                c['pprice1']=math.floor(row['Next_year_price'])-1
                c['pprice2']=math.ceil(row['Next_year_price'])+1
                c['name']=row['Company_name']
    print(dic)
    c['dic']=dic
    c.update(csrf(request))
    return TemplateResponse(request,'stock-market-UI/crypto-admin-templates.multipurposethemes.com/index.html',c)
