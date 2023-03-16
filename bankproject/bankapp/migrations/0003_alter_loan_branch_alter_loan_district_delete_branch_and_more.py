# Generated by Django 4.1.5 on 2023-03-16 14:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bankapp', '0002_district_remove_loan_branches_remove_loan_districts_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='loan',
            name='branch',
            field=models.CharField(blank=True, default=None, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='loan',
            name='district',
            field=models.CharField(blank=True, default=None, max_length=250, null=True),
        ),
        migrations.DeleteModel(
            name='Branch',
        ),
        migrations.DeleteModel(
            name='District',
        ),
    ]