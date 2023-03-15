from django import forms
from .models import Loan


class LoanForm(forms.ModelForm):
    class Meta:
        model = Loan
        fields = ['firstname', 'lastname', 'email', 'mobile','gender','dob','address','districts','branches','qualification','specialization']