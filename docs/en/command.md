EaseAdmin command-line tool provides rich `ace` commands to simplify development and maintenance work. You can use `node ace list` to view all available commands.

# Create Admin Application

You can use the `node ace admin:create [name] [--force]` command to create an admin application.
The name of the admin application will be used as the directory name, configuration file name, model file name, and route prefix, and cannot be changed. It is recommended to use lowercase letters and underscores for naming.

Parameter Description:
| Parameter | Default Value | Description |
| :---------- | :----------------- | :--------------: |
| name | admin | Admin application name |
| --force | false | Whether to force overwrite |

# Create Model Repository

You can use the `node ace admin:repository [repository] [--model=] [--name=] [--force]` command to create a model repository.
The model repository is the API layer that supports the admin application. It is recommended that one model corresponds to one repository.

Parameter Description:
| Parameter | Default Value | Description |
| :---------- | :----------------- | :--------------: |
| repository | None | Model repository name |
| --model | None | If not specified, defaults to the same as the repository name |
| --name | admin | Belonging admin application name |
| --force | false | Whether to force overwrite |

# Create Controller

You can use the `node ace admin:controller [controller] [--repository=] [--name=] [--force]` command to create a controller.

Parameter Description:
| Parameter | Default Value | Description |
| :---------- | :----------------- | :--------------: |
| controller | None | Controller name |
| --repository | None | If not specified, defaults to the same as the controller name |
| --name | admin | Belonging admin application name |
| --force | false | Whether to force overwrite |