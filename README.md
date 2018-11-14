This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). All of the usual create react app stuff applies.

## Analytics Wrapper Strawman

This is to provide a conversation starter on creating a more encapsulated analytics wrapper. There is a lot of "off the top of my head" cruft in here. Nothing in here should be considered best practice.

### History
Ignore everyting that has to do with history. I was playing with ways of "auto enrolling" in page change events.

### Context
The Context API was added to remove any depencdencies on Redux. Use this for events that cross mount/unmount boundaries. ** most of the complexity in this strawman comes from the need to use context API. ** If you don't have a need for keeping state (think timer events) for analytics, don't use this and simplify things.

### HOC
The HOC, which provides analytics utility methods to wrapped components, is a bit of a jumble as it needs to provide a utility class which also has access to Context'

### Utility Class

#### logEvent
This is pretty straight forward and the easiest way to use this. Just send in string name for the first param and an key/val object for the second.

#### mapPropsToEvent
This was an experiment to see if we could subscribe to prop changes and fire events automatically. It works, but it also seems to be more work than just explicitely creating the event. 

This method accepts:<br>
**title:** A string representing the event label<br>
**key:** Either a string, which as interpreted to mean "fire this event anytime the property changes" or a function, which will fire the event whenever the function returns true.<br>
**extras:** An array of functions which, when execture, return an object with two properties: label and value. These will be added to the event as properties

#### StartTimer and EndTimer
This is using the Context API so that timers can survive past component unmount. Start timer just takes a string name, end timer takes the same string name (use constants!) and a databag. It should probably be refactored to so that the property name for the timer can be configured.

### Amplitude Wrapper
You could argue that this is not needed, as the Analytics Utility class wraps the service, already.

### Child.mapEvents.js
This is a way of externalizing event code. It may be confusing because it uses all of the patterns in the same file: mapPropsToEvents in multiple forms and just plain logEvent. The main thing to take away from this is that it's one possible way of getting analytics code out of the main code base.

## Required Events

### Group
**group_id:** Group Id 
**cust_id:** Customer Id

### User
**profile_id:** Profile Id
**interface_id:**

### Device Id
From Machine Id supplied by web auth





