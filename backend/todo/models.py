from django.db import models

class Todo(models.Model):
    title = models.CharField( max_length=120)
    description = models.TextField(verbose_name='Task description')
    completed = models.BooleanField(verbose_name='Was task completed')

    def __str__(self):
        return self.title