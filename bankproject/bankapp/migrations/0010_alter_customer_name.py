# Generated by Django 4.1.5 on 2023-03-16 16:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bankapp', '0009_rename_team_image_customer_image_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='name',
            field=models.CharField(max_length=250),
        ),
    ]
