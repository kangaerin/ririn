# Generated by Django 3.2.9 on 2021-11-29 09:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rin', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Aerin',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('content', models.TextField()),
            ],
        ),
        migrations.DeleteModel(
            name='Post',
        ),
    ]
