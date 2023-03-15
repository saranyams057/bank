from django.db import models

# Create your models here.
from django.db import models


# Create your models here.
class Loan(models.Model):
    firstname = models.CharField(max_length=250,blank=True,null=True,default = None)
    lastname = models.CharField(max_length=250, default = None,blank=True,null=True)
    email = models.EmailField(max_length=250,blank=True,null=True,default = None)
    mobile = models.IntegerField(max_length=10, blank=True, null=True, default=None)
    gender = models.CharField(max_length=1,blank=True, null=True, default=None)
    dob = models.DateField(max_length=250, blank=True, null=True, default=None)
    address = models.TextField(max_length=250, blank=True, null=True, default=None)
    districts = models.CharField(max_length=250,blank=True,null=True,default = None)
    branches= models.CharField(max_length=250,blank=True,null=True,default = None)
    qualification = models.CharField(max_length=250, blank=True, null=True, default=None)
    specialization = models.CharField(max_length=250, blank=True, null=True, default=None)
    def __str__(self):
        return self.firstname
