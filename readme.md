# DJANGO SETUP NOTES

## In order to create a virtualenv for django I had to

- check if latest python version is installed
- check if pip is installed
- use the wsl2 terminal (recommended if on windows)
- run command `pip install virtualenv`
- if they're problems run `pip3 uninstall virtualenv` then re run `pip install virtual env`
- once installed run `virtualenv env` to create a virtual enviroment.
- cd into env/bin then run `. activate`
- to exit to virtualenv run `deactivate`

## Next Step: Install Django

Before doing the next steps make sure you exit the env/bin directory into the main project directory you wish to work in.

- run `pip install django`

Note: the next few commands might require a global `DJANGO` package installed for this command to work.

- run `django-admin` to verify django is installed.
- run `django-admin startproject projectname` to create a project

## Running the Django Server

- To run the server `cd projectname` then `python manage.py runserver`

## To create a directory to work with

- This will run a basic template -- afterwords we can run `python manage.py startapp base` note: base can be named whatever

- To start working with a database run `python manage.py migrate`

## Migrations

- To make migrations run `python manage.py makemigrations` then run `python manage.py migrate`

## Superuser

- To create a admin level user run `python manage.py createsuperuser` then follow the steps that prompt
