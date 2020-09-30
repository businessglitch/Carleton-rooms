	
# Rooms
 The web-app allows you to view schedules on a calendar for all classrooms at Carleton University  {Place architecture diagram here}

## Getting Started

These instructions will get you a copy of the project and have the app running on your local machine for development and testing purposes. 

### Built With
SEAN Stack

* [Angular](https://angularjs.org/) - The web framework used
* [Node/Express](https://expressjs.com) - Backend framework
* [Sqlite](https://sqlite.org/) - Database
* [Firebase](https://firebase.google.com/docs/hosting) - Hosting
* [Calendar](https://fullcalendar.io/) - Calendar Used



Data was scrapped from Carleton's public classroom calendars https://central.carleton.ca/prod/bwysched.p_select_term?wsea_code=EXT

### Prerequisites
Dependencies you need to install the software


#### Clone

- Clone this repo to your local machine using `https://github.com/businessglitch/Carleton-rooms.git`

#### Setup
> move into the project directory

```shell
$ cd rooms
```

> update all the packages

```shell
$ brew update
```

> install server side dependencies

```shell
cd functions
$ npm install
```

> install client side dependencies

```shell
$ cd client
$ npm install
$ ng build
```

> run the application
In the root directory
```shell
$ firebase serve --only
```
---

## Support

Feel free to reach out to me at:

- Instagram at <a href="https://www.instagram.com/fahoodii_h/" target="_blank">`@fahoodii_h`</a>
- LinkedIn at <a href="https://www.linkedin.com/in/fahdhayat/" target="_blank">`Fahad Hayat`</a>
---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2015 © <a href="http://fvcproductions.com" target="_blank">FVCproductions</a>.
