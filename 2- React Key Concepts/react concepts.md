# Imperative
In imperative architechture we change every single dom element ourselves.

# Declarative
We declare a state, react knows what to update, what to change. It'll know already what to update. All the states are defined in one js file or is less complex. It's easier to develope and takes less time.

DOM manipulation is a performance bottleneck. So react came up with a new design.
DOM manipulation is an expensive task, browser needs to repaint and recalculate the layout of the page.

# Components
React offers a component based architechture. Components can be reused once defined.

*Components are simply just javascript functions which receive attributes and return html element like structure*

# Unidirectional Data flow
One way data flow is actually a restriction.
We have a state and then we have element using jsx, react takes the state and component and updates the dom. State changes, the data from state moves down to that component in dom.

# UI Library
The react is actually a ui library, it is only about the view of the user and it only changes the user.
We can use react native, react 360, react desktop, react blest etc where it can be applied to different platforms e.g. web, mobile apps, desktop apps, vr, command line etc.

# Become a good react developer
 * Decide on Components
 * Decide the state where it lives
 * What changes on dom when state changes