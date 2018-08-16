# Build a realtime table using Flask and Pusher Channels

This is a demo application showing how to build a realtime table using Flask and Pusher. You can read the tutorial on how it was built [here](https://pusher.com/tutorials/live-table-flask)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

This application uses the following:

 - Python 3.6 (You should have python 3.6 or higher version installed)
 - Pusher Channels (Create an account [here](https://dashboard.pusher.com/accounts/sign_up) or [login](https://dashboard.pusher.com/accounts/sign_in) here)
 - JavaScript (jQuery)

### Setting up the project

First, clone this repository to your local machine:

```sh
 $ git clone https://github.com/dongido001/python-realtime-table.git
```

 Next update the following keys in the `.env` file with your correct Pusher keys:
  ```
  PUSHER_APP_ID=app_id
  PUSHER_KEY=key
  PUSHER_SECRET=secret
  PUSHER_CLUSTER=cluster
  ```

  Finally, update the placeholder - `<PUSHER_KEY>` and `<PUSHER_CLUSTER>` with your correct Pusher Key in `/static/custom.js` file.

  ```javascript
  const pusher = new Pusher('<PUSHER_KEY>', {
    cluster: '<PUSHER_CLUSTER>',
    encrypted: true
});
```

### Running the App

To get the app running:

 - From a command line, make sure you are in the project's root folder - `realtime-table`
 - Create a virtual environment:
 ```
 python3 -m venv env
 ```
 - Activate the virtual environment:
 ```
   source env/bin/activate
 ```
 On windows? Activate it with the below:
 ```
   env/Scripts/activate
 ```

 - Install the dependencies:
 ```
 pip install -r requirements.txt
 ```

 - Finally run the app:
 ```
  flask run
 ```

 Congrats! The app should now be running on http://localhost:5000.


- Open your browser and fire up the app - http://localhost:5000/
- Then, open the backend page in another tab - http://localhost:5000/backend
- Next, add or update a flight. You would see the changes appear in realtime on the index page. 

## Built With

* [Flask](http://flask.pocoo.org/) - A microframework for Python
* [Pusher](https://pusher.com/) - APIs to enable devs building realtime features
