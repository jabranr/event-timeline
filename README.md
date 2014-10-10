# Event Timeline

Generate timelines for events with this small JavaScript library.


# Installation

Install using Bower

``` shell
$ bower install event-timeline
```

# Usage

Include `Event Timeline` in HTML document.

``` html
<script src="path/to/event-timeline.min.js"></script>
```

### Create a new Event

``` javascript
var event = new ETL.Event( title, type, location );
```

### Create a new Milestone to Event

``` javascript
var milestone = new event.Milestone( title, description, date, featured, media );
```

### Add Milestone(s) to collection

``` javascript
event.Milestones.push(milestone);

// View Milestones collection

console.log( event.Milestones );
```
