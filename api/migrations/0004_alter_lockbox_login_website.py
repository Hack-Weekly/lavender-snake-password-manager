# Generated by Django 4.2.3 on 2023-10-05 08:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_lockbox'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lockbox',
            name='login_website',
            field=models.TextField(),
        ),
    ]
