# Generated by Django 4.1.5 on 2023-03-16 16:44

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('bankapp', '0008_customer'),
    ]

    operations = [
        migrations.RenameField(
            model_name='customer',
            old_name='team_image',
            new_name='image',
        ),
        migrations.RenameField(
            model_name='customer',
            old_name='team_name',
            new_name='name',
        ),
        migrations.AddField(
            model_name='customer',
            name='review',
            field=models.TextField(default=django.utils.timezone.now, max_length=250),
            preserve_default=False,
        ),
    ]