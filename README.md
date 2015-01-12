# React-Event-Mixin

> Event binding cross browser for reactjs


## Getting Started

Install via [npm](http://npmjs.org/react-event-mixin)

```shell
   npm i react-event-mixin --save-dev
```

## Usage

```Javascript
var EventMixin = require('react-event-mixin')

React.createClass({ 
  mixins: [EventMixin],

  componentWillMount: function() {
    this.addEvent(window, 'resize', this.handleResize);
  },

  componentWillUnmount: function() {
    this.removeEvent(window, 'resize', this.handleResize);
  },

  handleResize: function() {
    // Do resize 
  }

})

```

## API

**addEvent**
Detect an event for DOM element
e.g. `window` or `any DOM element`
```
  addEvent: function (el, event, handler)
```

**removeEvent**
Undetect an event for DOM element
e.g. `window` or `any DOM element`
```
  removeEvent: function (el, event, handler)
```


## License

MIT
