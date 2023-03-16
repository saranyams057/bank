from django.contrib import auth, messages
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.shortcuts import render, redirect
from .forms import LoanForm
from bankapp.models import Loan, team, customer_testmonials


# Create your views here.
def home(request):
    obj1 = team.objects.all()
    dic = {'res': obj1}
    return render(request, "index.html",dic)


def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = auth.authenticate(username=username, password=password)
        if user is not None:
            auth.login(request, user)
            return redirect('application')
        else:
            messages.success(request, "Invalid credentials")
            return redirect('login')
    return render(request, "login.html")


def register(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        cpassword = request.POST['cpassword']
        if password == cpassword:
            if User.objects.filter(username=username).exists():
                messages.info(request, "Username already exist")
                return redirect('register')
            else:
                user = User.objects.create_user(username=username,password=password)
                user.save()
                messages.info(request, "User created")
                return redirect('login')
            #return redirect('register')
        else:
            messages.info(request, "Password not matching")
            return redirect('register')
    return render(request, "register.html")


def application(request):
    obj1 = customer_testmonials.objects.all()
    dic = {'res': obj1}
    return render(request,"btn.html",dic)


def form(request):
    if request.method == "POST":
        firstname = request.POST.get('firstname', )
        lastname = request.POST.get('lastname', )
        email = request.POST.get('email', )
        mobile = request.POST.get('mobile', )
        gender = request.POST.get('gender', )
        dob = request.POST.get('dob', )
        address = request.POST.get('address', )
        district = request.POST.get('district', )
        branch = request.POST.get('branch', )
        account = request.POST.get('account', )
        meterials = request.POST.get('meterials', )
        loan = Loan(firstname=firstname,lastname=lastname ,email=email,mobile=mobile,gender=gender,dob=dob,address=address,district=district,branch=branch,account=account,meterials=meterials)
        # loan1 = LoanForm(request.POST or None, request.FILES, instance=loan)
        # if loan1.is_valid():
        loan.save()
        # return redirect('/')
    return render(request,"application.html")

def logout(request):
    auth.logout(request)
    return redirect('/')

