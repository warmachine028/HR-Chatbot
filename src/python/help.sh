# create a Virtual Environment
$> py -m venv <environment-name>

# activate the Virtual Environment
$> src/Scripts/Activate.ps1 

# view all packages installed 
$> pip list

# view all installed libraries by using pip list and generate a text file listing all your project
$> pip freeze > requirements.txt

# run the code below to install all your dependencies
$> pip install -r requirements.txt

# deactivate the environment
$> deactivate

