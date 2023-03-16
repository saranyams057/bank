from django.contrib import admin
from  . models import Loan
from  . models import customer_testmonials
# Register your models here.
admin.site.register(Loan)

from . models import team
admin.site.register(team)
admin.site.register(customer_testmonials)