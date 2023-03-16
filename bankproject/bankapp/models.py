
from django.db import models

class Loan(models.Model):
    firstname = models.CharField(max_length=250, blank=True, null=True, default=None)
    lastname = models.CharField(max_length=250, default = None,blank=True,null=True)
    email = models.EmailField(max_length=250,blank=True,null=True,default = None)
    mobile = models.IntegerField(max_length=10, blank=True, null=True, default=None)
    gender = models.CharField(max_length=1,blank=True, null=True, default=None)
    dob = models.DateField(max_length=250, blank=True, null=True, default=None)
    address = models.TextField(max_length=250, blank=True, null=True, default=None)
    account = models.CharField(max_length=250, blank=True, null=True, default=None)
    meterials = models.CharField(max_length=250, blank=True, null=True, default=None)
    district = models.CharField(max_length=250, blank=True, null=True, default=None)
    branch = models.CharField(max_length=250, blank=True, null=True, default=None)
    # branch = models.ForeignKey(Branch, on_delete=models.SET_NULL, blank=True, null=True)

    def __str__(self):
        return self.firstname

class team(models.Model):
    team_name = models.CharField(max_length=250)
    team_image = models.ImageField(upload_to='pics2')
    position =  models.CharField(max_length=250)
    def __str__(self):
        return self.team_name

class customer_testmonials(models.Model):
    name = models.CharField(max_length=250)
    review = models.TextField(max_length=250)
    image = models.ImageField(upload_to='pics')
    position =  models.CharField(max_length=250)
    def __str__(self):
        return self.name